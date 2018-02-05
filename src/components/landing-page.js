import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LawmakerSearch from './lawmaker_search';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing-page">
            <div className="lawmaker-search-section">
                <h1>Find your matching lawmakers:</h1>
                <h2>Select your preferences to see matching lawmakers</h2>
                <h4>(U.S. senators only; other political incumbents coming soon)</h4>
                <LawmakerSearch />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
