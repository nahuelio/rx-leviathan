/**
 * @module @nahuelio/rx-leviathan-utils/dom
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * Returns true if the current platform is a browser, false otherwise.
 * @private
 * @returns {boolean}
 */
const isBrowser: boolean = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Returns an error if a given dom element is not valid, false otherwise.
 * @param {HTMLElement} element
 * @returns {Error | boolean}
 */
const isDomInvalid = (element: HTMLElement): Error | boolean => {
	return isBrowser && element && element.ELEMENT_NODE ? false :
		new Error(`Target DOM element is not defined or it's invalid.`);
};

export const dom = { isBrowser, isDomInvalid };
