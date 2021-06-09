import React, {useState} from 'react';
import "./Registration.css";
import {Link} from "react-router-dom";
import axios from "axios";

function Registration() {

    const[registration, setRegistration] = useState( {
        firstName:"",
        lastName:"",
        email:"",
        mobile:"",
        dob:"",
        password:"",
        gender:"",
        state:"",
        position:""
    })

    const changeHandler = (e) => {
            const name= e.target.name;
            const value= e.target.value;
        console.log(name,value)
        setRegistration({...registration, [name] : value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
       console.log(registration)
    
       axios.post('https://jsonplaceholder.typicode.com/posts',registration)
       .then(response => {
           console.log(response)
       })
       .catch(error => {
           console.log(error)
       })
   }


    return (
        <div className="registration__container">
        <h1 className="heading">Bid Room</h1>
        <p1 className="paragraph">ARKI CONSTRUCTION INC.</p1>
        <form className="registration__form" onSubmit={submitHandler}>

        <div className="registration__input">
                <input type="text" placeholder="Enter First Name" name="firstName" id="firstName" 
                value ={registration.firstName} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="text" placeholder="Enter Last Name" name="lastName" id="lastName" 
                value ={registration.lastName} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="text" placeholder="Enter Email" name="email" id="email" 
                value ={registration.email} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="text" placeholder="Enter Mobile Number" name="mobile" id="mobile" 
                value ={registration.mobile} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="date" placeholder="Select Date of Birth" name="dob" id="dob" 
                value ={registration.dob} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="password" placeholder="Enter password" name="password" id="password" 
                value ={registration.password} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="text" placeholder="Enter Gender" name="gender" id="gender" 
                value ={registration.gender} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="text" placeholder="Enter State" name="state" id="state" 
                value ={registration.state} onChange={changeHandler} /> <br/>
        </div>

        <div className="registration__input">
                <input type="text" placeholder="Enter your Position" name="position" id="position" 
                value ={registration.position} onChange={changeHandler} /> <br/>
        </div> 

        <Link to="/Registration2" ><button className="registration__button" type="submit" onClick={submitHandler}>
            Next Step</button></Link>
        </form>
        </div>
            
    )
}

export default Registration
