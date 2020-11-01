import React , {Fragments} from 'react'
import Admin from './Admin'
import Student from './Student'
function Dashboard(props) {
    const{email , name ,password ,role}= props.location.state.user
    // console.log(prop);
    return (
        <>
       {/* The logged in user is {role==="admin"? role:"not admin"} */}
        The logged in user is {role==="admin"? props.location.state.user.role:"not admin"}
        {role==="admin"? <Admin info= {props.location.state.user} />:<Student info= {props.location.state.user} />}
        
        </>
    )
}

export default Dashboard
