import {Champion} from "../../../types/championTypes.ts";
import Modal from "../../modal/Modal.tsx";
import {Dispatch, SetStateAction} from "react";
import styles from "./winModal.module.css"

interface WinModalProps {
    randomChampion: Champion
    setShowModal: Dispatch<SetStateAction<boolean>>
    isVisible: boolean
}

export default function WinModal({randomChampion, setShowModal, isVisible}: WinModalProps) {

    return (
        <Modal isVisible={isVisible} setShowModal={setShowModal}>
            <h3 className={styles.title}>You Won!</h3>
            <div>
                <p>Guessed Champion:</p>
                <p>{randomChampion.name}</p>
            </div>
        </Modal>
    )
}