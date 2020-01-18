import React, { Component } from 'react';
import { connect } from 'react-redux'
import Router from '../router'

class AppNavigation extends Component {

    render() {
        return (
            <Router />
        )
    }
}

export default connect()(AppNavigation)

