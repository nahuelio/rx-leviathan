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
 * Server Side Rendering Create Strategy (Incremental DOM to string)
 * @param {JSX.RxLeviathanElement | string} NameOrElement
 * @param {RxLeviathan.RxLeviathanAttributes} props
 * @param {...object} children
 * @returns {string | void}
 */
const createServer = (NameOrElement, props, ...children) => {
	return typeof NameOrElement === 'function' ?
		new NameOrElement(props).render() :
		DOMStr.patch(DOMStr.toString.bind(null, NameOrElement, props, ...children));
};

/**
 * Client Resolver Strategy
 * @param {string} tagName
 * @param {RxLeviathan.RxLeviathanAttributes} props
 * @param {...object} children
 * @returns {void}
 */
const clientResolver = (tagName, props, ...children) => {
	// TODO: Implementation
};

/**
 * Client Side Rendering Create (Incremental DOM)
 * @param {HTMLElement} dom
 * @param {JSX.RxLeviathanElement} NameOrElement
 * @param {RxLeviathan.RxLeviathanAttributes} props
 * @param {...object} children
 * @returns {string | void}
 */
const createClient = (dom, NameOrElement, props, ...children) => {
	return typeof NameOrElement === 'function' ?
		new NameOrElement(props).render() :
		DOM.patch(dom, clientResolver.bind(NameOrElement, props, ...children));
};

/**
 * Determines Create Strategy based on environment.
 * @param {JSX.RxLeviathanElement} NameOrElement
 * @param {Maybe<any>} props
 * @param {Function[] | string[]} children
 * @returns {string | void}
 */
export const create = isBrowser ? createClient : createServer;

/**
 * Client/Server DOM Rendering strategy
 * @param {JSX.RxLeviathanElement} element
 * @param {HTMLElement} dom
 * @returns {string | HTMLElement}
 */
export const render = (element, dom ) => {
	const invalid = isElementInvalid(element) && isDomInvalid(dom);
	if (invalid) throw invalid;
	return isBrowser ? create(dom, element, {}) : create(element, {});
};
