import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import home  from './Home';
import { withRouter } from 'react-router-dom';
import dashboard from './DashBoard'

const layout= ()=>{
    console.log('layout');
    return(
        <div>
        <Switch>
         <Route path='/home' component={home} />
         <Route component={dashboard}/>
        </Switch>
        </div>
    )
}
export default layout;