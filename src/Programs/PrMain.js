import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../SignIn.css';

function PrMain() {
    return(
        <div className="sContainer">
            <button className="e"><Link to='/'>Go to Main</Link></button>
            <div className='c'>
            
                <label className="label">Which One?</label>
            
                <div className='b'>
                    <button className="e"><Link to='/MyLog'>My Log</Link></button>
                    <button className="g"><Link to='/HeroCalculator'>Hero Calculator</Link></button>
                    
                </div>
            </div>
            
            
              
        </div>
    )
}

export default PrMain;