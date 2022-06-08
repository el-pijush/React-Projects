import axios from "axios"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { todoRequest, todoSuccess } from "./Redux/action"
import { Todolist } from "./Todolist"


export const Todo=()=>{

    const state=useSelector((state)=>state.todoReducer)
    let dispatch=useDispatch()

    useEffect(()=>{
       dispatch(todoRequest());
       loaddata().then((res)=>dispatch(todoSuccess(res.data)))
    },[])

    const loaddata=async()=>{
     return await axios("http://localhost:8080/todos",{
         method:"GET"
     })
    }
    return (
        <div>
          
            {state.list.map((e)=>{
                return <Todolist data={e}/>
            })}
        </div>
    )
}