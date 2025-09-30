import React from "react";
import { useEffect } from "react";

export default function Vans(){
    const [vans, setVans] = React.useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))            
    }
    , [])
    
    return (
        <>
            {vans.map((van) =>(
                <div>
                    <h2>{van.name}</h2>
                    <p>${van.price}</p>
                    <img src={van.imageUrl} alt={van.name} />
                    <p>{van.description}</p>
                    <p>Type: {van.type}</p>
                </div>
            ))}
        
        </>
    )
}