/**
 * Configure Route Helper
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { render } from '@nahuelio/rx-leviathan';

/**
 * Configure Route for a given rx-leviathan page
 * @param {Record<string, unknown>} params
 * @param {any} PageView
 * @returns {Record<string, unknown>}
 */
export const configureRoute = (params: Record<string, unknown>, PageView: any): Record<string, unknown> => {
	return { ...params, handler: () => render(PageView) };
};
