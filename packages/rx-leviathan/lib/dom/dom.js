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
 * Environment API for DOM manipulation
 * @returns {DOM | DOMStr}
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
 * Browser Render Element
 * @param {string} tagName
 * @param {RxLeviathanAttributes} props
 * @param {Function[] | string[]} children
 * @returns void
 */
const element = (tagName, props, ...children) => {
	// TODO: Client Side (FIX ISSUE with target)
}

/**
 * Server Render Element
 * @param {string} tagName
 * @param {RxLeviathanAttributes} props
 * @param {Function[] | string[]} children
 * @returns {string}
 */
const elementToString = (tagName, props, ...children) => {
	children = children.filter(Boolean);
	if (children.length > 0) {
		DOMApi.elementOpen(tagName, props)
		DOMApi.text(children.map((child) => child).join(''));
		DOMApi.elementClose(tagName);
	} else {
		DOMApi.elementVoid(tagName);
	}
};

/**
 * Factory for instantiating JSX.LeviathanElement
 * @param {JSX.RxLeviathanElement} NameOrElement
 * @param {Maybe<any>} props
 * @param {Function[] | string[]} children
 * @returns {string | void}
 */
export const create = (NameOrElement, props, ...children) => {
	return typeof NameOrElement === 'function' ?
		new NameOrElement(props).render() :
		DOMApi.patch([], elementToString.bind(null, NameOrElement, props, ...children));
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
	const resolver = create.bind(null, element, {}, []);
	return isBrowser ? DOMApi.patch(dom, resolver) : resolver();
};
