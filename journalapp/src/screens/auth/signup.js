import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import "./signup.css"





function Signup(props){  
    return(
       
        <div style={{height:"100vh"}}>
            <Grid style={{backgroundColor:"#55efc4"}} container>
                <Grid item xs={12} sm={6} style={{background:"#00b894",borderRadius:"32px 0px 0px 32px"}}></Grid>
                <Grid item xs={12} sm={6}></Grid>
            </Grid>     
        </div>    
    
    )
}



export default Signup;