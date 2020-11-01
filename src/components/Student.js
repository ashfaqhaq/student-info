import React from 'react'
import jsonData from './details.json';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const users = jsonData
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


function Student(props) {
    const email_id = props.info.email;
    console.log(props.info)
    console.log(email_id)
    const classes = useStyles();
    return (
        <div>
Studnet hai bro
<AppBar position="static">
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
    </IconButton> */}
          
          <Button color="inherit">Logout</Button>
          <Typography variant="subtitle1" className={classes.title}>
            {email_id}
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue={users[email_id].name}
      variant="outlined"
    />
    <TextField
      disabled
      id="outlined-disabled"
      label="Disabled"
      defaultValue={users[email_id].class}
      variant="outlined"
    />
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="outlined"
    />
    <TextField
      id="outlined-read-only-input"
      label="Read Only"
      defaultValue="Hello World"
      InputProps={{
        readOnly: true,
      }}
      variant="outlined"
    />
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
    <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
    <TextField
      id="outlined-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
      variant="outlined"
    />

        </div>
    )
}

export default Student
