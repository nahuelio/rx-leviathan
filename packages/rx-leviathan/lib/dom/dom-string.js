/**
 * Incremental DOM to String
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * Internal stream
 * @private
 * @type {string[]}
 */
let buffer = [];

/**
 * Buffer Flush
 * @returns {string}
 */
const flush = () => {
	const out = buffer.join('');
	buffer = [];
	return out;
}

/**
 * Applies a list of filter functions to a given value and return the result
 *
 * @param {any} value
 * @param {Function[]} modifiers
 * @returns {any}
 */
const applyModifiers = (value, ...modifiers) => {
	return modifiers ? modifiers.reduce((memo, modifier) => (memo = modifier(memo)), value) : value;
};

/**
 * Format attributes into a string
 * @param {object} attributes
 * @param {Function[]} modifiers
 * @returns {string}
 */
export const attr = (attributes = {}, ...modifiers) => {
	return Object.keys(attributes).map((key) => `${key}=${applyModifiers(attributes[key], ...modifiers)}`).join(' ');
};

/**
 * String Element Open
 * @param {string} tagName
 * @param {object} [attributes = {}]
 * @param {boolean} [selfClose = false]
 * @returns {void}
 */
export const elementOpen = (tagName, attributes = {}, selfClose = false) => {
	buffer.push(`<${tagName} ${attr(attributes)}${selfClose ? ' />' : '>'}`);
};

/**
 * String Element Void
 * @param {string} tagName
 * @param {object} [attributes = {}]
 * @returns {void}
 */
export const elementVoid = (tagName, attributes) => {
	buffer.push(`${elementOpen(tagName, attributes, true)}`);
};

/**
 * String Element Content
 * @param {any} content
 * @param {Function[]} modifiers
 * @returns {void}
 */
export const text = (content, ...modifiers) => {
	buffer.push(applyModifiers(content, ...modifiers));
}

/**
 * String Element Close
 * @param {string} tagName
 * @returns {void}
 */
export const elementClose = (tagName) => {
	buffer.push(`</${tagName}>`);
}

/**
 * Patch Strategy for Element to string
 * @param {string[]} target
 * @param {Function} resolver
 * @return {string | null}
 */
export const patch = (target, resolver) => {
	if (!resolver) return null;
	if (target && target instanceof Array) buffer = target;
	resolver();
	return flush();
};
