const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = path.resolve(__dirname, '..');
const seoConstantsPath = path.join(projectRoot, 'src/constants/seo.js');
const publicDir = path.join(projectRoot, 'public');

function loadSeoConstants() {
    const source = fs.readFileSync(seoConstantsPath, 'utf8');
    const transformed = `${source.replace(/export const (\w+)\s*=/g, 'const $1 =')}\nObject.assign(globalThis, { SITE_URL, PAGE_TITLES });`;
    const context = {};
    vm.runInNewContext(transformed, context, { filename: seoConstantsPath });
    return context;
}

function canonicalUrl(siteUrl, routePath) {
    const canonicalPath = routePath === '/' ? '/' : `${routePath}/`;
    return `${siteUrl}${canonicalPath}`;
}

function buildSitemap(siteUrl, routePaths) {
    const urls = routePaths.map((routePath) => `  <url>\n    <loc>${canonicalUrl(siteUrl, routePath)}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${routePath === '/' ? '1.0' : '0.8'}</priority>\n  </url>`);
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

function buildRobots(siteUrl) {
    return `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
}

const { SITE_URL, PAGE_TITLES } = loadSeoConstants();
const routePaths = Object.keys(PAGE_TITLES);

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'robots.txt'), buildRobots(SITE_URL));
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), buildSitemap(SITE_URL, routePaths));

console.log(`Generated robots.txt and sitemap.xml for ${routePaths.length} routes.`);
