import { Outlet } from "react-router-dom";
import Header from "./Header"

export default function Layout(){
    return (
        <>
            <Header />
            <main className="main-content-area">
                <Outlet /> {/* This is where your Vans component renders */}
            </main>
        </>
    )
}