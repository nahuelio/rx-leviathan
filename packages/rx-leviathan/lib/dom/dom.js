/**
 * @module @nahuelio/rx-leviathan/dom
 * @desc RxLeviathan DOM TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { patch, elementOpen, elementClose, elementVoid, text } from 'incremental-dom/index';

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
		? new Error(`${element.constructor.name} doesn't implement a render method.`)
		: false;
};

/**
 * Returns an error if a given dom element is not valid, false otherwise.
 * @param {HTMLElement} dom
 * @returns {Error | boolean}
 */
const isDomInvalid = (dom) => {
	return dom && dom.ELEMENT_NODE ? false : new Error(`Target DOM element is not defined or it's invalid.`);
};

/**
 * Render a given element as String (SSR)
 * @param {JSX.RxLeviathanElement} element
 * @returns {string}
 */
const renderToString = (element) => {
	return '';
};

/**
 * Bootstrap a given element from the dom
 * @param {JSX.RxLeviathanElement} element
 * @returns {void}
 */
const bootstrap = (element) => {
	// TODO
};

/**
 * Factory for instantiating JSX.LeviathanElement
 * @param {JSX.RxLeviathanElement} name
 * @param {Maybe<any>} props
 * @param {Maybe<View>} children
 * @returns {Maybe<View>}
 */
export const create = (name, props, children) => {
	// TODO: will call element._patch();
	return null;
};

/**
 * Client/Server DOM Rendering strategy
 * @param {HTMLElement} dom
 * @param {JSX.RxLeviathanElement} element
 * @returns {void}
 */
export const render = (element, dom ) => {
	const invalid = isElementInvalid(element) && isDomInvalid(dom);
	if (invalid) throw invalid;
	!isBrowser ? patch(dom, renderToString.bind(this, element)) : bootstrap(element);
};
