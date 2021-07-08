import { getAllArticles } from './_articles.js';

export async function get({}) {
	return {
		body: {
			articles: await getAllArticles(),
			mainArticleSlug: 'ballet-kuns-in-beweging'
		}
	};
}
