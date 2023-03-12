import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './Main'
import MyLog from "./Programs/MyLog";
import SignIn from "./SignIn";
import SingUp from "./SignUp";
import PrMain from "./Programs/PrMain";
import HeroCal from "./Programs/HeroCal"; 

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Main/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SingUp/>}/>
        <Route path="/MyLog" element={<MyLog/>}/>
        <Route path="/PrMain" element={<PrMain/>}/>
        <Route path="/HeroCalculator" element={<HeroCal/>}/>

     </Routes>
    </Router>
          
      
        
      
  
      
      
   
  );
}

export default App;
