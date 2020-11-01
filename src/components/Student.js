import React  from 'react'
import jsonData from './details.json';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const users = jsonData


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
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
  
    const email_id = props.info.email;
    console.log(props.info)
    console.log(email_id)
   
    const handleChange=(e)=>{
      console.log(e.target.id)
      users[email_id].[e.target.id] = e.target.value;
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
      label="Required"
      defaultValue={users[email_id].name}
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
      label="Disabled"
      defaultValue={users[email_id].class}
      
      InputProps={{
        readOnly: true,
      }}
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
      defaultValue= {users["admin"].name}
      helperText="Some important text"
      variant="outlined"
      
    />

        </div>
    )
}


export default Student
