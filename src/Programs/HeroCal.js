import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './Program.css';
import Nav from './Nav'

function HeroCal(){
   

    return(
      
        <div className="m">
            <Nav></Nav>
            <div className="pContainer">
                <div className="pTagline">Hero Calculator</div> 
            </div>
            <div className="tagline">
               How much did you generate carbon footprints?
            </div>
            <div className="inputs">
                <input type='text' placeholder="Electronic Bill"></input>
                <input type='text' placeholder="Gas Bill"></input>
                <input type='text' placeholder="Oil Bill"></input>
                <input type='text' placeholder="Flight Bill"></input>
            </div>
            <div className="tagline">
               How much did you reduce carbon footprints?
            </div>
            <div className="inputs">
                <input type='text' placeholder="Recycle"></input>
                {/* <input type='text' placeholder="></input>
                <input type='text'></input>
                <input type='text'></input> */}
            </div>
            
        </div>
              
        
    ) 
} 

export default HeroCal;