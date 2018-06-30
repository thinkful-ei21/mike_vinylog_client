import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="register-form">
    <h3>Sign Up!</h3>
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
      <label htmlFor="passwordConfirm">Confirm password</label>
      <input
          type="password"
          name="passwordConfirm"
      />
      <button
          type="submit">
          Register
      </button>
    </form>
  </div>
  )
}

export default Register;