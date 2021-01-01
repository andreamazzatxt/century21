import { Button } from './Button'
import style from './Hero.module.css'
export function Hero(props){

    return (
        <div className={style.hero}>
        <video playsInline autoPlay loop muted control className={style.heroVideo}>
            <source src ="background.mp4" type="video/mp4"></source>
        </video>
        <div className={style.box}>
        <img className={style.logo}src="logo.svg" alt="company logo"/>
        <p className={style.statement}>We Want To Be the Best Part of Your Day Everyday</p>
        <a href="#footer"className={style.buttonHero}>Get Started</a>
        </div>
        
        </div>
    )
}