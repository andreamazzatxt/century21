import {  useState} from 'react'
import {useSpring,animated} from 'react-spring'
import style from './Contact.module.css'
export function Contact(props){
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[text,setText] = useState('')
    const [sent,setSent] = useState(0);


    async function  handleFetch(){
        const response = await fetch('https://formspree.io/f/xrgoongw',{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                text: text,
            })
        })
        console.log(response)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        handleFetch()
            setSent(1)
        
    }
    const handleChangeName = (event) =>{
        setName(event.target.value)
      
    }
    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }
    const handleTextChange = (event) =>{
        setText(event.target.value)
    }
    const spring = useSpring({
       opacity: sent === 1 ? 1 :0,
       transform: `perspective(600px) rotateX(${sent === 0 ? -180 : 0}deg)`,

    })
  
    return (            
    <div id={style.contact_content} className={style.content} onSubmit={handleSubmit}>
        <form className={sent === 1 ? style.hidden : style.form}>
            <input onChange = {handleChangeName}className={style.name} placeholder = "Name"type="text" required></input>
            <input onChange = {handleEmailChange} className={style.email} placeholder="E-mail"type="email" required></input>
            <textarea onChange ={handleTextChange} className={style.text}required placeholder="Tell us.."></textarea>
            <button className={style.button}>Submit</button>
        </form>
        <animated.div style={spring}className={sent === 1 ? style.sent : style.hidden}>
        <i id = {style.icon}className="far fa-check-circle"></i>
        <p className ={style.confirm}>Message sent. We will get in touch with you very soon!</p>
        </animated.div>
    </div>

        ) 
}