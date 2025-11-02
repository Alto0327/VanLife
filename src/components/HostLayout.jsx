import {Outlet, NavLink} from "react-router-dom"

export default function HostLayout(){
    const activeStyle ={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <>
            <nav className="host-nav">
                <NavLink 
                    to="/host"
                    style={({isActive})=> isActive ? activeStyle: null}                
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/host/income"
                    style={({isActive})=> isActive ? activeStyle: null}  
                >
                    Income
                </NavLink>
                <NavLink 
                    to="/host/reviews"
                    style={({isActive})=> isActive ? activeStyle: null}  
                >
                    Review
                </NavLink>
            </nav>
            <Outlet/>
        </>
    )
}