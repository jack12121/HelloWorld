import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import home  from './Home';
import about from './About';
import contact from './Contact';
import { withRouter } from 'react-router-dom';
import dashboard from './DashBoard'

const layout= ()=>{
    console.log('layout');
    return(
        <div>
        <Switch>
         <Route path='/home' component={home} />
         <Route path='/about' component={about} />
         <Route path='/contact' component={contact} />
         <Route component={dashboard}/>
        </Switch>
        </div>
    )
}
export default layout;