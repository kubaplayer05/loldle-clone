import {FormEvent, useContext, useState} from "react";
import {Champion} from "../types/championTypes.ts";
import {ChampionsContext} from "../context/championsContext.tsx";

export function useChampionForm() {

    const [champions, setChampions] = useState<Champion[]>([])
    const [value, setValue] = useState("")
    const ctx = useContext(ChampionsContext)

    function submitHandler(e: FormEvent) {
        e.preventDefault()

        const guessedChampion = ctx?.champions.filter((champion) => {
            return champion.name.toLowerCase() === value.toLowerCase()
        })

        if (guessedChampion && guessedChampion[0]) {
            setValue("")
            setChampions(prevState => {
                return [guessedChampion[0], ...prevState]
            })
        }
    }

    return {
        champions,
        value,
        setValue,
        setChampions,
        submitHandler,
    }
}