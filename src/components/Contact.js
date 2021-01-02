import {useState} from 'react'
import style from './Contact.module.css'
export function Contact(props){
    const [sent,setSent] = useState(false);
    const handleSubmit = () =>{
        setSent(true)
    }
    return (            
    <div id={style.contact_content} className={style.content} onSubmit={handleSubmit}>
        <form className={sent ? style.hidden : style.form}>
            <input className={style.name} placeholder = "Name"type="text" required></input>
            <input className={style.email} placeholder="E-mail"type="email" required></input>
            <textarea className={style.text}required placeholder="Tell us.."></textarea>
            <button className={style.button}>Submit</button>
        </form>
        <div className={sent ? style.sent : style.hidden}>
        <i id = {style.icon}class="far fa-check-circle"></i>
        <p className ={style.confirm}>Message sent. We will get in touch with you very soon!</p>
        </div>
    </div>

        ) 
}