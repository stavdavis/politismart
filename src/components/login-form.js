import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
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
                        className="signin-username-field"
                        id="username"
                        placeholder="Username"
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="signin-password-field"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                    <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
