export const SIGNUP_LOADIND="SIGNUP_LOADIND";
export const SIGNUP_SUCCESS="SIGNUP_SUCCESS";
export const SIGNUP_ERROR="SIGNUP_ERROR";


export const signuploading=()=>({
type:SIGNUP_LOADIND
})

export const signupsucess=()=>({
type:SIGNUP_SUCCESS,
payload
})

export const signuperror=()=>({
type:SIGNUP_ERROR
})