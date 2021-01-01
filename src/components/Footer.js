import { Content } from './Content'
import style from './Footer.module.css'
export function Footer(props){

    return (
        <div id="footer"className={style.footer}>
            <div className={style.content}>
            <Content />
            </div>
            <div className={style.social}>
            <i class="fab fa-facebook-square" id={style.socialIcon}></i>
            <i class="fab fa-instagram" id={style.socialIcon}></i>
            <i class="fab fa-tiktok"id={style.socialIcon} ></i>
            </div>
        </div>
    )
}