import React  from 'react'
import jsonData from './details.json';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const users = jsonData


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'block'
      /* flexWrap: 'wrap', */
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
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
  
    const email_id =  props.info ;
    console.log(props.info)
    console.log(email_id)
   
    const handleChange=(e)=>{
      console.log(e.target.id)
    /* users[email_id].[e.target.id] = e.target.value; */
      console.log(users[email_id])
      /*file.set(users[email_id].[e.target.id], e.target.value); */
      // file.set(users[email_id].[e.target.id], e.target.value);
      // file.set("admin.name","popop")
      // console.log(file.get())
      // file.save();
    }
    const classes = useStyles();
    
    return (
      <div className={classes.root}>


      <TextField
      required
      id="name"
      label="Name"
      value={users[email_id].name}
      variant="outlined"
      onChange={handleChange}
      fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
    />
   
    <TextField
      
      id="student_class"
      label="Class"
     value={users[email_id].class}
      
      InputProps={{
        readOnly: true,
      }}
      variant="outlined"
    />
    
    <TextField
      id="outlined-read-only-input"
      label="DOB"
      value={users[email_id].dob}
      InputProps={{
        readOnly: true,
      }}
      variant="outlined"
    />
    <Select
    disabled
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={users[email_id].gender}
          // onChange={handleChange}
          label="Gender"
          helperText="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
       
        

      <TextField
      id="outlined-helperText"
      label="Contact"
      value= {users[email_id].contact}
      
      variant="outlined"
      
    />
    <TextField
      id="outlined-helperText"
      label="Address"
      value= {users[email_id].address.country}
      helperText="Country"
      variant="outlined"
      
    />
    <TextField
      id="outlined-helperText"
      label="Address"
      defaultValue= {users[email_id].address.city}
      helperText="City"
      variant="outlined"
      
    />

        </div>
    )
}


export default Student
