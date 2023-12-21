import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/root/Root.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import Classic from "./pages/classic/Classic.tsx";
import {ClassicGameProvider} from "./context/classicGameContext.tsx";

export default function App() {

    const router = createBrowserRouter([{
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Root/>,
            },
            {
                path: "/classic",
                element: <ClassicGameProvider><Classic/></ClassicGameProvider>
            }
        ]
    }])

    return (
        <RouterProvider router={router}/>
    )
}