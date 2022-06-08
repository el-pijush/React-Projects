import { useState } from 'react'
import './App.css';
import {Route,Routes} from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Dashboard} from "./components/dashboard";
import {Login} from "./components/login";
import {Signup} from "./components/signup"
import {Privateroute} from "./Routes/privateroute";
import { useSelector } from "react-redux"

function App() {
  
  const {isAuthenticated}=useSelector((state)=>state.login)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="" element={
            <Privateroute isAuthenticated={isAuthenticated}>
              <Dashboard/>
            </Privateroute>
        }/>
    
      </Routes>
    </div>
  )
}

export default App
