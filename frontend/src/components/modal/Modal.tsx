import {AnimatePresence, motion} from "framer-motion";
import styles from "./modal.module.css"
import Button from "../button/Button.tsx";
import {Dispatch, ReactNode, SetStateAction} from "react";

interface ModalProps {
    children: ReactNode
    setShowModal: Dispatch<SetStateAction<boolean>>
    isVisible: boolean
}

export default function Modal({children, setShowModal, isVisible}: ModalProps) {

    return (
        <AnimatePresence>
            {isVisible && <motion.div exit={{opacity: 0}} className={styles.backdrop}>
                <motion.dialog
                    className={styles.modal}
                    open={true}
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 100}}
                >
                    {children}
                    <Button onClick={() => {
                        setShowModal(false)
                    }} isLink={false}>Close</Button>
                </motion.dialog>
            </motion.div>}
        </AnimatePresence>
    )
}