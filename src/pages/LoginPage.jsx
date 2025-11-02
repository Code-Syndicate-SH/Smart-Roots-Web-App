import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add login logic here
    console.log("Login form submitted!");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="auth-switch-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
