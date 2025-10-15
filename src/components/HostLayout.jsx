import {Outlet, Link} from "react-router-dom"

export default function HostLayout(){
    return(
        <>
            <nav className="host-nav">
                <Link to="/host">Host</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Review</Link>
            </nav>
            <Outlet/>
        </>
    )
}