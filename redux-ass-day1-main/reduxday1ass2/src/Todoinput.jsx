

import axios from "axios"
import { useState } from "react"
import { Todo } from "./Todo"
import { useDispatch } from "react-redux"
import { todoRequest, todoSuccess } from "./Redux/action"




export const Todoinput=()=>{
    const[todoinput,setTodoinput]=useState("")
    let dispatch=useDispatch()
    const handlechange=(e)=>{
        setTodoinput(e.target.value)
    }

    const loaddata=async()=>{
     return await axios("http://localhost:8080/todos",{
         method:"GET"
     })
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        const tododata={
            id:new Date().getTime().toString(),
            //Date().getTime().toString(),
            todo:todoinput
        }
        axios.post("http://localhost:8080/todos",tododata).then(()=>dispatch(todoRequest())).then(()=>loaddata()).then((res)=>dispatch(todoSuccess(res.data)))
    }
    return (
        <div>
          
            <div>
                <input type="text" name="" id="" placeholder="Enter Todos"   onChange={handlechange}/>
                <button onClick={handlesubmit}>Add Todos</button>
            </div>
            <Todo/>
        </div>
        
    )
}