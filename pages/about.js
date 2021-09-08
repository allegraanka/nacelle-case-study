import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | Solutions Architect at Nacelle</title>
            </Head>
            <section className={styles.fullHeightBeginBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.largeLightTextUppercase}>Take Initiative</div>
                </div>
            </section>
            <section className={styles.fullHeightBeginBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.largeLightTextUppercase}>Get Involved</div>
                </div>
            </section>
            <section className={styles.fullHeightBeginBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.largeLightTextUppercase}>Be Resourceful</div>
                </div>
            </section>
            <section className={styles.fullHeightBeginBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.largeLightTextUppercase}>Communicate</div>
                </div>
            </section>
        </Layout>
    )
}