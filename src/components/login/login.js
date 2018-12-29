import React from 'react';
import './login.css';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import Input from '../input';
import {login} from '../../actions/auth-actions';
import {required, nonEmpty} from '../../validators';
import RegisterForm from '../register/register';
import { Link } from 'react-router-dom';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
        signUp: false
    };
  }

  goToSignUpPage(e) {
    e.preventDefault();
    this.setState({
        signUp: !(this.state.signUp)
    });
  }

  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
    .then(() => this.props.history.push('/home'));
  }

  render() {

    let errorMessage;
    if (this.props.error) {
        errorMessage = (
        <div className="form-error" aria-live="polite">
            {this.props.error}
        </div>
        );
    }

    let spinner;
    if (this.props.loading) {
        console.log('loading spinner')
        return spinner = (<Spinner spinnerName="circle" noFadeIn />)
    }

  if (this.state.signUp) {
    return <RegisterForm />
  } else {
    return (
      <div className="form-div" aria-live="polite" aria-atomic="true" role="complementary"> 
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <h3>Sign in</h3>
        {errorMessage}
        {spinner}
        <Field
          label="Username"
          component={Input}
          type="text"
          name="username"
          id="username"
          aria-label="Username"
          aria-required="true"
          validate={[required, nonEmpty]}
        />
        <Field
          label="Password"
          component={Input}
          type="password"
          name="password"
          id="password"
          aria-label="Password"
          aria-required="true"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
        Sign in
        </button>
      </form>
      <div className="signup-note">
        <h3>Dont have an account yet?</h3>
        <Link style={{color:"#ccc"}} to="/sign-up" className="sign-up-link">Sign Up</Link><br />
        <p className="test-user">Need a test account?<br />
        <span className="test-user-title">Username: </span>
        <span className="test-user-credential">test-user</span><br />
        <span className="test-user-title">Password: </span>
        <span className="test-user-credential">test-user</span>
        </p>
      </div>
    </div>
    );
  }
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
});

LoginForm = connect(
  mapStateToProps
)(LoginForm)

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
