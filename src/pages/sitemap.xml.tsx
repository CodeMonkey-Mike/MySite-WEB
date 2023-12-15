
import { gql, GraphQLClient } from 'graphql-request';
import { createApiEndpoint } from "helper/apollo";

interface SitemapProps {
	loc: string,
	lastmod: string,
	changefreq: string,
	priority: number;
}
const Sitemap = () => {};
const toUrl = (route: SitemapProps) =>
  `<url>
	<loc>${route.loc}</loc>
	<lastmod>${route.lastmod}</lastmod>
	<changefreq>${route.changefreq}</changefreq>
	<priority>${route.priority}</priority>
	</url>`;
  
const createSitemap = (urlList: SitemapProps[]) => {
	return (
		`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlList?.map?.((loc: SitemapProps) => toUrl(loc)).join("")}
    </urlset>`
	);
};
  

const graphQLClient = new GraphQLClient(createApiEndpoint(), {
  method: `GET`,
});

const query = gql`
query {
	getSiteMap
}
`;
	
export async function getServerSideProps({ res }: any) {    
	
	const siteMapJson = await graphQLClient.request(query) as {getSiteMap: string };
	const urlList = eval(siteMapJson?.getSiteMap) ?? [];
	const sitemap = createSitemap(urlList);
	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();
	return { props: { results : {siteMapJson}}};
};
export default Sitemap;

