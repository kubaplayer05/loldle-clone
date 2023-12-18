import {Link, Outlet} from "react-router-dom";
import "./mainLayout.module.css"

export default function MainLayout() {
    return (
        <>
            <header>
                <Link to={"/"}><h1>Gongwardzista</h1></Link>
            </header>
            <Outlet/>
        </>
    )
}