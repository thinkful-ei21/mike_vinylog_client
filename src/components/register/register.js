import React from 'react';
import './register.css';
import {reduxForm, Field, focus} from 'redux-form';
import { Link } from 'react-router-dom';
import {registerUser} from '../../actions/user-actions';
import {login} from '../../actions/auth-actions';
import Input from '../input';
import {required, nonEmpty, isTrimmed, length, matches } from '../../validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');


export class RegisterForm extends React.Component {
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => this.props.history.push('/home'));
  }

  render() {

  let errorMessage;
  if (this.props.error) {
    errorMessage = (
      <div className="message message-error"aria-live="polite" aria-atomic="true">{this.props.error}</div>
    );
  }

  return (
    <div className="register-form" aria-live="polite" aria-atomic="true" role="complementary">
      <h3>Sign Up</h3>
      <form 
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {errorMessage}
        <Field
          label="Username"
          component={Input}
          type="text"
          name="username"
          aria-label="Username"
          aria-required="true"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <Field
          label="Password"
          component={Input}
          type="password"
          name="password"
          aria-label="Password"
          aria-required="true"
          validate={[required, nonEmpty, passwordLength, isTrimmed]}
        />
        <Field
          label="Confirm Password"
          component={Input}
          type="password"
          name="passwordConfirm"
          aria-label="Confirm Password"
          aria-required="true"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          className="signup-button"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Sign Up
        </button>
      </form>
      <div className="login-note">
        <Link to="/login">Return to Login page</Link>
      </div>
    </div>
    );
  }
}

export default reduxForm({
  form: 'register',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('register', Object.keys(errors)[0]))
})(RegisterForm);