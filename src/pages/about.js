import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function About() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>About</h1>
                <p className={css.pageSubtitle}>
                    Why we built About.Church
                </p>
            </div>

            <div className={css.aboutContent}>
                <div className={css.missionBox}>
                    <h2>Our Mission</h2>
                    <p>
                        To help believers who trust in Jesus Christ find and
                        plug into a good local church that faithfully proclaims
                        the Biblical gospel.
                    </p>
                </div>

                <h2>Why This Exists</h2>

                <p>
                    Finding a faithful church can be surprisingly difficult.
                    There are thousands of churches in any given area, but not
                    all of them hold to the Biblical gospel. Some have
                    abandoned the authority of Scripture. Others preach a
                    different gospel entirely&mdash;one of works, prosperity,
                    or vague spirituality.
                </p>

                <p>
                    We believe the local church is God&rsquo;s plan for His
                    people. Not a podcast. Not a livestream. Not a parachurch
                    ministry. The <em>local church</em>&mdash;with real pastors,
                    real members, real accountability, and real love.
                </p>

                <p>
                    About.Church exists to point believers toward denominations,
                    associations, and networks that generally hold to the
                    historic Protestant faith summarized in the 5 Solas of the
                    Reformation:
                </p>

                <ul>
                    <li>
                        <strong>Sola Scriptura</strong> &mdash; Scripture alone
                        is our final authority
                    </li>
                    <li>
                        <strong>Sola Fide</strong> &mdash; We are justified by
                        faith alone
                    </li>
                    <li>
                        <strong>Sola Gratia</strong> &mdash; Salvation is by
                        grace alone
                    </li>
                    <li>
                        <strong>Solus Christus</strong> &mdash; Christ alone is
                        our mediator and Savior
                    </li>
                    <li>
                        <strong>Soli Deo Gloria</strong> &mdash; All glory
                        belongs to God alone
                    </li>
                </ul>

                <h2>What We Are Not</h2>

                <p>
                    We are not a church. We are not a denomination. We do not
                    endorse every church within any denomination listed on this
                    site. We are simply a resource to help you begin your
                    search. Always evaluate individual congregations on their
                    own faithfulness to the Word of God.
                </p>

                <h2>Who We Are</h2>

                <p>
                    About.Church is built and maintained by{' '}
                    <a
                        href="https://www.aweandreverence.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Awe &amp; Reverence
                    </a>
                    , a Christian software company building tools for worship
                    and faith. We build software that draws people closer to
                    God.
                </p>

                <div className={css.defBox}>
                    <h4>Contact</h4>
                    <p>
                        Questions, corrections, or suggestions? Visit{' '}
                        <a
                            href="https://www.aweandreverence.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.aweandreverence.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </Page>
    );
}
