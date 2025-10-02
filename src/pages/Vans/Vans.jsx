import React from "react";
import { useEffect } from "react";
import styles from './Vans.module.css'

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
            <h1>Explore our van options</h1>
            <div className={styles.vanContainer}>
                {vans.map((van) =>(
                    <div key={van.id} className={styles.van}>
                        <img src={van.imageUrl} alt={van.name} className={styles.img}/>
                        <div className={styles.vanInfo}>
                            <h3 className={styles.title}>{van.name}</h3>
                            <p className={styles.price}>${van.price}<span>/day</span></p>
                        </div>
                        <p className={styles.price}></p>
                        <p className={styles.description}>{van.description}</p>
                        <p className={`${styles.type} ${styles[van.type]}`}>{van.type}</p>
                    </div>
                ))}
        
            </div>
        </>
    )
}