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
               Fill in the blanks below 
            </div>
            <div className="scoreC">
                <div className="score">
                    1800
                </div>
            </div>
              
        </div>
    )    
}

export default HeroCal;