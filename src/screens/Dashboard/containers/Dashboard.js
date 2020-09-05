import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashboardMarkup from '../components/Login';
import Login from '../components/Login';
import Register from '../components/Register'
class Dashboard extends Component {
    render() {
        return (
            <>
            
            </>
        )
    }
}

export default withRouter(connect()(Dashboard));