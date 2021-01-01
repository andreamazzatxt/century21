
import style from './Header.module.css'
export function Header(props){

    return (
        <div className={style.header}>
            <img className = {style.logo} src = "./logo.png" alt = " "/>
        </div>
    )
}