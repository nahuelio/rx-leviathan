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
let indentCount = 0;
let indent = '  ';

/**
 * Buffer Flush
 * @param {boolean} [reset = false]
 * @returns {string}
 */
const flush = (reset = false) => {
	const out = buffer.join('');
	if (reset) indentCount = 0;
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
	if (!attributes) return '';
	return ` ${Object.keys(attributes).map((key) => `${key}="${applyModifiers(attributes[key], ...modifiers)}"`).join(' ')}`;
};

/**
 * String Element Open
 * @param {string} tagName
 * @param {object} [attributes = {}]
 * @param {boolean} [selfClose = false]
 * @returns {void}
 */
export const elementOpen = (tagName, attributes = {}, selfClose = false) => {
	if (!selfClose) indentCount++;
	buffer.push(`${indent}<${tagName}${attr(attributes)}${selfClose ? ' />' : '>'}`);
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
	indentCount--;
	buffer.push(`${indent}</${tagName}>`);
}

/**
 * Patch Strategy for Element to string
 * @param {Function | string} resolver
 * @param {boolean} [reset]
 * @return {string}
 */
export const patch = (resolver, reset) => {
	if (!resolver) return '';
	if (typeof resolver === 'function') {
		resolver();
		return flush(reset);
	}
	return resolver;
};
