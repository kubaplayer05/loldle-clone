import {useContext} from "react";
import {ChampionsContext} from "../context/championsContext.tsx";

export function useChampions() {

    const ctx = useContext(ChampionsContext)

    if (!ctx) {
        throw Error("You must use ChampionsContext inside ChampionsProvider")
    }

    return {
        champions: ctx.champions,
        setChampions: ctx.setChampions
    }
}