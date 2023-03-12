import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './Program.css';
import Nav from './Nav'

function HeroCal(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    // const [lessThan4, setLessThan4] = useState("");
    // const [moreThan4, setMoreThan4] = useState("");
    // const [recycle, setRecycle] = useState("");

    // const num1 = () => {
    //     setElectericBill(electericBill);
    // }

    // const num2 = () => {
    //     setGasBill(gasBill);
    // }
    
    // const num3 = () => {
    //     setOilBill(oilBill);
    // }

    // const num4 = () => {
    //     setMileageBill(mileageBill);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, document, phone };
        fetch('http://localhost:8000/home', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // body: JSON.stringify(data)
            body: new URLSearchParams(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error)=>{
            console.error('Error:', error)
        });
            
    
    }

    // const num5 = () => {
    //     setLessThan4(lessThan4);
    // }

    // const num6 = () => {
    //     setMoreThan4(moreThan4);
    // }

    // const num7 = () => {
    //     setRecycle(recycle);
    // }

    return(
        <div className="m">
            <Nav></Nav>
            <div className="pContainer">
                <div className="pTagline">Hero Calculator</div> 
            </div>
            <div className="tagline">
               Fill in the blanks below 
            </div>
            
            <form onSubmit={handleSubmit}>


                <input type="text" value={name} onChange= {e => setName(e.target.value)}  />
                <input type="text" value={email} onChange= {e => setEmail(e.target.value)}  />
                <input type="text" value={document} onChange= {e => setDocument(e.target.value)}  />
                <input type="text" value={phone} onChange= {e => setPhone(e.target.value)}  />
                {/* <input type="text" onchange= {field => setLessThan4(field.target.value)}  />
                <input type="text" onchange= {field => setMoreThan4(field.target.value)}  /> */}

                {/* <label>
                    <input
                        type="radio"
                        value="YES"
                        checked={recycle === 'YES'}
                        onChange={setRecycle("YES")}
                    />
                    YES
                </label>
                <label>
                    <input
                        type="radio"
                        value="NO"
                        checked={recycle === 'NO'}
                        onChange={setRecycle("NO")}
                    />
                    NO
                </label> */}
                <button type='submit'>press</button>
            </form>
              
        </div>
    )
}

export default HeroCal;