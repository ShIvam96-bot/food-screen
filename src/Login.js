import React, {useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login__container">
           <h1 className="login__heading">Bid Room</h1>
           <p1 className="login__para">ARKI CONSTRUCTION INC.</p1>
           <form className="login__form" action="" onSubmit="">
            <div className="login__input">
                <input type="text" placeholder="Enter Email" name="email" id="email" style={{height:"30px", width:"250px"}}
                value ={email} onChange = {setEmail} /> <br/>
            </div>

            <div className="login__input">
                <input type="password" placeholder="Enter the Password" name="password" id="password" 
                style={{height:"30px", width:"250px"}}
                value ={password} onChange = {setPassword} /> <br/>
            </div>

            <button className="login__button" type="submit">Login</button>

            <Link to="/Registration">Haven't Registered yet</Link>
            </form>
        </div>
    );
}

export default Login

