import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-form">
    <h3>Login</h3>
      <form>
      <label htmlFor="username">Username</label>
      <input
          type="text"
          name="username"
      />
      <label htmlFor="password">Password</label>
      <input
          type="password"
          name="password"
      />
      <button
          type="submit">
          Login
      </button>
      <h5>Dont have an account yet?</h5>
      <button
          type="submit">
          Sign Up
      </button>
    </form>
  </div>
  )
}

export default Login;