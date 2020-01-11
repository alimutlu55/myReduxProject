import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import Router from '../router'

class AppNavigation extends Component {

    componentDidMount() {
        axios
            .get('https://randomuser.me/api/')
            .then(user => user.data.results[0])
            .then(user => {
                this.props.dispatch(fetchUser(user))
            })
    }

    render() {
        return (
            <Router />
        )
    }
}

export default connect()(AppNavigation)

