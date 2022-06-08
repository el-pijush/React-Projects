import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signuperror ,signuploading,signupsucess} from "../Redux/Signup/action";

export const Signup=()=>{
    const dispatch= useDispatch();
    const navigate= useNavigate()

const handleSubmit=()=>{
    const userdetail={
        name:"",
        email:"",
        password:"",
        username:"",
        mobile:"",
        description:""
    }
    dispatch(signuploading())
    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method:"POST",
        body:JSON.stringify(userdetail),
        headers:{
            "Content-Type":"application/json"
        }

    }).then((res)=>res.json()).then((res)=>{
dispatch(signupsucess(res.token));
navigate("/login")

    }).catch((err)=>{dispatch(signuperror)})
}





    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [username,setusername]=useState("");
    const [mobile,setmobile]=useState("");
    const [description,setdescription]=useState("");

    return(
        <div>
            <input type="text" placeholder="Enter the name"   value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <br/>


            <input type="text" placeholder="enter the email"  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <br/>


             <input type="text" placeholder="enter the password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <br/>

             <input type="text" placeholder="Enter the username"  value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <br/>

             <input type="number" placeholder="Enter mobile number"  value={mobile} onChange={(e)=>{setmobile(e.target.value)}}/>
            <br/>

             <input type="text" placeholder="Enter description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
            <br/>

<button onClick={handleSubmit}>Sign up</button>

        </div>
    )
    }