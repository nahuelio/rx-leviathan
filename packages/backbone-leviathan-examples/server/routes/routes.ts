/**
 * Application Routes
 */
import { readdirSync } from 'fs';
import { Router } from 'express';

/**
 * Page Router
 */
type PageRoute = {
	[name: string]: any;
	router: string
	handler: () => string;
};

/**
 * Handle Page Rendering
 */
const handlePage = async (params, req, res) => {
	const { handler, ...remainingParams } = params;
	res.status(200).render('main', { ...remainingParams, app: handler() });
};

/**
 * Load Page
 */
const loadPage = async (router, memo, file): Promise<PageRoute> => {
	if (file.indexOf('libraries') === -1) {
		memo.push(import(`${process.cwd()}/dist/public/${file}`));
	}
	return memo;
}

/**
 * Configure Routes
 */
export const configureRoutes = async () => {
	const router = Router();
	const files = readdirSync('dist/public', { encoding: 'utf-8' });
	const pages: PageRoute[] = await files.reduce(loadPage.bind(this, router), []);
	pages.forEach((page) => router.get(page.route, handlePage.bind(this, page)));
	return router;
};
