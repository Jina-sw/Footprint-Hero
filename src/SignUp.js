import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './SignIn.css';

function SignUp() {
    return(
        <div className="sContainer">
            <button className="e"><Link to='/'>Go to Main</Link></button>
            <div className='c'>
            
                <label className="label">Sign Up</label>
                <div className='I'>
                    <input className="id" type='text' placeholder="User ID"></input>
                    <input className="pw" type='text' placeholder="Password"></input>
                    <input className="pw" type='text' placeholder="Password Confirmation"></input>
                </div>
                <div className='b'>
                    <button className="e">Enter</button>
                    
                </div>
            </div>
            
            
              
        </div>
    )
}

export default SignUp;