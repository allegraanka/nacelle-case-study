import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <Link href='/'>
                <a className={utilStyles.regularTextUppercase}>
                    Home
                </a>
            </Link>
            <div className={styles.navbarLinkItems}>
                <Link href='/about'>
                    <a className={utilStyles.regularTextUppercase}>About</a>
                </Link>
                <Link href='#'>
                    <a className={utilStyles.regularTextUppercase}>Work</a>
                </Link>
            </div>
        </div>
    )
}