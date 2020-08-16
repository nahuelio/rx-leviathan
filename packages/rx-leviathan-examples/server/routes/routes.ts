/**
 * Application Routes
 */
import 'systemjs';
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
 * Creates Page Load Promise
 * @returns {Promise<PageRoute>[]}
 */
const createLoad = (memo, file): Promise<PageRoute>[] => {
	if (file.indexOf('libraries') === -1) {
		const absoluteFile = System.resolve(`${process.cwd()}/dist/${file}`);
		memo.push(System.import(`file:///${absoluteFile}`));
	}
	return memo;
}

/**
 * Configure Routes
 */
export const configureRoutes = async () => {
	const router = Router();
	const files = readdirSync('dist', { encoding: 'utf-8' });
	const pages: PageRoute[] = await Promise.all(files.reduce(createLoad, []));
	pages.forEach((page) => router.get(page.route.path, handlePage.bind(this, page.route)));
	return router;
};
