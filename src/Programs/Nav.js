import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './Program.css';

function Nav(){
    return(
        <div>
            <div className="n">
                <div className="pLogo">
                    <div>Footprint Hero</div>
                </div>
                <button className="e p"><Link to='/PrMain'>Back</Link></button>

            </div>
            
        </div>
        
    )
}

export default Nav;