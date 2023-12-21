import {useState} from "react";

export function useFetch() {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    async function fetchData(route: string) {

        const apiUrl = import.meta.env.VITE_API_URL
        const url = apiUrl + route

        setIsLoading(true)

        const response = await fetch(url)

        if (!response.ok) {
            console.log(response)
            setError(true)

            return null
        }

        setError(false)
        setIsLoading(false)

        return response.json()
    }

    return {
        isLoading,
        error,
        fetchData
    }
}