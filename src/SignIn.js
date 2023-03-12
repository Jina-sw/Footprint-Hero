import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './SignIn.css';

function SignIn() {
    return(
        <div className="sContainer">
            <button className="e"><Link to='/'>Go to Main</Link></button>
            <div className='c'>
            
                <label className="label">Sign In</label>
                <div className='I'>
                    <input className="id" type='text' placeholder="User ID"></input>
                    <input className="pw" type='text' placeholder="Password"></input>
                    
                </div>
                <div className='b'>
                    <button className="e"><Link to='/SignUp'>Sign Up</Link></button>
                    <button className="g">Log In</button>
                    
                </div>
            </div>
            
            
              
        </div>
    )
}

export default SignIn;