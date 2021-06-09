import React, {useState} from 'react';
import "./Registration2.css";
import axios from "axios";

function Registration2() {

    const [userRegistration, setUserRegistration] = useState( {
        name:"",
        email:"",
        date:"",
        vendor:"",
        state:"",
        religion:"",
        pincode:"",
        address:"",
        address2:""
    })

    const changeHandler = (e) => {
        const name= e.target.name;
        const value= e.target.value;
    console.log(name,value)
    setUserRegistration({...userRegistration, [name] : value})
}

const submitHandler = (e) => {
    e.preventDefault();
   console.log(userRegistration);

        axios.post('https://jsonplaceholder.typicode.com/posts',userRegistration)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="registration2__container">
        <form className="registration2__form" onSubmit={submitHandler}>
            <h1 className="heading">Bid Room</h1>
            <p1 className="paragraph">ARKI CONSTRUCTION INC.</p1>
            <div className="registration2__input">
                <input type="text" placeholder="Enter Vendor's Name" name="name" id="name" 
                value ={userRegistration.name} onChange={changeHandler} /><br/>
            </div>

            <div className="registration2__input">
            <input type="text" placeholder="Enter Vendor's Email" name="email" id="email" 
            value ={userRegistration.email} onChange={changeHandler} /><br/>
            </div>

            <div className="registration2__input">
            <input type="date" placeholder="Enter associated  date" name="date" id="date" 
            value ={userRegistration.date} onChange={changeHandler} /><br/>
             </div>

            {/* <select onChange={(e) => setUserRegistration(e.target.value)} value={Option}>
             <option>Vendor 1</option>
             <option>Vendor 2</option>
             <option>Vendor 3</option>
             <option>Vendor 4</option>
             <option>Vendor 5</option>
    </select>*/}
             <div className="registration2__input">
             <input type="text" placeholder="Enter vendor" name="vendor" id="vendor" 
             value ={userRegistration.vendor} onChange={changeHandler} /><br/>
             </div>

             <div className="registration2__input">
                <input type="text" placeholder="Enter State" name="state" id="state" 
                value ={userRegistration.state} onChange={changeHandler} /><br/>
            </div>

            <div className="registration2__input">
                <input type="text" placeholder="Enter Religion" name="religion" id="religion" 
                value ={userRegistration.religion} onChange={changeHandler} /><br/>
            </div>

            <div className="registration2__input">
                <input type="text" placeholder="Enter Vendor's city" name="city" id="city" 
                value ={userRegistration.city} onChange={changeHandler} /><br/>
            </div>

            <div className="registration2__input">
                <input type="text" placeholder="Enter Vendor's Pincode" name="pincode" id="pincode" 
                value ={userRegistration.pincode} onChange={changeHandler} /><br/>
            </div>

            <div className="registration2__input">
                <input type="text" placeholder="Please enter Address1" name="address" id="address" 
                value ={userRegistration.address} onChange={changeHandler} /><br/>
            </div>

            <div className="registration2__input">
                <input type="text" placeholder="Enter address2(optional)" name="address2" id="address2" 
                value ={userRegistration.address2} onChange={changeHandler} /><br/>
            </div>

            <button className="submit__button" type="submit" >Register</button>
            </form>
        </div>
    )
}

export default Registration2
