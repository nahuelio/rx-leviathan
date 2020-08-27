/**
 * @module @nahuelio/rx-leviathan/dom
 * @desc RxLeviathan DOM TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import * as DOMStr from './dom-string';
import * as DOM from 'incremental-dom';

/**
 * Returns true if the current platform is a browser, false otherwise.
 * @private
 * @returns {boolean}
 */
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * DOM Api based on environment
 * @type {RxLeviathan.DOM}
 */
const DOMApi = isBrowser ? DOM : DOMStr;

/**
 * Returns an error if a given element is not valid, false otherwise.
 * @param {JSX.RxLeviathanElement} element
 * @returns {Error | boolean}
 */
const isElementInvalid = (element) => {
	return !element.prototype.render
		? new Error(`${element.constructor.toString()} doesn't implement a render method.`)
		: false;
};

/**
 * Returns an error if a given dom element is not valid, false otherwise.
 * @param {HTMLElement} dom
 * @returns {Error | boolean}
 */
const isDomInvalid = (dom) => {
	return isBrowser && dom && dom.ELEMENT_NODE ? false : new Error(`Target DOM element is not defined or it's invalid.`);
};

/**
 * Render Element
 * @param {string} tagName
 * @param {RxLeviathanAttributes} props
 * @param {any} children
 */
const renderElement = (tagName, props, children) => {
	// TODO: Continue working here...
	console.log(tagName, props, children);
	return '';
};

/**
 * Factory for instantiating JSX.LeviathanElement
 * @param {JSX.RxLeviathanElement} NameOrElement
 * @param {Maybe<any>} props
 * @param {Maybe<View>} [children]
 * @returns {string | void}
 */
export const create = (NameOrElement, props, children) => {
	return typeof NameOrElement === 'function' ?
		new NameOrElement({ ...props, children }).render() :
		renderElement(NameOrElement, props, children);
};

/**
 * Client/Server DOM Rendering strategy
 * @param {JSX.RxLeviathanElement} element
 * @param {HTMLElement | string[]} dom
 * @returns {string | HTMLElement}
 */
export const render = (element, dom ) => {
	const invalid = isElementInvalid(element) && isDomInvalid(dom);
	if (invalid) throw invalid;
	return DOMApi.patch(dom, create.bind(null, element, {}, null));
};
