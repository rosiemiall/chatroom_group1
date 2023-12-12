import { useState } from "react";

const UserForm= ({postUser}) => {

    const [stateUser, setStateUser] = useState({
        userName : "",
        email : "",
        // hardcoded role and soft deleted so DTO for post request would work
        role:1,
        softDeleted: false
    })

    const handleFormSubmit = (event) => {
        event.preventDefault()

        if(stateUser.userName === "" || stateUser.email === "" ) {
            alert("Please fill in the sign up form")
            return
        }
        // alert
        postUser(stateUser)
        setStateUser({
            userName : "",
            email : "",
            role:1,
            softDeleted: false
        })
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedUser = {...stateUser};
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser);
    }
    return ( 
        <form id="user-form" onSubmit={handleFormSubmit}>
            <h3>SIGN UP!</h3>
            <label htmlFor="user-name">Username:</label>
            <input 
            id= "user-name"
            name= "userName"
            type="text"
            placeholder="Type username"
            onChange={handleChange}
            value={stateUser.userName}/>

            <label htmlFor="user-email">Email:</label>
            <input 
            id= "user-email"
            name= "email"
            type="email"
            placeholder="Type email"
            onChange={handleChange}
            value={stateUser.email}/>
        <input type='submit' value= "sign up"  id = "send-button" className='button'/>             
        </form>
     );
}
 
export default UserForm;