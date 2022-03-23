import React, { useState } from "react";
import Car from "./Car";

function Profile({ user, setUser, cars, setCars, handleBuyNow }) {
  const [errors, setErrors] = useState([]);
  const [userForm, setUserForm] = useState({
    name: user.name,
    email: user.email,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const submitChange = (e) => {
    if (window.confirm("Are you sure you want to update this account?"))
      fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userForm),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this account?"))
      fetch(`/users/${user.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          setUser(null)
          window.location.reload(true)
        }
      });
  };

  return (
    <div className="auth-inners">
      <h2>My Profile</h2>
      <ul className="account-info">
        <li className="account-list">
          Name:
          <input
            type="text"
            name="name"
            value={userForm.name}
            onChange={handleChange}
          />
        </li>
        <li className="account-list">
          Email Address:
          <input
            type="text"
            name="email"
            value={userForm.email}
            onChange={handleChange}
          />
        </li>
      </ul>
      <button className="profile-button" onClick={handleDelete}>
        Delete Account
      </button>
      <button className="profile-button" onClick={submitChange}>
        Update Account
      </button>
      <div>
        {errors.map((err) => (
          <span>!{err}</span>
        ))}
      </div>
      <h2>My cars</h2>
      <div className="profile-car">
        {cars
          .filter((car) => car.user.id === user.id)
          .map((car) => {
            return (
              <Car
                key={car.id}
                car={car}
                handleBuyNow={handleBuyNow}
                setCars={setCars}
                user={user}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Profile;
