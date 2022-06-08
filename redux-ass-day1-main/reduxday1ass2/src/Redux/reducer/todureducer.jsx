const initstate={
    pending:true,
    list:[],
    error:false
}

import { appAction } from "../action"


export const todoReducer=(state=initstate,action)=>{
   switch(action.type){
       case appAction.GET_TODOS_REQUEST:{
           return {
               ...state,
               pending:true,
               list:[],
               error:false
           }
       }
       case appAction.GET_TODOS_SUCCESS:{
        return {
            ...state,
            pending:false,
            list:action.payload,
            error:false
        }
    }
    case appAction.GET_TODOS_FAILURE:{
        return {
            ...state,
            pending:false,
            error:action.payload
        }
    }
    default:return state
   }
}


