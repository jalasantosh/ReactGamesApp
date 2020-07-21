import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));


function UserForm(props){
    const classes = useStyles();
    const { register,handleSubmit,errors } = useForm();

    function submitData(data)
    {
        console.log(data);
        console.log(errors);
    }

    

    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(submitData)}>
                <TextField 
                    error = {errors["firstname"]}
                    helperText = "invalid field"
                    name="firstname" 
                    id="standard-basic" 
                    label="firstname" 
                    inputRef={register({required:true, maxLength: 10})} />
                
                <TextField 
                
                    error = {errors["email"]}
                    helperText = "invalid email"
                    name="email" 
                    id="filled-basic" 
                    label="email" 
                    inputRef={register({required:true})} 
                
                
                />
                <TextField 

                    error = {errors["password"]}
                    helperText = "invalid password"
                    name="password" 
                    id="outlined-basic" 
                    label="password" 
                    inputRef={register({required:true, maxLength: 10})} 
                
                />
                
                
                
                
                <input type="submit" />
            </form>
        </div>
    )
}


export default UserForm;
