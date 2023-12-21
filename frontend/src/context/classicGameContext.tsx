import React, {createContext, ReactNode} from "react";
import {useRandomChampion} from "../hooks/useRandomChampion.tsx";
import {useChampionForm} from "../hooks/useChampionForm.tsx";
import {Champion} from "../types/championTypes.ts";

interface ClassicGameProviderProps {
    children: ReactNode
}

interface ProviderProps {
    randomChampion: Champion | null,
    champions: Champion[],
    refreshGame: () => void,
    value: string,
    submitHandler: (e: React.FormEvent<Element>) => void,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const ClassicGameContext = createContext<ProviderProps | null>(null)

export function ClassicGameProvider({children}: ClassicGameProviderProps) {

    const {randomChampion, refreshRandomChampion} = useRandomChampion()
    const {champions, value, submitHandler, setValue, setChampions} = useChampionForm()

    function refreshGame() {
        refreshRandomChampion()
        setChampions([])
    }

    return (
        <ClassicGameContext.Provider value={{
            randomChampion,
            champions,
            value,
            refreshGame,
            submitHandler,
            setValue
        }}>
            {children}
        </ClassicGameContext.Provider>
    )
}