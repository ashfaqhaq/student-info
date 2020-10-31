import React from 'react'
import jsonData from './details.json';


function Admin(props) {

// console.log(jsonData)
// const users = [...jsonData]
const users = jsonData

console.log(users)
// console.log(users[0])

    console.log(props.info)
    return (
        <div>
       This is the  
            { props.info.email} reporting to work
            
          { Object.keys(users).map((items) => {
           
             return (
                //  console.log(users[items].name)
                 <li> <span> {users[items].name}  </span>
                       {users[items].class}     
                 </li> )
            })}
        </div>



    )
}

export default Admin
