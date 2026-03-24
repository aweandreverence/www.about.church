import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function Denominations() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>Denominations</h1>
                <p className={css.pageSubtitle}>
                    A guide to evangelical and Reformed denominations that hold
                    to the 5 Solas and the Biblical gospel
                </p>
            </div>

            <div className={css.aboutContent}>
                <p>
                    Not all denominations are created equal. Some have drifted
                    from the authority of Scripture. Others have held fast.
                    Below is an overview of denominations and associations we
                    believe generally hold to the historic, Biblical gospel.
                </p>

                <p>
                    <strong>Note:</strong> No denomination is perfect, and
                    individual congregations within any denomination can vary
                    widely. Always evaluate a specific church on its own
                    faithfulness to Scripture, not just its denominational
                    label.
                </p>

                <h2>Reformed &amp; Presbyterian</h2>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>1</span>
                        Presbyterian Church in America (PCA)
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            The PCA holds to the Westminster Confession of Faith
                            and Catechisms. Founded in 1973, it is committed to
                            Reformed theology, the inerrancy of Scripture, and
                            the Great Commission.
                        </p>
                        <ul>
                            <li>
                                <strong>Confessional standard:</strong>{' '}
                                Westminster Standards
                            </li>
                            <li>
                                <strong>Governance:</strong> Presbyterian
                                (elders and deacons)
                            </li>
                            <li>
                                <a
                                    href="https://www.pca.org/church-search"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    PCA Church Finder →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>2</span>
                        Orthodox Presbyterian Church (OPC)
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            Founded in 1936 by J. Gresham Machen, the OPC is a
                            confessionally Reformed denomination committed to
                            the Westminster Standards and faithful Biblical
                            preaching.
                        </p>
                        <ul>
                            <li>
                                <strong>Confessional standard:</strong>{' '}
                                Westminster Standards
                            </li>
                            <li>
                                <strong>Governance:</strong> Presbyterian
                            </li>
                            <li>
                                <a
                                    href="https://www.opc.org/locator.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    OPC Church Locator →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>3</span>
                        United Reformed Churches in North America (URCNA)
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            The URCNA holds to the Three Forms of Unity
                            (Belgic Confession, Heidelberg Catechism, and Canons
                            of Dort). A faithful Reformed denomination in the
                            Dutch Reformed tradition.
                        </p>
                        <ul>
                            <li>
                                <strong>Confessional standard:</strong>{' '}
                                Three Forms of Unity
                            </li>
                            <li>
                                <strong>Governance:</strong> Presbyterian
                                (consistory)
                            </li>
                            <li>
                                <a
                                    href="https://www.urcna.org/urcna/congregations.cfm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    URCNA Church Directory →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <h2>Baptist</h2>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>4</span>
                        Southern Baptist Convention (SBC)
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            The SBC is the largest Protestant denomination in
                            the United States. While individual churches vary, the{' '}
                            <em>Baptist Faith &amp; Message 2000</em> affirms
                            the inerrancy of Scripture, salvation by grace
                            through faith, and believer&rsquo;s baptism.
                        </p>
                        <ul>
                            <li>
                                <strong>Confessional standard:</strong>{' '}
                                Baptist Faith &amp; Message 2000
                            </li>
                            <li>
                                <strong>Governance:</strong> Congregational
                                (autonomous local churches)
                            </li>
                            <li>
                                <a
                                    href="https://churches.sbc.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SBC Church Search →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>5</span>
                        Association of Reformed Baptist Churches of America
                        (ARBCA)
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            ARBCA churches hold to the 1689 London Baptist
                            Confession of Faith. They are confessionally
                            Reformed, Baptist in polity, and committed to
                            expository preaching.
                        </p>
                        <ul>
                            <li>
                                <strong>Confessional standard:</strong>{' '}
                                1689 London Baptist Confession
                            </li>
                            <li>
                                <strong>Governance:</strong> Elder-led
                                congregational
                            </li>
                            <li>
                                <a
                                    href="https://www.arbca.com/member-churches"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ARBCA Member Churches →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <h2>Non-Denominational &amp; Other Associations</h2>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>6</span>
                        The Master&rsquo;s Seminary (TMS) Church Directory
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            The Master&rsquo;s Seminary, founded by John
                            MacArthur, maintains a directory of churches led by
                            TMS graduates. These churches tend to be committed
                            to expository preaching, the sufficiency of
                            Scripture, and the doctrines of grace.
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://tms.edu/find-a-church/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    TMS Find a Church →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>7</span>
                        Acts 29
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            Acts 29 is a global network of church-planting
                            churches. Member churches affirm a Reformed
                            statement of faith and are committed to the gospel,
                            church planting, and developing leaders.
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://www.acts29.com/find-a-church/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Acts 29 Church Finder →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>8</span>
                        9Marks
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            9Marks is a ministry dedicated to equipping church
                            leaders with a Biblical vision for the local church.
                            Their church search helps locate churches committed
                            to expositional preaching, Biblical theology,
                            the gospel, and church membership.
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://www.9marks.org/church-search/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    9Marks Church Search →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.reqSection}>
                    <h3 className={css.reqTitle}>
                        <span className={css.reqNumber}>9</span>
                        The Gospel Coalition (TGC)
                    </h3>
                    <div className={css.reqBody}>
                        <p>
                            TGC is a fellowship of evangelical churches and
                            leaders who hold to a confessional statement rooted
                            in Reformed theology. Their church directory helps
                            locate gospel-centered churches.
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://www.thegospelcoalition.org/churches/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    TGC Church Directory →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={css.missionBox}>
                    <h2>A Word of Caution</h2>
                    <p>
                        A denomination&rsquo;s label is not a guarantee. Visit a
                        church, listen to the preaching, examine whether the
                        gospel is clearly proclaimed, and see if the
                        congregation bears the fruit of genuine faith. Use our{' '}
                        <Link href="/what-to-look-for">
                            <a style={{ color: 'var(--color-gold-light)' }}>
                                What to Look For
                            </a>
                        </Link>{' '}
                        guide.
                    </p>
                </div>
            </div>
        </Page>
    );
}
