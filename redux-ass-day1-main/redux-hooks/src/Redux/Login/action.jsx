

// action type for login 
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const loginloading=()=>(
    {
        type:LOGIN_LOADING
    }
)


export const loginsuccess=(payload)=>(
    {
        type:LOGIN_SUCCESS,
        payload
    }
)


export const loginfailture=()=>(
    {
        type:LOGIN_FAILURE,
        payload
    }
)