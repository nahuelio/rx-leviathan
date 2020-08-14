/**
 * @module @nahuelio/backbone-leviathan/dom
 * @desc Backbone Leviathan DOM TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * Returns true if the current platform is a browser, false otherwise.
 * @private
 * @returns {boolean}
 */
const isBrowser = () => {
	return (typeof window !== 'undefined' && typeof document !== 'undefined');
}

/**
 * Factory for instantiating JSX.LeviathanElement
 * @param {JSX.LeviathanElement} name
 * @param {Maybe<any>} props
 * @param {Maybe<View>} children
 * @returns {Maybe<View>}
 */
const create = (name, props, children) => {
	// TODO
	return null;
}

/**
 * Class DOM
 * @class {Leviathan.DOM}
 */
export class DOM {
	/**
	 * DOM Render
	 * @param {HTMLElement} dom
	 * @param {JSX.LeviathanElement} element
	 * @returns {string}
	 */
	static render(element, dom ) {
		if (isBrowser() && dom) {
			// TODO: create(element);
			return this;
		}
		return ''; // Implement Server rendering and outputs string;
	}
}
