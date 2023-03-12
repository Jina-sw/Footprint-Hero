import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './Program.css';
import Nav from './Nav'

function MyLog(){
    return(
        <div className="m">
            <Nav></Nav>
            <div className="pContainer">
                <div className="pTagline">My Log</div> 
            </div>
            <div>
                
            </div>  
        </div>
    )    
}

export default MyLog;