const fs = require('fs');
const path = require('path');

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shreeacademy.in';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const buildUrl = (pathSegment) => {
    // Ensure baseUrl doesn't end with a slash
    const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
    
    if (pathSegment === '' || pathSegment === '/') {
        // Home page - ensure single trailing slash
        return basePath && basePath !== ''
            ? `${cleanBaseUrl}${basePath}/`
            : `${cleanBaseUrl}/`;
    }
    
    // Remove leading slash from pathSegment to avoid double slashes
    const cleanPath = pathSegment.replace(/^\/+/, '');
    
    // Build URL with proper formatting
    if (basePath && basePath !== '') {
        const cleanBasePath = basePath.replace(/^\/+|\/+$/g, '');
        return `${cleanBaseUrl}/${cleanBasePath}/${cleanPath}/`;
    }
    
    return `${cleanBaseUrl}/${cleanPath}/`;
};

// Generate robots.txt
const robotsContent = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /documentation/
Disallow: /signin/
Disallow: /signup/

Sitemap: ${(() => {
    const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
    if (basePath && basePath !== '') {
        const cleanBasePath = basePath.replace(/^\/+|\/+$/g, '');
        return `${cleanBaseUrl}/${cleanBasePath}/sitemap.xml`;
    }
    return `${cleanBaseUrl}/sitemap.xml`;
})()}
`;

// Generate sitemap.xml
const courses = [
    '9th-10th',
    '11th-12th-science',
    'jee',
    'mhtcet',
    'neet'
];

const routes = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/courses', priority: '0.9', changefreq: 'weekly' },
    { path: '/toppers', priority: '0.8', changefreq: 'weekly' },
    { path: '/gallery', priority: '0.7', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

const courseRoutes = courses.map(slug => ({
    path: `/courses/${slug}`,
    priority: '0.8',
    changefreq: 'monthly',
}));

const allRoutes = [...routes, ...courseRoutes];
const now = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => {
    const url = buildUrl(route.path);
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}).join('\n')}
</urlset>
`;

// Write files
const publicDir = path.join(process.cwd(), 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);

console.log('✅ Generated robots.txt and sitemap.xml');
console.log(`   Base URL: ${baseUrl}`);
console.log(`   Base Path: ${basePath || '(none)'}`);

