import { useOutletContext } from "react-router-dom";

export default function HostVansDetail(){
    const {van} = useOutletContext()
    console.log(van)
    return (
        <section>
            <p><b>Name: </b>{van.name}</p>
            <p><b>Category: </b>{van.type}</p>
            <p><b>Description: </b>{van.description}</p>
        </section>
    );
}