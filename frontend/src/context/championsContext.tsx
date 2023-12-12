import React, {createContext, useState, ReactNode} from "react";
import {Champion} from "../types/championTypes.ts";

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

    return (
        <ChampionsContext.Provider value={{
            champions,
            setChampions
        }}>
            {children}
        </ChampionsContext.Provider>
    )
}