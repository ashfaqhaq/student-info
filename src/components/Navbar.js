import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function Navbar(props) {
  
    return (
      <div>
        
        
        <AppBar position="static" style={{ background: '#ffffff' }}>
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
    </IconButton> */}
    <Button><HomeIcon style={{ color: green[500] }} /> <Link style={{ textDecoration: 'none' , color: green[500] }} to="/" >  Home </Link> </Button>
  { /*<Button onClick=<Link style={{ textDecoration: 'none' }} to="/about" />> <AccountCircleIcon /> </Button> */}
  <Button > <AccountCircleIcon /> <Link  style={{ textDecoration: 'none' }} to="/login">  { props.auth} </Link> </Button>

          
        {/* <Typography variant="subtitle1" className={classes.title}>
            
  // </Typography> */}
        </Toolbar>
      </AppBar>
       
      </div>
    );
  };

export default Navbar