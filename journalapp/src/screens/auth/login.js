import React from 'react';
import { Paper, TextField, makeStyles, FormControl, Button, Typography } from '@material-ui/core';
import './login.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    
}))

function Login(props){
    const classes = useStyles();

    function onLoginClick(){
        props.setAuthorized(true);
    }

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"green"}}>
            <div className="loginForm">
                <Paper style={{width:300,padding:32,margin:32}} elevation={3}>
                    <form className={classes.root} noValidate autoComplete="off">

                        <Typography variant="h5" style={{marginBottom:12}}> Login </Typography>
                        <TextField id="standard-basic" label="Username / Email" fullWidth/>                       
                        
                        <TextField id="standard-basic" input type="password" label="Password" fullWidth/>

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