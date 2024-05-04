import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import styles from "./Card.module.css"

const Card=()=>{
    return (
        <div className={styles.bottom}>
            <div className={styles.data}>
                <img src={logo1} className={styles.img} />
                <p className={styles.num}>2,500</p>
                <p className={styles.text}>enterprise organizations successfully launched</p>
            </div>
            <div className={styles.data}>
                <img src={logo2} className={styles.img}/>
                <p className={styles.num}>45,000</p>
                <p  className={styles.text}>enterprise users onboarded seamlessly</p>
            </div>
            <div className={styles.data}>
                <img src={logo3} className={styles.img}/>
                <p className={styles.num}>200,000+</p>
                <p className={styles.text}>professionals trained on product strategy</p>
            </div>
        </div>
    )
}

export default Card;