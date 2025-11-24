import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import styles from "./Vans.module.css"

export default function Vans() {
    const [searchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className={styles.van}>
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} className={styles.img} />
                <div className={styles.vanInfo}>
                    <h3 className={styles.title}>{van.name}</h3>
                    <p className={styles.price}>${van.price}<span>/day</span></p>
                </div>

                <p className={`${styles.type} ${styles[van.type]}`}>
                    {van.type}
                </p>
            </Link>
        </div>
    ))

    return (
        <>
            <h1>Explore our van options</h1>
            <div className={styles.vanContainer}>
                {vanElements}
            </div>
        </>
    )
}
