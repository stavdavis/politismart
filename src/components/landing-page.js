import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LawmakerSearch from './lawmaker_search';
import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing-page">
            <div className="login-bar">
                <LoginForm />
                <Link className="register-link" to="/register">Register</Link>
            </div>
            <div className="lawmaker-search-section">
                <h1>Find your matching lawmakers:</h1>
                <LawmakerSearch />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
