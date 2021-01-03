import { useState } from 'react';
import style from './Activity.module.css'
import slideArray from './slideObject'
import {animated, useSpring} from 'react-spring'


export function Activity(props){
const [count,setCount] =useState(0);
const [change,setChange] = useState(false)
const {length} = slideArray;
const delay = 200;
const handleClickNext = () =>{
    setChange(true);
    setTimeout(()=>{
         setCount(count === length-1 ? 0 : count +1)
         setChange(false)
    },delay)
}
const handleClickBack = () =>{
    setChange(true);
    setTimeout(()=>{
         setCount(count === 0 ? length-1 : count-1)
         setChange(false)
    },delay)
}
const spring = useSpring({
    opacity: change ? 0 : 1,
    height: change ? "110%" : "100%",

    

})

    return (
        
        <div id={style.activity_content} className={style.content}>
            
            {
                slideArray.map((element,index)=>{
                    return(
                        <animated.div style = {spring} key={index} className={ index === count ? style.slide : style.hidden}>
                        <img alt={element.title}src={element.img} className={style.image}></img> 
                        <p className={style.text}>{element.desc}</p>
                        <div className={style.directions}>
                        <i className="fas fa-angle-double-left"id={style.navIcon} onClick={handleClickBack}  ></i>
                        <i className="fas fa-angle-double-right" id={style.navIcon} onClick={handleClickNext}></i>
                        </div>
                        </animated.div>
                    )
                })
            }
        </div>

    )
}