import React, {createContext, useState, ReactNode, useEffect} from "react";
import {Champion} from "../types/championTypes.ts";
import {useFetch} from "../hooks/useFetch.tsx";

interface ChampionsProviderProps {
    children: ReactNode
}

interface ProviderProps {
    champions: Champion[]
    setChampions: React.Dispatch<Champion[]>
}

export const ChampionsContext = createContext<ProviderProps | null>(null)

export function ChampionsProvider({children}: ChampionsProviderProps) {

    const [champions, setChampions] = useState<Champion[]>([])
    const {fetchData, isLoading} = useFetch()

    useEffect(() => {

        // TODO: use indexed db

        async function getChampions() {
            const data = await fetchData("/champion/all")
            if (data) {
                setChampions(data)
            }
        }

        getChampions()
    }, []);

    return (
        <ChampionsContext.Provider value={{
            champions,
            setChampions
        }}>
            {!isLoading && children}
            {isLoading && <p>Loading ...</p>}
        </ChampionsContext.Provider>
    )
}