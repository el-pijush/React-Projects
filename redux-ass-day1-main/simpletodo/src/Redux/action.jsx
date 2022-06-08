import { ADD_Todo } from "./actionTypes";
//action creator

export const addtodo= payload=>{
    return{
        type:ADD_Todo,
        payload
    }
}