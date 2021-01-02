import {useState} from 'react'
import style from './Contact.module.css'
export function Contact(props){
    const [sent,setSent] = useState(0);
    const handleSubmit = (event) =>{
        event.preventDefault();
        setSent(1)
    }
    return (            
    <div id={style.contact_content} className={style.content} onSubmit={handleSubmit}>
        <form className={sent === 1 ? style.hidden : style.form}>
            <input className={style.name} placeholder = "Name"type="text" required></input>
            <input className={style.email} placeholder="E-mail"type="email" required></input>
            <textarea className={style.text}required placeholder="Tell us.."></textarea>
            <button className={style.button}>Submit</button>
        </form>
        <div className={sent === 1 ? style.sent : style.hidden}>
        <i id = {style.icon}className="far fa-check-circle"></i>
        <p className ={style.confirm}>Message sent. We will get in touch with you very soon!</p>
        </div>
    </div>

        ) 
}