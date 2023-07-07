import logo from "../images/ლოგო - საქსტატი.png"
import { NavLink, Link } from "react-router-dom"
import routes from "../conf/constants/routes"
import  "./header.css"
import React from "react"
import { Nav } from "./Nav"


export const Header = () => {
    return(
        <div className="header_div">
            <NavLink className="header_div_a" to={routes.HOME_ROUTE} >
                <img src={logo} alt="logo" />
                <h3>საქართველოს სტატისტიკის<br></br> ეროვნული სამსახური</h3>
            </NavLink> 
            <Nav />
        </div>
    )
}

