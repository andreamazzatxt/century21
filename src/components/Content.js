import { useState } from 'react'
import { About } from './About';
import { Activity } from './Activity';
import { Contact } from './Contact';
import { Map } from './Map';
import style from './Content.module.css'
export function Content(props){

        const[showActivity,setShowActivity] = useState(true);
        const[showAbout,setShowAbout] =useState(false);
        const[showContact,setShowContact] =useState(false);
        const[showMap,setShowMap] = useState(false);

    const handleActivity = () =>{
        setShowActivity(true);
        setShowAbout(false);
        setShowContact(false);
        setShowMap(false);
    }
    const handleAbout = () =>{
        setShowAbout(true);
        setShowContact(false);
        setShowActivity(false);
        setShowMap(false);
    }
    const handleContact = () =>{
        setShowContact(true)
        setShowActivity(false);
        setShowAbout(false);
        setShowMap(false);
    }
    const handleMap = () =>{
        setShowContact(false)
        setShowActivity(false);
        setShowAbout(false);
        setShowMap(true);
    }
    return (
        <div className={style.contentBox}>
            <ul className={style.menu}>
                <li id ="activity" className={style.button} onClick={handleActivity}>Activity</li>
                <li id ="about" className={style.button} onClick={handleAbout}>Courses</li>
                <li id ="contact"className={style.button} onClick={handleContact}>Contact</li>
                <li id ="map"className={style.button} onClick={handleMap}>Map</li>
            </ul>   
            {showActivity ? <Activity /> : null}
            {showAbout ? <About /> : null}
            {showContact ? <Contact /> : null}
            {showMap ? <Map /> : null}
        </div>
    )
}