import { useEffect, useState } from 'react';
import style from './Activity.module.css'
import slideArray from './slideObject'


export function Activity(props){
const [count,setCount] =useState(0);
const {length} = slideArray;
const handleTimer = () =>{
    setCount(count === length-1 ? 0 : count+1);
}
console.log(count)

useEffect(()=>{
const MyTimer = setTimeout(()=>{
    handleTimer();
},3000)
})

    return (
        
        <div id={style.activity_content} className={style.content}>
            {
                slideArray.map((element,index)=>{
                    return(
                        <div key={element.title} className={ index === count ? style.slide : style.hidden}>
                        <img src={element.img} className={style.image}></img> 
                        <h2 className={style.title}>{element.title}</h2>
                        <p className={style.text}>{element.desc}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}