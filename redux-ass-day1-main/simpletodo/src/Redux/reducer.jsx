import { ADD_Todo } from "./actionTypes";

const initstate={
    todos:[
        {
            id:1,
            title:"Learn react",
            status:false
        }
    ]
}


const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case ADD_Todo:{
            return{
                ...state,todos:[...state.todos,payload]
            }
        }
        default:
            return state;
    }
}

export {reducer}