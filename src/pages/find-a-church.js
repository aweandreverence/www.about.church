import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function FindAChurch() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>Find a Church</h1>
                <p className={css.pageSubtitle}>
                    Curated church finder tools from denominations and
                    organizations that hold to the Biblical gospel
                </p>
            </div>

            <div className={css.aboutContent}>
                <p>
                    Below is a curated collection of church finder tools from
                    denominations and ministries we believe generally hold to the
                    5 Solas and the Biblical gospel. Each link will take you
                    to an external search tool where you can look for a church
                    near you.
                </p>

                <div className={css.tipBox}>
                    <strong>💡 Tip:</strong> Finding a church online is just the
                    first step. Visit in person, talk to the pastor, attend a
                    few services, and ask about their statement of faith before
                    committing. See our{' '}
                    <Link href="/what-to-look-for">
                        <a>What to Look For</a>
                    </Link>{' '}
                    guide.
                </div>

                <h2>Denomination &amp; Association Finders</h2>

                <div className={css.resourceGrid}>
                    <div className={css.resourceCard}>
                        <h3>The Master&rsquo;s Seminary</h3>
                        <p>
                            Churches led by TMS graduates — committed to
                            expository preaching and the sufficiency of
                            Scripture.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://tms.edu/find-a-church/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Find a Church →
                        </a>
                    </div>

                    <div className={css.resourceCard}>
                        <h3>PCA Church Search</h3>
                        <p>
                            Presbyterian Church in America — Reformed,
                            confessional, committed to the Westminster Standards.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://www.pca.org/church-search"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Search PCA Churches →
                        </a>
                    </div>

                    <div className={css.resourceCard}>
                        <h3>OPC Church Locator</h3>
                        <p>
                            Orthodox Presbyterian Church — founded by J. Gresham
                            Machen, steadfast in the Reformed faith.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://www.opc.org/locator.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Locate OPC Churches →
                        </a>
                    </div>

                    <div className={css.resourceCard}>
                        <h3>SBC Church Search</h3>
                        <p>
                            Southern Baptist Convention — the largest Protestant
                            denomination in America. Individual churches vary;
                            look for the faithful ones.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://churches.sbc.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Search SBC Churches →
                        </a>
                    </div>

                    <div className={css.resourceCard}>
                        <h3>ARBCA Member Churches</h3>
                        <p>
                            Association of Reformed Baptist Churches of America
                            — confessional (1689 LBCF), Reformed Baptist.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://www.arbca.com/member-churches"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View ARBCA Churches →
                        </a>
                    </div>

                    <div className={css.resourceCard}>
                        <h3>URCNA Congregations</h3>
                        <p>
                            United Reformed Churches in North America — Dutch
                            Reformed tradition, Three Forms of Unity.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://www.urcna.org/urcna/congregations.cfm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Find URCNA Churches →
                        </a>
                    </div>
                </div>

                <h2>Ministry &amp; Network Directories</h2>

                <div className={css.resourceGrid}>
                    <div className={css.resourceCard}>
                        <h3>9Marks Church Search</h3>
                        <p>
                            Find churches committed to the 9 marks of a healthy
                            church — expositional preaching, Biblical theology,
                            the gospel, and more.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://www.9marks.org/church-search/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Search 9Marks →
                        </a>
                    </div>

                    <div className={css.resourceCard}>
                        <h3>Acts 29 Network</h3>
                        <p>
                            A global church-planting network of Reformed,
                            gospel-centered churches.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://www.acts29.com/find-a-church/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Find Acts 29 Churches →
                        </a>
                    </div>

                    <div className={css.resourceCard}>
                        <h3>The Gospel Coalition</h3>
                        <p>
                            TGC&rsquo;s directory of churches whose leaders
                            affirm their confessional statement rooted in
                            Reformed theology.
                        </p>
                        <a
                            className={css.resourceLink}
                            href="https://www.thegospelcoalition.org/churches/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TGC Church Directory →
                        </a>
                    </div>
                </div>

                <div className={css.missionBox}>
                    <h2>Don&rsquo;t See Your Denomination?</h2>
                    <p>
                        This is not an exhaustive list. If you know of a
                        faithful denomination or association that holds to the 5
                        Solas and the Biblical gospel, we&rsquo;d love to hear
                        about it. Reach out to us through{' '}
                        <a
                            href="https://www.aweandreverence.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-gold-light)' }}
                        >
                            Awe &amp; Reverence
                        </a>.
                    </p>
                </div>
            </div>
        </Page>
    );
}
