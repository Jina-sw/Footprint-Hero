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
                <input type='text' placeholder="Electronic Bill" className="s"></input>
                <input type='text' placeholder="Gas Bill" className="s"></input>
                <input type='text' placeholder="Oil Bill" className="s"></input>
                <input type='text' placeholder="Flight Bill" className="s"></input>
            </div>
            <div className="tagline">
               How much did you reduce carbon footprints?
            </div>
            <div className="inputs">
                <input type='text' placeholder="Recycle" className="s"></input>
                <input type='text' placeholder="Bringing your cup/water bottle" className="s"></input>
                <input type='text' placeholder="Public transport Utilization" className="s"></input>
              
            </div>
            <div className='b bb'>
            <button className="e">Calculate!</button>
            </div>
            
        </div>
              
        
    ) 
} 

export default HeroCal;