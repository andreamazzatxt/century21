import { useState } from 'react';
import style from './About.module.css'
import courses from './courses.js'
export function About (props) {
const [count,setCount] = useState(0)
const {length} = courses;
const  handleNext = () =>{
    setCount(count === length-1 ? 0 : count+1)
};
const  handleBack = () =>{
    setCount(count === 0 ? length-1 : count-1)
}
    return(
        <div id={style.about_content} className={style.content}>
            {
                courses.map((course,index) =>{
                    return (
                        <div key ={course.title}className={count === index ? style.container : style.hidden}>
                            <h2 className={style.title}>{course.title}</h2>
                            <p className={style.desc}>{course.desc}</p>
                            <p className={style.time}>{course.time}</p>
                            <div>
                            <i className="fas fa-angle-double-left"id={style.navIcon} onClick={handleBack}  ></i>
                            <i className="fas fa-angle-double-right" id={style.navIcon} onClick={handleNext}></i>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}