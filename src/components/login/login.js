import React from 'react';
import './login.css';
import {Field, reduxForm, focus} from 'redux-form';
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

    // let successMessage;

    // if (this.props.submitSucceeded) {
    //     successMessage = (
    //     <div className="message message-success">
    //         You're all logged in!
    //     </div>
    //     );
    // };

    let errorMessage;

    if (this.props.error) {
        errorMessage = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }

    if(this.state.signUp) {
        return <RegisterForm />
    } else {
       return (
        <div>
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h3>Login</h3>
                {/* {successMessage} */}
                {errorMessage}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
            <h3>Dont have an account yet?</h3>
            <Link to="/sign-up">Sign Up</Link>
            </div>
        );
    }
  }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
