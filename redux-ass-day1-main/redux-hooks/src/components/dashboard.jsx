import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducterror } from "../Redux/product/action";

import {getproduct} from "../Redux/product/action"

 export const Dashboard=()=>{

    const dispatch=useDispatch();

    const {token,isAuthenticated}=useSelector((state)=>state.login)
    
    const {product}=useSelector((state)=>state.product)

    const getProductsData=()=>(dispatch)=>{
        dispatch(getProductsLoading());

        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((res)=>dispatch(getproduct(res)))
        .catch(()=>dispatch(getproducterror()))
    }

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }

    const fetchdata=()=>{
        dispatch(getProductsData())
    }
    useEffect(()=>{
        fetchdata()
    },[])

    return(
        <div>
            <h1>Home</h1>
<div className="products">
{product.map((e)=><div key={e.id}>
             <img src={e.image} alt="" width="150px" />
             <h3>{e.title}</h3>
             <h4>{e.price}</h4>
         </div>)}
</div>
</div>
    )
}

