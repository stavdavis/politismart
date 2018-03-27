import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import LawmakerSearch from './lawmaker_search';
import './landing-page.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="lawmaker-search-section">
                    <h1>Find your matching lawmakers:</h1>
                    <h2>Select your preferences to see matching U.S. senators</h2>
                    <h4>(Members of congress and other political incumbents coming soon)</h4>
                    <LawmakerSearch />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
 