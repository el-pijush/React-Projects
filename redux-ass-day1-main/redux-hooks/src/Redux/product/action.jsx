export const GET_PRODUCT="GET_PRODUCT";
export const GET_PRODUCT_LOADING="GET_PRODUCT_LOADING";
export const GET_PRODUCT_ERROR="GET_PRODUCT_ERROR"



export const getproduct=()=>(
    {
type:GET_PRODUCT
    }
)


export const getproductloading=()=>(
    {
type:GET_PRODUCT_LOADING,
payload
    }
)

export const getproducterror=()=>({
type:GET_PRODUCT_ERROR
})


