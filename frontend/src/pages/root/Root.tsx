import {useLoaderData} from "react-router-dom";
import Button from "../../components/button/Button.tsx";
import styles from "./root.module.css"
import {useChampions} from "../../hooks/useChampions.tsx";
import {useEffect} from "react";

export default function Root() {

    const {setChampions} = useChampions()
    const loaderData = useLoaderData()

    useEffect(() => {
        if (loaderData && Array.isArray(loaderData)) {
            setChampions(loaderData)
        }
    }, []);

    return (
        <main>
            <p>Choose the game mode:</p>
            <div className={styles.gameModesWrapper}>
                <Button isLink={true} linkPath={"/classic"}>Classic</Button>
            </div>
        </main>
    )
}

export async function rootLoader() {

    const apiUrl = import.meta.env.VITE_API_URL

    if (!apiUrl) {
        throw Error("Provide API_URL in .env")
    }

    const path = `${apiUrl}/champion/all`

    const response = await fetch(path)

    if (!response.ok) {

        return null
    }

    return await response.json()
}