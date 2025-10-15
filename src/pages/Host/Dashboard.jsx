import { Outlet } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
            <h1>Host Page</h1>
            <Outlet />
        </>
    )
}