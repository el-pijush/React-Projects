import {useState} from "react"
import { useDispatch } from "react-redux"

import {v4 as uuid} from "uuid"
import { addtodo } from "./Redux/action"
export const Todoinput=()=>{
const [title,setTitle]=useState("")

const dispatch=useDispatch()

const handleadd=()=>{
    const payload={
        title,
        status:false,
        id:uuid()
    };
    const addTodoAction=addtodo(payload)
dispatch(addTodoAction)
}

    return(
        <div>
<h3>ADD TODO</h3>
<input placeholder="Add something"
value={title}
onChange={(e)=>setTitle(e.target.value)
}
/>
<button onClick={handleadd}>ADD ToDO</button>
        </div>
    )
}