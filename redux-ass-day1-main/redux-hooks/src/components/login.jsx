import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginfailture, loginloading, loginsuccess } from "../Redux/Login/action";

export const Login=()=>{
    const [username,setUsername]=useState("");

    const [password,setpassword]=useState("");

const dispatch=useDispatch();
const navigate=useNavigate();

const handleSubmit=()=>{
    const handledetail={
        username,password
    }
    dispatch(loginloading())

fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
    method:"POST",
    body:JSON.stringify(handledetail),
    headers:{
        "Content-Type":"application/json"
    }

    

}).then((res)=>res.json()).then(()=>{
    dispatch(loginsuccess(res.token));
    navigate("/dashboard")
}).catch((err)=>{dispatch(loginfailture(err))})




}


    return(
       
        <div>

<input  type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
<br/>
<input onChange={()=>{setpassword(e.target.value)}} type="text" placeholder="enter password" value={password}/>
<br/>
<button onClick={handleSubmit}>LOGIN</button>


        </div>
    )
}