import { format } from 'date-fns';
import { routes } from '../routes';

/**
 * @param {null} None - This requires nothing in the parameters
 * @returns {Promise<XMLDocument>} Returns an xml for google bot and other seo engines
 * @description Creates a xml with all of the pages based on the navigation js file
 * @author Name <brock@cnidariaware.ca>
 */
export const GET = async () => {
	const baseUrl = 'https://ucalgarybaja.ca';

	// Map your imported routes to clean URL paths
	const urls = routes
		.map((route) => {
			// Remove leading slash so it doesn't double up with baseUrl
			const path = route.href === '/' ? '' : route.href.replace(/^\//, '');

			return `
	  <url>
	    <loc>${baseUrl}/${path ? `${path}` : ''}</loc>
	    <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
	    <changefreq>monthly</changefreq>
	    <priority>${route.href === '/' ? '1.0' : '0.8'}</priority>
	  </url>`;
		})
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${urls}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
