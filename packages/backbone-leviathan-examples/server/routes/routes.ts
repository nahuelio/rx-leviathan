/**
 * Application Routes
 */
import { readdirSync } from 'fs';
import { Router } from 'express';

/**
 * Handle Page Rendering
 */
const handlePage = async (params, req, res) => {
	res.status(200).render('main', params);
};

/**
 * Load Page
 */
const loadPage = async (router, file) => {
	const normalizedFile = `${file.substring(0, file.indexOf('.'))}.js`;
	const page = await import(`../../dist/${normalizedFile}`);
	console.log(page);
	return page;
}

/**
 * Configure Routes
 */
export const configureRoutes = async () => {
	const router = Router();
	const files = readdirSync('js/pages', { encoding: 'utf-8' });
	await files.forEach(loadPage.bind(this, router));
	// const { route, ...params } = info;
	// router.get(route, handlePage.bind(this, params));
	return router;
};
