import {useContext} from "react";
import {ClassicGameContext} from "../context/classicGameContext.tsx";

export function useClassicGame() {

    const ctx = useContext(ClassicGameContext)

    if (!ctx) {
        throw Error("You must use ClassicGameContext inside ClassicGameProvider")
    }

    return ctx
}