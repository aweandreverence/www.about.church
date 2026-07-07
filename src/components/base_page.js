import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CommonCSS } from '../components/css/common';
import { CommonJS } from '../components/js/common';
import { NonBlockingJS } from '../components/js/nonblocking';

import {
    SITE_TITLE,
    SITE_URL,
    SITE_DESCRIPTION,
    PAGE_TITLES,
    PAGE_DESCRIPTIONS,
} from '../constants/seo.js';

import css from '../styles/common.module.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Page({ children }) {
    const router = useRouter();
    const path = router.pathname;
    const canonicalPath = path === '/' ? '/' : `${path}/`;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const pageTitle = PAGE_TITLES[path]
        ? `${PAGE_TITLES[path]} | ${SITE_TITLE}`
        : SITE_TITLE;
    const pageDescription = PAGE_DESCRIPTIONS[path] || SITE_DESCRIPTION;
    return (
        <div className={css.container}>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:site_name" content={SITE_TITLE} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />

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
