import Link from 'next/link';
import css from '../styles/footer.module.scss';

export function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className={css.footer}>
            <div className={css.footerInner}>
                <div className={css.footerSection}>
                    <h4>About.Church</h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>
                        Helping believers find and plug into a good local church
                        that holds to the Biblical gospel.
                    </p>
                </div>
                <div className={css.footerSection}>
                    <h4>Pages</h4>
                    <ul>
                        <li>
                            <Link href="/denominations">
                                <a>Denominations</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/find-a-church">
                                <a>Find a Church</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/what-to-look-for">
                                <a>What to Look For</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={css.footerSection}>
                    <h4>The 5 Solas</h4>
                    <ul>
                        <li>Sola Scriptura</li>
                        <li>Sola Fide</li>
                        <li>Sola Gratia</li>
                        <li>Solus Christus</li>
                        <li>Soli Deo Gloria</li>
                    </ul>
                </div>
            </div>
            <div className={css.divider} />
            <div className={css.bottomBar}>
                <span>&copy; {CURRENT_YEAR} About.Church</span>
                <span>
                    Built by{' '}
                    <a
                        href="https://www.aweandreverence.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Awe &amp; Reverence
                    </a>
                </span>
            </div>
        </footer>
    );
}
