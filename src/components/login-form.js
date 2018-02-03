import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link} from 'react-router-dom';
import './login-form.css'

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className="login-section">
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="signin-field signin-username-field"
                    />
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="signin-field signin-password-field"
                    />
                    <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
                        Login
                    </button>
                    <div className="register-link-div">
                        <Link className="register-link" to="/register">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
