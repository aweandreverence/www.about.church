export const SITE_URL = 'https://www.about.church';
export const SITE_TITLE = 'About.Church — Find a Good Local Church';
export const SITE_DESCRIPTION =
    'A practical guide to help Christians find and join a faithful local church rooted in the Biblical gospel and the 5 Solas of the Reformation.';

export const PAGE_TITLES = {
    '/': 'Home',
    '/denominations': 'Denominations',
    '/find-a-church': 'Find a Church',
    '/what-to-look-for': 'What to Look For',
    '/about': 'About',
};

export const PAGE_DESCRIPTIONS = {
    '/': SITE_DESCRIPTION,
    '/denominations':
        'Explore Reformed and evangelical denominations that affirm the Biblical gospel, with links to their church finder tools and denominational resources.',
    '/find-a-church':
        'Use curated church finder tools and practical search guidance to locate a faithful local church near you.',
    '/what-to-look-for':
        'Learn what to look for in a healthy local church: faithful preaching, Biblical leadership, gospel clarity, membership, discipleship, and worship.',
    '/about':
        'Learn why About.Church exists: helping believers find, evaluate, and plug into a faithful local congregation.',
};

export const SITEMAP_PATHS = Object.keys(PAGE_TITLES);

export function canonicalUrl(path = '/') {
    const normalizedPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
    return `${SITE_URL}${normalizedPath}`;
}
