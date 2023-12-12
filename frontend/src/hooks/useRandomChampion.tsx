import {useChampions} from "./useChampions.tsx";
import {getRandomNumber} from "../lib/getRandomNumber.ts";

export function useRandomChampion() {

    const {champions} = useChampions()

    if(!champions) {
        throw Error("Champions not provided")
    }

    const index = getRandomNumber(champions.length)

    return champions[index]
}