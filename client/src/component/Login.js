import React, { useState } from "react";

function Login({ setUser }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (event) => {
    setIsLoading(true);
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
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
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={formData.email}
          onChange={(e) => {
            setFormData({
              email: e.target.value,
              password: formData.password
            });
          }}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
        <br/>
      <div className="form-group">
        <label>Password</label>
        <input
          value={formData.password}
          onChange={(e) => {
            setFormData({
              email: formData.email,
              password: e.target.value
            });
          }}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
        <br/>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-dark btn-lg btn-block"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>

      <div>{errors}</div>

    </form>
  );
}

export default Login;
