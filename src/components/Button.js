import style from "./Button.module.css"

export function Button(props){
    return (
        <div className = {style.button}>{props.text}</div>
    )
}