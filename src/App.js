import logo from './logo.svg';
import './App.css';
//import Timer from './components/timer';
import Login from './components/login'; 
import Registration from './components/register';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {useState} from "react"
import Home from './components/home';
function App() {
  const[token,settoken]=useState("")
  const[email,setemail]=useState("")
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Login settoken={settoken} setemail={setemail}/>}/>
        <Route path="/home" element={<Home email={email} token={token} settoken={settoken}/>}/>

      </Routes>
      </BrowserRouter>
      
      
    
  );
}

export default App;
