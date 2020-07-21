import React, { useState } from 'react';
import Login from './login';
import { Switch, Route,Link } from 'react-router-dom';
import AddStory from "../../components/addStory";
import Signup from './signup';
import ForgotPassword from './forgotPassword';


function Auth(props){
    
    return(
        <div>
            <Switch>               

                <Route path ="/signup">
                    <Signup/>
                </Route>

                <Route path ="/forgotPassword">
                    <ForgotPassword/>
                </Route>

                <Route path="/">
                    <Login setAuthorized={props.setAuthorized}/>
                </Route>
            </Switch>
        </div>
    )
}




export default Auth;