import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './Main'
import MyLog from "./Programs/MyLog";
import SignIn from "./SignIn";
import SingUp from "./SignUp"; 

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Main/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SingUp/>}/>
        <Route path="/MyLog" element={<MyLog/>}/>
     </Routes>
    </Router>
          
      
        
      
  
      
      
   
  );
}

export default App;
