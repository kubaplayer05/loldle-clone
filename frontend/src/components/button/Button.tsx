import {Link} from "react-router-dom";
import {MouseEventHandler, ReactNode} from "react";
import styles from "./button.module.css"

interface ButtonProps {
    isLink: boolean
    linkPath?: string
    children: ReactNode
    className?: string
    onClick?: MouseEventHandler
}

export default function Button({isLink, linkPath, children, className, onClick}: ButtonProps) {

    if (isLink && linkPath) {
        return (
            <Link to={linkPath} className={`${styles.btn} ${className}`}>
                {children}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={`${styles.btn} ${className}`}>
            {children}
        </button>
    )
}