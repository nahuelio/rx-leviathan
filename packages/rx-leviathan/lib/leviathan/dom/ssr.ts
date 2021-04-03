/**
 * Leviathan Server Side Renderer
 * @module RxLeviathan.DOMString
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 *
 * TODO:
 * 	- Create API to register content filters for SSR
 */
import { dom } from '@nahuelio/rx-leviathan-utils';
import { Props, Component } from '../../../@types/rx-leviathan';

/**
 * Returns an error if a given element is not valid, false otherwise.
 * @param {JSX.RxLeviathanElement} element
 * @returns {Error | boolean}
 */
const isElementInvalid = (element: JSX.RxLeviathanElement) => {
	return !(element instanceof Component)
		? new Error(`${element.constructor.toString()} doesn't implement a render method.`)
		: false;
};

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
const contentModifiers = [];

/**
 * Applies a list of filter functions to a given value and return the result
 *
 * @param {any} value
 * @param {Function[]} modifiers
 * @returns any
 */
const applyModifiers = (value: any, ...modifiers: Function[]): any => {
	return modifiers.reduce((memo, modifier) => {
		memo = modifier(memo, value);
		return memo;
	}, value);
};

/**
 * Format attributes into a string
 * @param {Record<string, any>} [attributes = {}]
 * @returns string
 */
const attr = (attributes = {}): string => {
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
 * @returns void
 */
const elementOpen = (tagName: string, attributes = {}, selfClose = false): void => {
	buffer.push(`<${tagName}${attr(attributes)}${selfClose ? ' />' : '>'}`);
};

/**
 * String Element Void
 * @param {string} tagName
 * @param {object} [attributes = {}]
 * @returns void
 */
const elementVoid = (tagName: string, attributes= {}): void => {
	elementOpen(tagName, attributes, true);
};

/**
 * String Element Content
 * @param {any} content
 * @param {Function[]} modifiers
 * @returns void
 */
const text = (content: any, ...modifiers: Function[]): void => {
	buffer.push(`${applyModifiers(content, ...contentModifiers.concat(modifiers))}`);
};

/**
 * String Element Close
 * @param {string} tagName
 * @returns void
 */
const elementClose = (tagName: string) => {
	buffer.push(`</${tagName}>`);
};

/**
 * Patch Strategy for Element to string
 * @param {Function | string} resolver
 * @return string
 */
const patch = (resolver: Function | string): string => {
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
 * @returns void
 */
const toString = (tagName: string, props: Props<any>, ...children: (Function | string)[]): void => {
	children = children.filter(Boolean);
	if (children.length > 0) {
		elementOpen(tagName, props)
		text(children.map((child) => child).join(''));
		elementClose(tagName);
	} else {
		elementVoid(tagName);
	}
}

/**
 * Server DOM Rendering strategy
 * @param {JSX.RxLeviathanElement} Element
 * @param {RxLeviathan.Props} props
 * @param {any[]} children
 * @returns string
 */
export const render = (Element: JSX.RxLeviathanElement, props: Props<any>, ...children: any[]): string => {
	// FIXME
	if (dom.isBrowser) throw Error('Browser Environment');
	if (isElementInvalid(Element)) throw Error('Element Invalid');
	if (dom.isDomInvalid(Element)) throw Error('DOMElement Invalid');
	return typeof Element === 'function' ?
		new Element(props).render() :
		patch(toString.bind(null, Element, props, ...children));
};
