import "./input.module.css"

interface InputProps {
    value?: string,
    onChange?: () => {}
    placeholder?: string
}

export default function Input({value, onChange, placeholder}: InputProps) {

    return (
        <input value={value} onChange={onChange} placeholder={placeholder}/>
    )
}