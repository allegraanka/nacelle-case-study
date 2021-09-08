import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function NacelleCaseStudy() {
    return (
        <Layout>
            <Head>
                <title>A. Zahner Co. | Case Study</title>
            </Head>
            <section className={styles.fullHeightWhiteBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.gradientHeading2Xl}>A. Zahner Co. Scales ImageWall <br/> with modern best-of-breed tech stack</div>
                    <p className={utilStyles.descriptionText}>Innovative architectural firm creates one-of-a-kind customer experiences with headless commerce and Nacelle-powered PWA</p>
                    <div className={utilStyles.lightTextUppercase}>Client <span className={utilStyles.regularTextUppercase}>A. Zahner Co.</span></div>
                </div>
                <svg className={styles.bottomDiagonalLayoutStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#011b27" points="0,100 100,0 100,100"/>
                </svg>
            </section>
            <section className={styles.halfHeightBlackBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.lightTextUppercase}>Background</div>
                    <div>ImageWall's online storefront was growing. But sustaining and scaling that growth with innovative and design-forward digital experiences required an infrastructure upgrade and a move to headless architecture.</div>
                </div>
            </section>
            <section className={styles.fullHeightTeamworkBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.lightTextUppercase}>Overview</div>
                    <div>We partnered with the ImageWall team to facilitate their move to a headless model, which would introduce a rebranded interface with best-of-breed technologies across the rest of the stack. The collaborative effort resulted in a unique discovery and purchasing experience for customers that is highly performant across digital touchpoints, while remaining tightly integrated with trusted business and analytics tools for ongoing growth-planning.</div>
                </div>
                <svg className={styles.bottomDiagonalLayoutStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#011b27" points="0,100 100,0 100,100"/>
                </svg>
            </section>
            <section className={styles.halfHeightBlackBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.lightTextUppercase}>Divide & Conquer</div>
                    <div>With an ambitious launch date we elected to split into groups and work in tandem. First we prepared ImageWall for data ingestion, facilitating conversations around important prerequisites like deciding on content models for data indexed into Nacelle. Then, using our Data Ingestion Connector we indexed all the necessary data from Contentful and Shopify into Nacelle, to be retrieved later via GraphQL by the front end. Finally, we helped ImageWall set up webhooks for updating individual records in Nacelle as things change in the service layer. The rest of the team jumped into finalizing designs for the front end, which they would soon stand up using React & Next.js, along with our Storefront API.</div>
                </div>
            </section>
            <section className={styles.fullHeightWhiteboardingBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.lightTextUppercase}>Data ETL</div>
                    <div>ImageWall relies on NetSuite for business management and Redshift for cloud data warehousing, using Redshift as a source of truth for analytics and intelligence. Data flows directly from the back office into the service layer: NetSuite integrates with Shopify, synchronizing orders, customers and product inventories. Contentful data is structured in a way that's optimized for analysis and moved into Redshift automatically as new content is created. We also trained ImageWall's dev team on our Custom Data API, in case data mutations are ever needed directly between these sources and Nacelle.</div>
                </div>
                <svg className={styles.bottomDiagonalLayoutStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#761c30" points="0,100 100,0 100,100"/>
                </svg>
            </section>
            <section className={styles.halfHeightMaroonBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.lightTextUppercase}>User Behavior</div>
                    <div>ImageWall uses Segment and Google Analytics to collect insights on user activity and engagement. Since Segment has an integration with Google Analytics, we only needed to implement Segment's tracking JavaScript for event data to flow through both. Many advanced Google Analytics features like custom dimensions, custom metrics, and content groupings can be easily configured within the Segment Google Analytics integration settings and will automatically connect with existing Segment-tracked events. And, since Segment comes equipped with connectibility to a data warehouse, ImageWall was able to set up regular user data dumps directly to their data store.</div>
                </div>
                <svg className={styles.bottomDiagonalLayoutStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#FFFFFF" points="0,100 100,0 100,100"/>
                </svg>
            </section>
            <section className={styles.halfHeightWhiteBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.lightTextUppercase}>Payment</div>
                    <div>Finally, ImageWall utilized Shopify checkout, using Nacelle's integration with Recharge to support subscriptions and Flow Commerce for international purchases, configured as an external payment provider in Shopify.</div>
                </div>
            </section>
            <section className={styles.fullHeightDiagramBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.heading2Xl}>ImageWall Data Flow Diagram</div>
                </div>
                <svg className={styles.bottomDiagonalLayoutStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#011b27" points="0,100 100,0 100,100"/>
                </svg>
            </section>
            <section className={styles.halfHeightBlackBackground}>
                <div className={styles.contentContainer}>
                    <div className={utilStyles.heading2Xl}>Ready to go headless? <a href='https://nacelle.com/' target='_blank'>Drop us a line.</a></div>
                </div>
            </section>
        </Layout>
    )
}