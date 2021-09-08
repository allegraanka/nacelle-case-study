import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.nacellePurpleBackground}>
        <div className={styles.contentContainer}>
          <div className={utilStyles.heading2Xl}>Experience the power and possibility of Nacelle</div>
          <p className={utilStyles.descriptionText}>Compose a modern, future-proof tech stack bespoke to your brand's unique needs and goals</p>
        </div>
        <svg className={styles.bottomDiagonalLayoutStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
        </svg>
      </section>

      <section className={utilStyles.headingXl}>
        <div className={styles.caseStudiesContentContainer}>
          <p>Selected case studies.</p>
          <div className={styles.caseStudiesFlexContainer}>
            <div className={styles.caseStudiesFlexItem}>
              <div className={utilStyles.lightTextUppercase}>Client <span className={utilStyles.regularTextUppercase}>A. Zahner Co.</span></div>
              <Link href='case-studies/nacelle-case-study'>
                <a><div className={utilStyles.headingSm}>Crafting a Digital Legacy</div></a>
              </Link>
              <div className={utilStyles.descriptionText}>A ground up redesign for Zahner's flagship website.</div>
            </div>
            <div className={styles.caseStudiesFlexItem}>
              <div className={utilStyles.lightTextUppercase}>Client <span className={utilStyles.regularTextUppercase}>MIT Design Lab</span></div>
              <Link href='case-studies/nacelle-case-study'>
                <a><div className={utilStyles.headingSm}>Micro Sites, Macro Brand</div></a>
              </Link>
              <div className={utilStyles.descriptionText}>Developing a digital platform for MIT's new Design Lab.</div>
            </div>
            <div className={styles.caseStudiesFlexItem}>
              <div className={utilStyles.lightTextUppercase}>Client <span className={utilStyles.regularTextUppercase}>Monograph</span></div>
              <Link href='case-studies/nacelle-case-study'>
                <a><div className={utilStyles.headingSm}>Architecture's New Back Office</div></a>
              </Link>
              <div className={utilStyles.descriptionText}>Project planning and time tracking for architects.</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}