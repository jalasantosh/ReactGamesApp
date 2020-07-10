import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="firstname" />
                <TextField id="filled-basic" label="email" />
                <TextField id="outlined-basic" label="password" />
            </form>
        </div>
    )
}

export default UserForm;