import React  from 'react'
import Admin from './Admin'
import Student from './Student'
import Navbar from './Navbar'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function Dashboard(props) {
    const{role}= props.location.state.user
    // console.log(prop);
   
    return (
        <>
        <Navbar auth="Logout"/>
       {/* The logged in user is {role==="admin"? role:"not admin"} */}
       
        <AppBar position="static">
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
    </IconButton> */}
          
          
          Logged in as {role}
         
        </Toolbar>
      </AppBar>


        {role==="admin"? <Admin info= {props.location.state.user} />:<Student info= {props.location.state.user} />}
        
        </>
    )
}

export default Dashboard
