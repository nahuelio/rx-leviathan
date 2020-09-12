/**
 * Incremental DOM to String
 * @module RxLeviathan.DOMString
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 *
 * TODO:
 * 	- Create API to register content filters for SSR
 */

/**
 * Buffer
 * @private
 * @type {string[]}
 */
let buffer = [];

/**
 * Attribute Value Modifiers
 * @const
 * @type {Function[]}
 */
const attributeModifiers = [
	// Don't serialize functions
	(memo, current) => current && typeof current.value === 'function' ? null : current,
	// Apply Attribute Key modifiers
	(memo, current) => memo ? { ...memo, key: applyModifiers(current.key, ...attributeKeyModifiers), value: current.value } : memo
];

/**
 * Default attribute key modifiers
 * @const
 * @type {Function[]}
 */
const attributeKeyModifiers = [
	(key) => key.toLowerCase() === 'classname' ? 'class' : key
];

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
	return modifiers.reduce((memo, modifier) => {
		memo = modifier(memo, value);
		return memo;
	}, value);
};

/**
 * Format attributes into a string
 * @param {object} attributes
 * @returns {string}
 */
export const attr = (attributes = {}) => {
	if (!attributes) return '';
	return ` ${Object.keys(attributes)
		.map((key) => applyModifiers({ key, value: attributes[key] }, ...attributeModifiers))
		.filter(Boolean)
		.map((attribute) => `${attribute.key}="${attribute.value}"`)
		.join(' ')}`;
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
 * @param {Function | string} resolver
 * @return {string}
 */
export const patch = (resolver) => {
	if (!resolver || typeof resolver !== 'function') return '';
	resolver();
	const out = buffer.join('');
	buffer = [];
	return out;
};

/**
 * Serialize Element to string
 * @param {string} tagName
 * @param {RxLeviathanAttributes} props
 * @param {Function[] | string[]} children
 * @returns {string}
 */
export const toString = (tagName, props, ...children) => {
	children = children.filter(Boolean);
	if (children.length > 0) {
		elementOpen(tagName, props)
		text(children.map((child) => child).join(''));
		elementClose(tagName);
	} else {
		elementVoid(tagName);
	}
}
