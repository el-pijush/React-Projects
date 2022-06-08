
import {Link} from "react-router-dom";
import styled from "styled-components"
export const Navbar=()=>{

    const Div= styled.div`
    display:flex;
    justify-content:space-around;
    border: 1px solid red;
    height:90px;
    margin-bottom:37px
    `

    return(
        <Div>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">Signup</Link>
        </Div>
    )
}

