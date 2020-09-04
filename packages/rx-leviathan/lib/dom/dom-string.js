/**
 * Incremental DOM to String
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * Buffer
 * @private
 * @type {string[]}
 */
let buffer = [];

/**
 * Attribute Key Modifiers
 * @type {Function[]}
 */
let attributeKeyModifiers = [
	(key) => key.toLowerCase() === 'classname' ? 'class' : key
];

/**
 * Attribute Value Modifiers
 * @type {Function[]}
 */
let attributeValueModifiers = [];

/**
 * Content Modifiers
 * @type {Function[]}
 */
let contentModifiers = [];

/**
 * Applies a list of filter functions to a given value and return the result
 *
 * @param {any} value
 * @param {Function} modifiers
 * @returns {any}
 */
const applyModifiers = (value, ...modifiers) => {
	return modifiers ? modifiers.reduce((memo, modifier) => (memo = modifier(memo)), value) : value;
};

/**
 * Format attributes into a string
 * @param {object} attributes
 * @returns {string}
 */
export const attr = (attributes = {}) => {
	if (!attributes) return '';
	return ` ${Object.keys(attributes).map((key) =>
		`${applyModifiers(key, ...attributeKeyModifiers)}="${applyModifiers(attributes[key], ...attributeValueModifiers)}"`).join(' ')}`;
};

/**
 * String Element Open
 * @param {string} tagName
 * @param {object} [attributes = {}]
 * @param {boolean} [selfClose = false]
 * @returns {void}
 */
export const elementOpen = (tagName, attributes = {}, selfClose = false) => {
	buffer.push(`<${tagName}${attr(attributes)}${selfClose ? ' />' : '>'}`);
};

/**
 * String Element Void
 * @param {string} tagName
 * @param {object} [attributes = {}]
 * @returns {void}
 */
export const elementVoid = (tagName, attributes= {}) => {
	elementOpen(tagName, attributes, true);
};

/**
 * String Element Content
 * @param {any} content
 * @param {Function} modifiers
 * @returns {void}
 */
export const text = (content, ...modifiers) => {
	buffer.push(`${applyModifiers(content, ...contentModifiers.concat(modifiers))}`);
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
 * @param {string[] | null} target
 * @param {Function | string} resolver
 * @param {object} [data = {}]
 * @return {string}
 */
export const patch = (target, resolver, data= {}) => {
	if (!resolver || typeof resolver !== 'function') return '';
	resolver();
	const out = buffer.join('');
	buffer = [];
	return out;
};
