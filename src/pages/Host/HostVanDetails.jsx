import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function HostVansDetail(){
    const {id} = useParams()

    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans[0]))
        },)

    if (!van) return <h2>Loading...</h2>;

    return (
        <div>
        <img src={van.imageUrl} />
        <h1>{van.name}</h1>
        <p>{van.type}</p>
        <p>${van.price}/day</p>
        </div>
    );
}