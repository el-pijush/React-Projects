export const appAction={
    GET_TODOS_REQUEST:"GET_TODOS_REQUEST",
    GET_TODOS_SUCCESS:"GET_TODOS_SUCCESS",
    GET_TODOS_FAILURE:"GET_TODOS_FAILURE"
}


export const todoRequest=()=>{
    return {
        type:appAction.GET_TODOS_REQUEST
    }
}

export const todoSuccess=(data)=>{
    return {
        type:appAction.GET_TODOS_SUCCESS,
        payload:data
    }
}

export const todoFailure=()=>{
    return {
        type:appAction.GET_TODOS_FAILURE
    }
}

