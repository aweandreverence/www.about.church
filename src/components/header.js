import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from '../styles/header.module.scss';

export function Header() {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleRef = useRef(null);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/denominations', label: 'Denominations' },
        { href: '/find-a-church', label: 'Find a Church' },
        { href: '/what-to-look-for', label: 'What to Look For' },
        { href: '/about', label: 'About' },
    ];

    return (
        <header
            className={css.header}
            onKeyDown={(event) => {
                if (event.key === 'Escape' && mobileOpen) {
                    setMobileOpen(false);
                    toggleRef.current?.focus();
                }
            }}
        >
            <div className={css.headerInner}>
                <Link href="/">
                    <a className={css.logo}>
                        About<span>.Church</span>
                    </a>
                </Link>
                <button
                    type="button"
                    ref={toggleRef}
                    className={css.mobileToggle}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                    aria-controls="primary-navigation"
                >
                    {mobileOpen ? '✕' : '☰'}
                </button>
                <nav
                    id="primary-navigation"
                    aria-label="Main navigation"
                    className={`${css.nav} ${mobileOpen ? css.navOpen : ''}`}
                >
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <a
                                className={`${css.navLink} ${
                                    router.pathname === link.href
                                        ? css.active
                                        : ''
                                }`}
                                aria-current={
                                    router.pathname === link.href
                                        ? 'page'
                                        : undefined
                                }
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
