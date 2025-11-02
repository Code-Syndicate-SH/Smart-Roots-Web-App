import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Step 1: Import your new AuthApi service
import { AuthApi } from "../api/authApi.js";
const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // We no longer need the 'success' state, as the toast will handle it
  // const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

      await AuthApi.register(payload);

      // --- 2. THIS IS THE NEW SUCCESS LOGIC ---

      // Show a success toast notification
      toast.success("Registration successful! Please check your inbox.");

      // After the toast has been visible for a few seconds...
      setTimeout(() => {
        // Open Gmail in a new tab. This is a good guess for many users.
        window.open("https://mail.google.com", "_blank");

        // Navigate the current tab back to the homepage
        navigate("/");
      }, 4000); // The delay matches the toast duration
    } catch (err) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors.join(" "));
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      // We don't want to setLoading(false) on success, because we are navigating away.
      // The component will unmount anyway. We only need it for the error case.
      if (!navigate) {
        // A simple check to see if we're in the success path
        setLoading(false);
      }
    }
  };

  // --- REFINED handleSubmit with better loading state management ---
  const newHandleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };
      await AuthApi.register(payload);
      toast.success("Registration successful! Please check your inbox.");
      setTimeout(() => {
        window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
        navigate("/");
      }, 4000);
    } catch (err) {
      // If there's an error, we MUST turn off the loading state
      setLoading(false);
      if (err.response?.data?.errors) {
        setError(err.response.data.errors.join(" "));
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
    // No 'finally' block needed with this structure
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/*
          3. We no longer need the success message div, the toast handles it.
          We can also remove the 'name' attribute from the form inputs
          as the 'id' is sufficient for the `handleChange` function as written before.
        */}
        <h1>Create an Account</h1>

        {error && (
          <div className="form-message form-message-error">{error}</div>
        )}

        <form onSubmit={newHandleSubmit}>
          {" "}
          {/* Using the refined handler */}
          {/* ... your form inputs for name, email, password, and role ... */}
          {/* These remain the same as the previous step */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label>Register as</label>
            <div className="role-options">
              <label htmlFor="role-user" className="role-option">
                <input
                  type="radio"
                  id="role-user"
                  name="role"
                  value="User"
                  checked={formData.role === "User"}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span>User</span>
              </label>
              <label htmlFor="role-researcher" className="role-option">
                <input
                  type="radio"
                  id="role-researcher"
                  name="role"
                  value="Researcher"
                  checked={formData.role === "Researcher"}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span>Researcher</span>
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="auth-switch-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
