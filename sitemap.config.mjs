/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://portable.io",
  generateIndexSitemap: false,
  generateRobotsTxt: true,
};

export default config;
