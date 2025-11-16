import {NavLink, Link } from "react-router-dom"

export default function Header(){
    const activeStyle={
        fontWeight: "bold",
        textDecoration: "underline",
        color:'#161616'
    }

    return(
        <header>
            <nav className='nav-bar'>
                <Link to="/">#VANLIFE</Link>
                <div className="nav-right">
                    <NavLink 
                        to="host"
                        style = {({isActive})=> isActive ? activeStyle : null}
                    >
                        Host
                    </NavLink>
                    <NavLink 
                        to="about"
                        style = {({isActive})=> isActive ? activeStyle : null}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="vans"
                        style = {({isActive})=> isActive ? activeStyle : null}
                    >
                        Vans
                    </NavLink>
                </div>
        </nav>
      </header>
    )
}