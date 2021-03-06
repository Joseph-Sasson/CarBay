import React, { useState } from "react";

function Signup({ setUser }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const newForm = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.passwordConfirmation,
    };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 className='form-label'>Sign Up</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password confirmation"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-light btn-md btn-block">
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      <div>
        {errors.map((err) => (
          <span>!{err}</span>
        ))}
      </div>
    </form>
  );
}

export default Signup;
