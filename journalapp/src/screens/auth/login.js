import React, { useState } from 'react';
import { Paper, TextField, makeStyles, FormControl, Button, Typography } from '@material-ui/core';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme)=>({
    
}))

function Login(props){
    const classes = useStyles();

    const [userDetails,setUserDetails] = useState({});

    const handleChange = (event)=>{

        // console.log(event.target.name+" : "+event.target.value);
        var key = event.target.name;
        var val = event.target.value;
        
        setUserDetails({...userDetails,[key]:val});

    }

    function onLoginClick(){

        // loading start
       axios.post('http://localhost:8085/addUser',userDetails)
       .then(function(response){

        console.log(response)

        // login screen

       })

       .catch(function(error){
           console.log(error);

           // display errror screen
       })

       .finally(function(){
            // stop loading
       })


        // props.setAuthorized(true);
    }

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"green"}}>
            <div className="loginForm">
                <Paper style={{width:300,padding:32,margin:32}} elevation={3}>
                    <form className={classes.root} noValidate autoComplete="off">

                        <Typography variant="h5" style={{marginBottom:12}}> Login </Typography>

                        <TextField name="username" onChange={handleChange} id="standard-basic" label="Username / Email" fullWidth/>                       
                        
                        <TextField name="password" onChange={handleChange} id="standard-basic" input type="password" label="Password" fullWidth/>

                        <div style={{display:"flex",justifyContent:"space-between",marginTop:12}}>
                            <span style={{fontSize:12,paddingTop:10}}>
                                <Link to="/forgotPassword">
                                    Forget password?..
                                </Link>
                            </span>
                            <Button variant="contained" color="primary" onClick={(e)=> onLoginClick()}> Login </Button>
                        </div>
                        <div style={{marginTop:16}}>
                            <span style={{fontSize:12}}>
                               <Link to="signup">
                                    Not registered yet? please click here to sign up
                                </Link> 
                            </span>                            
                        </div>                                        
                    </form>
                </Paper>
            </div>
        </div>
    )
}


export default Login;