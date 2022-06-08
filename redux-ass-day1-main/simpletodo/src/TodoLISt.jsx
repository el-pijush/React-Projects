
import { useSelector } from "react-redux"

export const TodoLIst=()=>{

    const todos=useSelector((state)=>state.todos)

    return(
        <div >
            {todos.map((item)=>{
              return  <div key={item.id}>{item.title}</div>
            })}
        </div>
    )
}

