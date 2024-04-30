import { SitemapStream } from 'sitemap';
import { createWriteStream, promises as fsPromises } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about/', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact/', changefreq: 'monthly', priority: 0.8 },

  { url: '/services/web-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/it', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/analitycs', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/brending', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/animation', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/menu', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/socialmedia', changefreq: 'monthly', priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.techsupp.ge' }); 
  const path = resolve(__dirname, 'public/sitemap.xml');

  // Ensure the public directory exists
  await fsPromises.mkdir(dirname(path), { recursive: true });

  const stream = createWriteStream(path);
  sitemap.pipe(stream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => {
      console.log('Sitemap generated successfully!');
      resolve();
    });
    stream.on('error', (error) => {
      console.error('Error writing the sitemap:', error);
      reject(error);
    });
  });
}

generateSitemap().catch(error => {
  console.error('Failed to generate sitemap:', error);
});
