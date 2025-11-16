import { Outlet, useParams, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HostVanIdLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    const {id} = useParams()

    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans[0]))
        },[id])

    if (!van) return <h2>Loading...</h2>;


    return(
        <div>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span>
            </Link>
            <div>
                <section>
                    <img src={van.imageUrl}/>
                    <h1>{van.name}</h1>
                    <p>{van.type}</p>
                    <p>${van.price}/day</p>
                </section>
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>
                 <NavLink
                    to="pricing"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>
                 <NavLink
                    to="photos"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
                <Outlet context={{van}}/>
            </div>
        </div>

    )
}