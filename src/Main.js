import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import './Main.css';
import SignIn from "./SignIn";

function main() {
    const signInPage = () => {
        return(
            <Route path="/" element={<SignIn/>}></Route>
        )
    } 
    return(
        <div className="container">
            <div className="logo">
                Footprint Hero
            </div>
            <div className="filler"></div>
            <div className="tagline">
                We Fight for the Greener World
            </div>
            <div className="bg">
                <div className="bgLine">
                    Let's get into it...
                </div>
                <div className="buttons">
             
                    <button className="signin"><Link to='/SignIn'>Sign In</Link></button>

                </div>
                
            </div>
        </div>
    )
}

export default main;