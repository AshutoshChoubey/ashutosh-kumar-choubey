const fs = require('fs');
const path = require('path');

const domain = 'https://me.worldgyan.com';
const outDir = path.join(__dirname, '../../docs');
const sitemapPath = path.join(outDir, 'sitemap.xml');
const robotsPath = path.join(outDir, 'robots.txt');

// Define static routes
const routes = [
  '/',
  '/projects',
  '/login',
  '/builder'
];

// Generate sitemap XML
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

routes.forEach((route) => {
  const isPriority = route === '/' || route === '/projects';
  sitemapContent += `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${isPriority ? 'monthly' : 'yearly'}</changefreq>
    <priority>${isPriority ? '1.0' : '0.5'}</priority>
  </url>\n`;
});

sitemapContent += `</urlset>`;

// Ensure docs directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log(`✅ Sitemap generated at ${sitemapPath}`);

// Generate robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync(robotsPath, robotsContent, 'utf8');
console.log(`✅ robots.txt generated at ${robotsPath}`);
