/**
 * @module @nahuelio/rx-leviathan/dom
 * @desc RxLeviathan DOM TODO
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
 * @param {JSX.RxLeviathanElement} name
 * @param {Maybe<any>} props
 * @param {Maybe<View>} children
 * @returns {Maybe<View>}
 */
const create = (name, props, children) => {
	// TODO
	return null;
}

/**
 * Client/Server DOM Rendering strategy
 * @param {HTMLElement} dom
 * @param {JSX.RxLeviathanElement} element
 * @returns {string | void}
 */
export const render = (element, dom ) => {
	if (isBrowser() && dom) {
		console.log(dom);
		return;
	}
	return 'TODO: Server Side Rendering';
};
