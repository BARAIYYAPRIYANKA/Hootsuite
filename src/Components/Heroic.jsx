import styles from "./Heroic.module.css"
function Hero(){
    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>See value from social sooner</h1>
            <p className={styles.paragraph}>Our training and strategic services have helped <br /> thousands of organizations succeed on social</p>
            <button className={styles.btn}>Request a Demo</button>
        </div>
    )

}
export default Hero;