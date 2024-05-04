import styles from "./Navbar.module.css"
function Header() {
    return(
        <>
        <div className={styles.navbar}>
            <div className={styles.image}>
                <img src="https://www.hootsuite.com/images/svg/hootsuite-full-logo.svg" alt="HootsuitLogo" />
            </div>
            <div className={styles.navItems}>
                <a href="#" className={styles.home}>Platform</a>
                <a href="#">Plans</a>
                <a href="#">Enterprise</a>
                <a href="#">Resources</a>
                <a href="#">Education</a>
            </div>
            <div className={styles.rightItems}>
                <a href="">Contact</a>
                <a href="">Login</a>
                <a className={styles.signup} href="">Sign Up</a>
            </div>

        </div>
        </>
    )
}
export default Header