import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./action"


const initstate={
    loading:false,
    isAuthenticated:false,
    token:"",
    error:false
}


export const loginreducer=(store=initstate,{type,payload})=>{

    switch(type){

        case LOGIN_LOADING:
            return{
...store,loading:true
        }
        case LOGIN_SUCCESS:
            return{
...store,loading:true,
isAuthenticated:true,
token:payload
        }
        case LOGIN_FAILURE:
            return{
...store,loading:true,
error:true,
isAuthenticated:false
        }
default: return store
    }

}