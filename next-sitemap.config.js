module.exports = {
    siteUrl: 'https://zsencrypt.zeoseven.com',
    generateRobotsTxt: false,
    sitemapSize: 300,
    exclude: [
        '/info/*',
        '/settings'
    ],
    transform: async (config, path) => {

        let priority = 1.0;

        const lastmod = new Date().toISOString();
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: priority,
            lastmod: lastmod,
        };
    },
}
