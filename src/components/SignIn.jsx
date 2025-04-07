// pages/Signin.jsx
import React from "react";
import "./Auth.css";

const Signin = () => {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Signin;
