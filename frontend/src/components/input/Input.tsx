import "./input.module.css"
import {ChangeEventHandler} from "react";

interface InputProps {
    value?: string
    onChange?: ChangeEventHandler
    placeholder?: string
    list?: string
    className?: string
    disabled?: boolean
}

export default function Input({value, onChange, placeholder, list, className, disabled}: InputProps) {

    return (
        <input disabled={disabled} value={value} onChange={onChange} className={`${className}`}
               placeholder={placeholder} list={list}/>
    )
}