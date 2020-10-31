import React from 'react'
import Admin from './Admin'
function Dashboard(props) {
    const{email , name ,password ,role}= props.location.state.user
    // console.log(prop);
    return (
        <div>
       {/* The logged in user is {role==="admin"? role:"not admin"} */}
        The logged in user is {role==="admin"? props.location.state.user.role:"not admin"}
        {role==="admin"? <Admin info= {props.location.state.user} />:"not admin"}
        
        </div>
    )
}

export default Dashboard
