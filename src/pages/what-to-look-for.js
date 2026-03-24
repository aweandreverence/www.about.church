import Link from 'next/link';
import Page from '../components/base_page';
import css from '../styles/page.module.scss';

export default function WhatToLookFor() {
    return (
        <Page>
            <div className={css.pageHeader}>
                <h1 className={css.pageTitle}>What to Look For in a Church</h1>
                <p className={css.pageSubtitle}>
                    A Biblical guide to evaluating whether a church is faithful
                </p>
            </div>

            <div className={css.aboutContent}>
                <p>
                    Finding a church isn&rsquo;t about finding one that
                    &ldquo;feels right&rdquo; or has the best programs. It&rsquo;s
                    about finding a body of believers where God&rsquo;s Word is
                    faithfully preached, the gospel is clearly proclaimed, and
                    the congregation is being built up in Christ.
                </p>

                <h2>Essential Marks</h2>

                <div className={css.checklist}>
                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>1</span>
                            <h3 className={css.stepTitle}>
                                Faithful Preaching of God&rsquo;s Word
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                The most important thing to evaluate. Is the
                                sermon rooted in the text of Scripture? Is the
                                pastor preaching <em>what the Bible says</em>,
                                not just using it as a springboard for his own
                                ideas?
                            </p>
                            <div className={css.tipBox}>
                                <strong>Look for:</strong> Expositional
                                preaching that works through books of the Bible,
                                explains the text in context, and applies it
                                faithfully. The gospel should be woven
                                throughout.
                            </div>
                            <div className={css.warningBox}>
                                <strong>⚠️ Red flags:</strong> Sermons that
                                rarely open the Bible, focus primarily on
                                self-help or motivation, avoid hard truths about
                                sin and judgment, or treat Scripture as
                                secondary to experience.
                            </div>
                        </div>
                    </div>

                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>2</span>
                            <h3 className={css.stepTitle}>
                                The Gospel Clearly Proclaimed
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                Does this church clearly teach the Biblical
                                gospel? That all people are sinners (Rom 3:23),
                                that the wages of sin is death (Rom 6:23), that
                                Christ died as a substitute for sinners
                                (2 Cor 5:21), and that salvation is by grace
                                alone through faith alone in Christ alone
                                (Eph 2:8&ndash;9)?
                            </p>
                        </div>
                    </div>

                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>3</span>
                            <h3 className={css.stepTitle}>
                                Sound Doctrine &amp; a Statement of Faith
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                Does the church have a clear, written statement
                                of faith? Does it affirm essential Christian
                                doctrines: the Trinity, the deity and humanity
                                of Christ, the inerrancy of Scripture,
                                justification by faith alone, the bodily
                                resurrection, and the return of Christ?
                            </p>
                            <div className={css.tipBox}>
                                <strong>Ask for:</strong> Their statement of
                                faith or confessional standard. Many faithful
                                churches subscribe to historic confessions like
                                the Westminster Confession, the 1689 London
                                Baptist Confession, or the Baptist Faith &amp;
                                Message.
                            </div>
                        </div>
                    </div>

                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>4</span>
                            <h3 className={css.stepTitle}>
                                Biblical Church Leadership
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                Does the church have qualified elders/pastors
                                who meet the qualifications of 1 Timothy 3 and
                                Titus 1? Is there a plurality of elders (not a
                                single pastor ruling alone)? Are deacons
                                serving the body?
                            </p>
                        </div>
                    </div>

                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>5</span>
                            <h3 className={css.stepTitle}>
                                Practice of Baptism &amp; the Lord&rsquo;s
                                Supper
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                Does the church faithfully administer the two
                                ordinances Christ gave to the church? Are they
                                practiced with reverence and according to
                                Scripture?
                            </p>
                        </div>
                    </div>

                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>6</span>
                            <h3 className={css.stepTitle}>
                                Church Discipline
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                Does the church practice church discipline as
                                outlined in Matthew 18:15&ndash;20? A church
                                that never exercises discipline is a church that
                                doesn&rsquo;t take holiness, the purity of the
                                body, or the good of its members seriously.
                            </p>
                        </div>
                    </div>

                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>7</span>
                            <h3 className={css.stepTitle}>
                                Genuine Love &amp; Community
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                &ldquo;By this all people will know that you
                                are my disciples, if you have love for one
                                another&rdquo; (John 13:35). Is there genuine
                                care, hospitality, and accountability among the
                                members?
                            </p>
                        </div>
                    </div>

                    <div className={css.checklistStep}>
                        <div className={css.stepHeader}>
                            <span className={css.stepNumber}>8</span>
                            <h3 className={css.stepTitle}>
                                Commitment to Evangelism &amp; Missions
                            </h3>
                        </div>
                        <div className={css.stepBody}>
                            <p>
                                Is the church actively sharing the gospel with
                                the lost? Does it support missions, both local
                                and global? A church that is inward-focused
                                only is not fulfilling the Great Commission.
                            </p>
                        </div>
                    </div>
                </div>

                <h2>Questions to Ask a Pastor</h2>

                <div className={css.faqSection}>
                    <div className={css.faqItem}>
                        <h3>What do you believe the gospel is?</h3>
                        <p>
                            Listen for a clear articulation of sin, the
                            substitutionary atonement of Christ, justification
                            by faith alone, and the call to repentance.
                        </p>
                    </div>
                    <div className={css.faqItem}>
                        <h3>What is your view of the Bible?</h3>
                        <p>
                            You want to hear: inspired, inerrant, infallible,
                            sufficient, and authoritative. If there is
                            hesitation or qualification, that&rsquo;s a concern.
                        </p>
                    </div>
                    <div className={css.faqItem}>
                        <h3>How do you approach preaching?</h3>
                        <p>
                            Ideally: expositional — preaching through books of
                            the Bible, explaining what the text means, and
                            applying it to the congregation.
                        </p>
                    </div>
                    <div className={css.faqItem}>
                        <h3>Do you practice church membership and discipline?</h3>
                        <p>
                            A healthy church will have meaningful membership and
                            will lovingly practice discipline when necessary for
                            the good of the body and the wayward member.
                        </p>
                    </div>
                    <div className={css.faqItem}>
                        <h3>What confessional standard do you hold to?</h3>
                        <p>
                            Confessional churches have stood the test of time.
                            It&rsquo;s a good sign when a church can point to a
                            historic confession that grounds their beliefs.
                        </p>
                    </div>
                </div>

                <div className={css.missionBox}>
                    <h2>Pray First</h2>
                    <p>
                        Before anything else, pray. Ask God to lead you to a
                        faithful church where you can grow, serve, and be
                        accountable. &ldquo;If any of you lacks wisdom, let
                        him ask God, who gives generously to all without
                        reproach, and it will be given him&rdquo; (James 1:5).
                    </p>
                </div>
            </div>
        </Page>
    );
}
