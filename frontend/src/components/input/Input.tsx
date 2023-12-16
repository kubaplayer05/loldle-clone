import "./input.module.css"
import {ChangeEventHandler} from "react";

interface InputProps {
    value?: string
    onChange?: ChangeEventHandler
    placeholder?: string
    list?: string
    className?: string
}

export default function Input({value, onChange, placeholder, list, className}: InputProps) {

    return (
        <input value={value} onChange={onChange} className={`${className}`}
               placeholder={placeholder} list={list}/>
    )
}