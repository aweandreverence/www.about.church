import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/home.module.scss';

export default function Home() {
    return (
        <Page>
            {/* Hero Section */}
            <div className={css.hero}>
                <div className={css.heroInner}>
                    <h1 className={css.heroTitle}>
                        Find a Good Church
                    </h1>
                    <p className={css.heroSubtitle}>
                        A guide for believers who trust in Jesus Christ to find
                        and plug into a faithful local church that holds to the
                        Biblical gospel and the 5 Solas of the Reformation.
                    </p>
                    <Link href="/find-a-church">
                        <a className={css.heroCta}>Find a Church Near You →</a>
                    </Link>
                </div>
            </div>

            {/* Why Church Matters */}
            <section className={css.section}>
                <h2 className={css.sectionTitle}>Why the Local Church Matters</h2>
                <p className={css.sectionSubtitle}>
                    The New Testament knows nothing of a Christian who is not
                    part of a local church. God designed believers to grow
                    together in community.
                </p>
                <div className={css.cardGrid}>
                    <div className={css.card}>
                        <h3>Faithful Preaching</h3>
                        <p>
                            The church is &ldquo;the pillar and ground of the
                            truth&rdquo; (1 Tim 3:15). A good church proclaims
                            God&rsquo;s Word faithfully, expositionally, and
                            without compromise.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>Gospel Community</h3>
                        <p>
                            &ldquo;And let us consider how to stir up one another
                            to love and good works, not neglecting to meet
                            together&rdquo; (Heb 10:24&ndash;25). We need each
                            other.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>Accountability &amp; Discipleship</h3>
                        <p>
                            The local church provides the structure for
                            discipleship, correction, and spiritual growth that
                            every believer needs (Matt 18:15&ndash;20).
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>Ordinances</h3>
                        <p>
                            Baptism and the Lord&rsquo;s Supper are given to the
                            church&mdash;they are meant to be practiced in the
                            context of a local body of believers.
                        </p>
                    </div>
                </div>
            </section>

            {/* The 5 Solas */}
            <section className={css.section}>
                <h2 className={css.sectionTitle}>The 5 Solas</h2>
                <p className={css.sectionSubtitle}>
                    We believe churches that faithfully teach the Biblical gospel
                    will affirm these historic Protestant convictions.
                </p>
                <div className={css.cardGrid}>
                    <div className={css.card}>
                        <h3>Sola Scriptura</h3>
                        <p>
                            <em>Scripture Alone</em> &mdash; The Bible is the
                            sole infallible rule of faith and practice for the
                            Christian life.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>Sola Fide</h3>
                        <p>
                            <em>Faith Alone</em> &mdash; Justification is
                            received through faith alone, not by any merit or
                            works of our own.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>Sola Gratia</h3>
                        <p>
                            <em>Grace Alone</em> &mdash; Salvation is entirely
                            a gift of God&rsquo;s grace, not something we earn
                            or deserve.
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>Solus Christus</h3>
                        <p>
                            <em>Christ Alone</em> &mdash; Jesus Christ is the
                            only mediator between God and man (1 Tim 2:5).
                        </p>
                    </div>
                    <div className={css.card}>
                        <h3>Soli Deo Gloria</h3>
                        <p>
                            <em>To God Alone Be the Glory</em> &mdash; All of
                            salvation is for the glory of God alone (Rom 11:36).
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={css.ctaSection}>
                <h2>Ready to Find a Church?</h2>
                <p>
                    Explore denominations that hold to the Biblical gospel, or
                    use our curated list of church finder tools to locate a
                    faithful congregation near you.
                </p>
                <Link href="/denominations">
                    <a className={css.ctaButton}>Explore Denominations</a>
                </Link>{' '}
                <Link href="/find-a-church">
                    <a className={css.ctaButton}>Find a Church</a>
                </Link>
            </section>
        </Page>
    );
}
