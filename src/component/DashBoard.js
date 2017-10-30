import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Dashboard extends Component {

    render() {
        return(
        <div>
            <NavLink to='/home'>
                'Home' </NavLink>
                <NavLink to='/about'>
                'About' </NavLink>
                <NavLink to='/contact'>
                'ContactUs' </NavLink>
        </div>
        );
    }
}
export default Dashboard;

