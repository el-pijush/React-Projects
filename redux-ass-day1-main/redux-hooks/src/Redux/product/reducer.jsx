import { GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_LOADING } from "./action"




const initstate={
    product:[],
    error:false,
    loading:false
}


export const productreducer=(store=initstate,{type, payload})=>{

switch(type){
    case GET_PRODUCT:
        return{
            ...store,
            loading:false,
            product:[...payload],
            error:false
        }
        case GET_PRODUCT_LOADING:
            return{
...store,
loading:true

        }
        case GET_PRODUCT_ERROR:
            return {
...store,loading:false,
error:true
        }
        default: return store
}


}

