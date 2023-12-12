import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {rootLoader} from "./pages/root/Root.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import Classic from "./pages/classic/Classic.tsx";

export default function App() {

    const router = createBrowserRouter([{
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Root/>,
                loader: rootLoader
            },
            {
                path: "/classic",
                element: <Classic/>,
            }
        ]
    }])

    return (
        <RouterProvider router={router}/>
    )
}