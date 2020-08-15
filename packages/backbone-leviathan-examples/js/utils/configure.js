/**
 * Configure Route
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { DOM } from '@nahuelio/backbone-leviathan';

/**
 * Configure Route for a given leviathan page
 * @param {object} params
 * @param {Leviathan.View} PageView
 * @returns {object}
 */
export const configureRoute = (params, PageView) => {
	return { ...params, handler: () => DOM.server(PageView) };
};
