import { Navigate } from "react-router-dom";


export const Privateroute=({isAuthenticated,children})=>{
    return isAuthenticated ? children : <Navigate to="/login"/>
}