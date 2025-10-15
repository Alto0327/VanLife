import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav className='nav-bar'>
                <Link to="/">#VANLIFE</Link>
                <div className="nav-right">
                    <Link to="/host">Host</Link>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </div>
        </nav>
      </header>
    )
}