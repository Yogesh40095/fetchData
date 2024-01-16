import React from "react";
import { Link,Outlet } from "react-router-dom";


const Contact = ()=>{
    return(
        <div>
            <h1>Contact Us we are a loyel boy.</h1>

            <Link to={'mail'}><h4>E-mail</h4></Link>
            
            <Link to={'insta'}><h4>Instagram</h4></Link>
            <Outlet/>
        </div>
    )
}

export default Contact;