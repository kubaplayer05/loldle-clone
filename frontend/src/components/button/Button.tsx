import {Link} from "react-router-dom";
import {ReactNode} from "react";
import styles from "./button.module.css"

interface ButtonProps {
    isLink: boolean
    linkPath: string
    children: ReactNode
}

export default function Button({isLink, linkPath, children}: ButtonProps) {

    if (isLink) {
        return (
            <Link to={linkPath} className={styles.btn}>
                {children}
            </Link>
        )
    }

    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}