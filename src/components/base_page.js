import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CommonCSS } from '../components/css/common';
import { CommonJS } from '../components/js/common';
import { NonBlockingJS } from '../components/js/nonblocking';

import {
    SITE_TITLE,
    SITE_DESCRIPTION,
    PAGE_TITLES,
    PAGE_DESCRIPTIONS,
    canonicalUrl,
} from '../constants/seo.js';

import css from '../styles/common.module.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Page({ children }) {
    const router = useRouter();
    const path = router.pathname;
    const pageTitle = PAGE_TITLES[path] || PAGE_TITLES['/'];
    const title = `${pageTitle} | ${SITE_TITLE}`;
    const description = PAGE_DESCRIPTIONS[path] || SITE_DESCRIPTION;
    const canonical = canonicalUrl(path);
    return (
        <div className={css.container}>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical} />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="About.Church" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CommonCSS />
            <CommonJS />
            <Header />
            <main id="main-content" className={css.main}>
                {children}
            </main>
            <Footer />
            <NonBlockingJS />
        </div>
    );
}
