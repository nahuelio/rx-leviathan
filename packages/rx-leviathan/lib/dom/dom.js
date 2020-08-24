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
 * Factory for instantiating JSX.LeviathanElement
 * @param {boolean} [browser = false]
 * @param {JSX.RxLeviathanElement} nameOrElement
 * @param {Maybe<any>} props
 * @param {Maybe<View>} [children]
 * @returns {Maybe<View> | string}
 */
export const create = ((browser = false, nameOrElement, props, children) => {
	// instantiate if name is function constructor,
	return '';
}).bind(null, isBrowser);

/**
 * Client/Server DOM Rendering strategy
 * @param {HTMLElement} dom
 * @param {JSX.RxLeviathanElement} element
 * @returns {string | HTMLElement}
 */
export const render = (element, dom ) => {
	const invalid = isElementInvalid(element) && isDomInvalid(dom);
	if (invalid) throw invalid;
	return isBrowser ? dom.appendChild(create(element)) : (dom.innerHTML = create(element));
};
