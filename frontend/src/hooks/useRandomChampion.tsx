import {useChampions} from "./useChampions.tsx";
import {getRandomNumber} from "../lib/getRandomNumber.ts";
import {useEffect, useState} from "react";
import {Champion} from "../types/championTypes.ts";

export function useRandomChampion() {

    const {champions} = useChampions()
    const [randomChampion, setRandomChampion] = useState<Champion | null>(null)

    if (!champions) {
        throw Error("Champions not provided")
    }

    function refreshRandomChampion() {
        const index = getRandomNumber(champions.length)
        setRandomChampion(champions[index])
    }

    const index = getRandomNumber(champions.length)

    useEffect(() => {
        setRandomChampion(champions[index])
    }, []);

    return {randomChampion, refreshRandomChampion}
}