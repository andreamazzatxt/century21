import { useState } from 'react';
import style from './Activity.module.css'
import slideArray from './slideObject'


export function Activity(props){
const [count,setCount] =useState(0);
const {length} = slideArray;
const handleClickNext = () =>{
    setCount(count === length-1 ? 0 : count +1)
}
const handleClickBack = () =>{
    setCount(count === 0 ? length-1 : count-1)
}



    return (
        
        <div id={style.activity_content} className={style.content}>
            
            {
                slideArray.map((element,index)=>{
                    return(
                        <div key={element.title} className={ index === count ? style.slide : style.hidden}>
                        <img alt={element.title}src={element.img} className={style.image}></img> 
                        <p className={style.text}>{element.desc}</p>
                        <div className={style.directions}>
                        <i className="fas fa-angle-double-left"id={style.navIcon} onClick={handleClickBack}  ></i>
                        <i className="fas fa-angle-double-right" id={style.navIcon} onClick={handleClickNext}></i>
                        </div>
                        </div>
                    )
                })
            }
        </div>

    )
}