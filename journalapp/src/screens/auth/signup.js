import React from 'react';
import { Paper, TextField, makeStyles, FormControl, Button, Typography , Grid, Divider, Hidden} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "./signup.css"

const useStyles = makeStyles((theme)=>({
    
}))


function Signup(props){  
    
    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    return(
       
        <div style={{height:"100vh"}}>
            <Grid style={{backgroundColor:"#55efc4",height:"100vh",width:"100vw"}} container>
                <Hidden smDown>
                    <Grid wrap="wrap" item xs={12} sm={6} ></Grid>
                </Hidden>
                
                <Grid item xs={12} sm={6} style={{background:"#00b894"}} className="loginGrid">
                    <Paper style={{maxWidth:350}} elevation={3}>
                        <Typography variant="h6" style={{padding: 12}}> Signup </Typography>
                        <Divider/>
                        <form onSubmit={handleSubmit(onSubmit)} 
                            style={{padding:"22px"}} className={classes.root} noValidate autoComplete="off">

                            
                            <TextField error={errors['firstname']} name="firstname" inputRef={register({ required: true,maxLength:15 })} id="standard-basic" label="First Name" fullWidth/>                       
                            <TextField error={errors['lastname']} name="lastname" inputRef={register({ required: true })} id="standard-basic" label="Last Name" fullWidth/>  
                            <TextField error={errors['email']} name="email" inputRef={register({ required: true,minLength:4})} id="standard-basic" label=" Email" fullWidth/>  
                            <TextField error={errors['mobilenumber']} name="mobilenumber" inputRef={register({ required: true })} id="standard-basic" label="Mobile Number" fullWidth/>  
                           

                            <div style={{display:"flex",justifyContent:"space-between",marginTop:12}}>
                                <Link to="">
                                    <Button color="primary"> Signin Instead </Button>
                                </Link>
                                <Button type="submit" variant="contained" color="primary"> Signup </Button>
                            </div>                                        
                        </form>
                    </Paper>
                </Grid> 
            </Grid>
        </div>    
    
    )
}



export default Signup;