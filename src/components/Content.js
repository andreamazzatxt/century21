import { useState } from 'react'
import { About } from './About';
import { Activity } from './Activity';
import { Contact } from './Contact';
import { Map } from './Map';
import style from './Content.module.css'
import { useSpring } from 'react-spring';
import { animated } from 'react-spring';
export function Content(){

        const[showActivity,setShowActivity] = useState(true);
        const[showAbout,setShowAbout] =useState(false);
        const[showContact,setShowContact] =useState(false);
        const[showMap,setShowMap] = useState(false);

        const activity = useSpring({
            opacity: showActivity ? 1 : 0,
            height: showActivity ? "100%" : "120%",

        })
        const about = useSpring({
            opacity: showAbout ? 1 : 0,
            height: showAbout ? "100%" : "120%",
        })
        const contact = useSpring({
            opacity: showContact ? 1 : 0,
            height: showContact ? "100%" : "120%",
        })
        const map = useSpring({
            opacity: showMap ? 1 : 0,
            height: showMap ? "100%" : "120%",
        })

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
        <div  className={style.contentBox}>
            <ul className={style.menu}>
                <li id ="activity" className={style.button} onClick={handleActivity}>Activity</li>
                <li id ="about" className={style.button} onClick={handleAbout}>Courses</li>
                <li id ="contact"className={style.button} onClick={handleContact}>Contact</li>
                <li id ="map"className={style.button} onClick={handleMap}>Map</li>
            </ul>   

            
            {showActivity ? 
            <animated.div style={activity}>
            <Activity />
            </animated.div>
            : null}

            {showAbout ? 
            <animated.div style={about}>
            <About />  
            </animated.div>
            : null}


            {showContact ? 
            <animated.div style={contact}>
            <Contact />   
            </animated.div>
            : null}

            {showMap ? 
            <animated.div style={map}>
            <Map /> 
            </animated.div>
            : null}

           
        </div>
    )
}