import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans(){
    const [vans, setVans] = useState([])

    useEffect(()=>{
         fetch("/api/vans")
         .then(res => res.json())
         .then(data => {
            const filtered = data.vans.filter(van => van.hostId === "123")
            setVans(filtered)
            console.log(filtered)
            } 
            )
    }, [])    
    return(
        <>
            <h1>Hi</h1>
            <div>
                {vans.map((van)=>(
                        <Link to={"/host/vans/" + van.id}>
                            <div key={van.id}>
                                <img src={van.imageUrl} alt={van.name} />
                                <h1>{van.name}</h1>
                                <p>{van.price}</p>
                            </div>
                        </Link>
                ))
                }
            </div>
            <h2>sample</h2>
        </>
    ) 
}