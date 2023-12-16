import styles from "./modal.module.css"
import Button from "../button/Button.tsx";
import {Dispatch, ReactNode, SetStateAction} from "react";

interface ModalProps {
    children: ReactNode
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function Modal({children, setShowModal}: ModalProps) {

    return (
        <div className={styles.backdrop}>
            <dialog className={styles.modal} open={true}>
                {children}
                <Button onClick={() => {
                    setShowModal(false)
                }} isLink={false}>Close</Button>
            </dialog>
        </div>
    )
}