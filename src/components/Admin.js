import React from 'react'
import jsonData from './details.json';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const users = jsonData

console.log(users)
function createData(name, _class, gender, dob, contact) {
    return { name, _class, gender, dob, contact };
  }
const rows = 
    Object.keys(users).map((items) => {
           
        return (createData(users[items].name,users[items].class,users[items].gender,users[items].contact)
           //  console.log(users[items].name)
            )
       })
    
    
console.log(rows);
function Admin(props) {

// console.log(jsonData)
// const users = [...jsonData]

// console.log(users[0])
const classes = useStyles();
    console.log(props.info)
    return (
        <div>
       
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Students</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Gender&nbsp;(g)</TableCell>
            <TableCell align="right">Contact&nbsp;</TableCell>
            <TableCell align="right">Details&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row._class}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



        
      
        </div>



    )
}

export default Admin
