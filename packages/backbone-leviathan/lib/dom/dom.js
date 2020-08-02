/**
 * Backbone BackboneLeviathan DOM
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * @template T
 * @typedef {leviathan.Maybe<T>} Maybe
 */

/**
 * @typedef {leviathan.Props<{}>} Props
 * @typedef {leviathan.State<{}>} State
 * @typedef {leviathan.Store<State>} Store
 * @typedef {leviathan.View<Props, Store>} View
 */

/**
 * @interface {leviathan.DOM}
 */
export const DOM = {
	/**
	 * Factory for instantiating JSX.LeviathanElement
	 * @param {JSX.LeviathanElementSignature} name
	 * @param {Maybe<any>} props
	 * @param {Maybe<View>} children
	 * @returns {Maybe<View>}
	 */
	create: (name, props, children) => {
		// TODO
		return null;
	},

	/**
	 * DOM Server Render
	 * @param {HTMLElement} dom
	 * @param {JSX.LeviathanElementSignature} element;
	 * @returns {string}
	 */
	render: (dom, element) => {
		// TODO: Render initial state
		// Leviathan.Core.render(document.getElementById('root'), <[Leviathan.View|JSX.Element] />);
		return '';
	}
};

/**
 * @class {leviathan.ViewCtor}
 */
export const View = class {
	/**
	 * @readonly
	 * @type {Props}
	 */
	props = {};

	/**
	 * @readonly
	 * @type {Store}
	 */
	store = null;

	/**
	 * @returns {Maybe<JSX.LeviathanElement>}
	 */
	render() {
		return null;
	}
}
