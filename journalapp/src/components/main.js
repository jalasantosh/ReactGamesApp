import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Auth from '../screens/auth/auth';




function Main(props){
    const [isAuthorised,setAuthorized] = useState(false);
    return(
        <div>
            {
                isAuthorised ? 
                <App/> : <Auth setAuthorized={setAuthorized} />
            }
        </div>
    )
}




export default Main;