import { SIGNUP_ERROR, SIGNUP_LOADIND, SIGNUP_SUCCESS } from "./action"

const initstate={
    loading:false,
    isRegistered:false,
    token:"",
    error:false
}


export const signupreducer=(store=initstate,{type,payload})=>{
    switch(type){
        case SIGNUP_LOADIND:
            return{
...store,loading:true
            }
            case SIGNUP_SUCCESS:
                return {
...store,loading:false,isRegistered:true,error:false
            }
            case SIGNUP_ERROR:
                return{
                    ...store,loading:false,isRegistered:false,error:true
                }
                default: return store
    }
}

