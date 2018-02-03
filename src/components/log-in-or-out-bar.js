import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
import LoginForm from './login-form';
import './log-in-or-out-bar.css';

export class LogoutBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let logInBar;
        let loggedInGreeting;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-button" onClick={() => this.logOut()}>
                    <Link className="logout-link" to="/">Log out</Link>
                </button>
            );
            loggedInGreeting = `Hi, ${this.props.firstName}!`;
        } else {
            logInBar = (
                <LoginForm />
            )
        }
        return (
            <div className="header-bar">
                <div className="logged-in-greeting-div">
                    {loggedInGreeting}
                    {logInBar}
                </div>
                <div className="logout-button-div">
                    {logOutButton}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        firstName: state.auth.currentUser !== null ? state.auth.currentUser.firstName : null,
        loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(LogoutBar);