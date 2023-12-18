import {useEffect, useState} from "react";
import {Champion} from "../types/championTypes.ts";

export function useWinModal(randomChampion: Champion | null, champions: Champion[]) {

    const [showWinModal, setShowWinModal] = useState(false)

    useEffect(() => {
        if (randomChampion && champions[0] && champions[0].name === randomChampion.name) {
            setShowWinModal(true)
        }
    }, [champions]);

    return {
        showWinModal,
        setShowWinModal
    }
}