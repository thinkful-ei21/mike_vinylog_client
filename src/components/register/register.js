import React from 'react';
import './register.css';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
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
    console.log(user);
    return this.props
      .dispatch(registerUser(user))
  //    .then(() => this.props.dispatch(login(username, password)))
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers
            .get('content-type')
            .startsWith('application/json')
        ) {
          // It's a nice JSON error returned by us, so decode it
          return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return;
    })
    .then(() => console.log('Submitted with values', values))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      );
    });
  }

  render() {
  let successMessage;
  if (this.props.submitSucceeded) {
    successMessage = (
      <div className="message message-success">
        You're all signed up!
      </div>
    );
  }

  let errorMessage;
  if (this.props.error) {
    errorMessage = (
      <div className="message message-error">{this.props.error}</div>
    );
  }

  return (
    <div className="register-form">
      <h3>Sign Up</h3>
      <form 
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {successMessage}
        {errorMessage}
        <Field
          label="Username"
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <Field
          label="Password"
          component={Input}
          type="password"
          name="password"
          validate={[required, nonEmpty, passwordLength, isTrimmed]}
        />
        <Field
          label="Confirm Password"
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Sign Up
        </button>
      </form>
    </div>
    );
  }
}

export default reduxForm({
  form: 'register',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('register', Object.keys(errors)[0]))
})(RegisterForm);