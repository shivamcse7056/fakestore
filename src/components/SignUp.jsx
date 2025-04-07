// pages/Signup.jsx
import React from "react";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </form>
    </div>
  );
};

export default Signup;
