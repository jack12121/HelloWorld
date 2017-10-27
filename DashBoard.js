import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Dashboard extends Component {

    render() {
        return(
        <div>
            <NavLink to='/home'>
                'Home' </NavLink>
                <NavLink to='/home'>
                'About' </NavLink>
                <NavLink to='/home'>
                'ContactUs' </NavLink>
                <NavLink to='/home'>
                'Carrier' </NavLink>
        </div>
        );
    }
}
export default Dashboard;

