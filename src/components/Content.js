import { useState } from 'react'
import { About } from './About';
import { Activity } from './Activity';
import { Contact } from './Contact';
import style from './Content.module.css'
export function Content(props){

        const[showActivity,setShowActivity] = useState(true);
        const[showAbout,setShowAbout] =useState(false);
        const[showContact,setShowContact] =useState(false);

    const handleActivity = () =>{
        setShowActivity(true);
        setShowAbout(false);
        setShowContact(false)
    }
    const handleAbout = () =>{
        setShowAbout(true);
        setShowContact(false);
        setShowActivity(false);
    }
    const handleContact = () =>{
        setShowContact(true)
        setShowActivity(false);
        setShowAbout(false);
    }
    return (
        <div className={style.contentBox}>
            <ul className={style.menu}>
                <li id ="activity" className={style.button} onClick={handleActivity}>Activity</li>
                <li id ="about" className={style.button} onClick={handleAbout}>About</li>
                <li id ="contact"className={style.button} onClick={handleContact}>Contact</li>
            </ul>   
            {showActivity ? <Activity /> : null}
            {showAbout ? <About /> : null}
            {showContact ? <Contact /> : null}
        </div>
    )
}