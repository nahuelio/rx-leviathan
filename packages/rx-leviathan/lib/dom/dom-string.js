/**
 * Incremental DOM to String
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Writable } from 'stream';

/**
 * Internal stream
 * @private
 */
let stream = new Writable({ defaultEncoding: 'utf8' });

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
export const sAttrs = (attributes = {}, ...modifiers) => {
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
	stream.cork().write(`<${tagName} ${sAttrs(attributes)}${selfClose ? ' />' : '>'}`).uncork();
};

/**
 * String Element Void
 * @param {string} tagName
 * @param {object} [attributes = {}]
 * @returns {void}
 */
export const elementVoid = (tagName, attributes) => {
	stream.cork().write(`${elementOpen(tagName, attributes, true)}`).uncork();
};

/**
 * String Element Content
 * @param {any} content
 * @param {Function[]} modifiers
 * @returns {void}
 */
export const text = (content, ...modifiers) => {
	stream.cork().write(applyModifiers(content, ...modifiers)).uncork();
}

/**
 * String Element Close
 * @param {string} tagName
 * @returns {void}
 */
export const elementClose = (tagName) => {
	stream.cork().write(`</${tagName}>`).uncork();
}



/**
 * Patch Strategy for Element to string
 * @param {ReadableStream} out
 * @param {Function} resolver
 * @param {boolean} [flush = true]
 * @return {ReadableStream | null}
 */
export const patch = (out, resolver, flush = true) => {
	if (!out || !resolver) return null;
	resolver();
	return stream.pipe(out, { end: flush });
};
