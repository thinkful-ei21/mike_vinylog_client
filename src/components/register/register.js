import React from 'react';
import './register.css';


const Register = () => {

  return (
    <div className="register-form">
    <h3>Sign Up</h3>
      <form onSubmit={e => this.onSubmit(e)} >
      <label htmlFor="username">Username</label>
      <input
          ref={input => (this.input = input)}
          type="text"
          name="username"
      />
      <label htmlFor="password">Password</label>
      <input
          ref={input => (this.input = input)}
          type="password"
          name="password"
      />
      <label htmlFor="passwordConfirm">Confirm password</label>
      <input
          ref={input => (this.input = input)}
          type="password"
          name="passwordConfirm"
      />
      <button
          type="submit">
          Sign Up
      </button>
    </form>
  </div>
  )
}

export default Register;