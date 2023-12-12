import {Link, Outlet} from "react-router-dom";
import "./mainLayout.module.css"

export default function MainLayout() {
    return (
        <>
            <header>
                <Link to={"/"}><h1>Loldle</h1></Link>
            </header>
            <Outlet/>
        </>
    )
}