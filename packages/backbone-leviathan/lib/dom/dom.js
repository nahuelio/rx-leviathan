/**
 * Backbone BackboneLeviathan DOM
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
/**
 * @class {Leviathan.DOM}
 */
export class DOM {
	/**
	 * Factory for instantiating JSX.LeviathanElement
	 * @param {JSX.LeviathanElementSignature} name
	 * @param {Maybe<any>} props
	 * @param {Maybe<View>} children
	 * @returns {Maybe<View>}
	 */
	static create(name, props, children) {
		// TODO
		return null;
	}

	/**
	 * DOM Server Render
	 * @param {HTMLElement} dom
	 * @param {JSX.LeviathanElementSignature} element;
	 * @returns {string}
	 */
	static render(dom, element) {
		// TODO: Render initial state
		// Leviathan.Core.render(document.getElementById('root'), <[Leviathan.View|JSX.Element] />);
		return '';
	}
};

/**
 * @class {Leviathan.View<Leviathan.Props, Leviathan.Store>}
 */
export class View {
	_props = {};
	_store = null;

	/**
	 * @readonly
	 * @property {Leviathan.Props}
	 */
	get props() {
		return this._props;
	}

	/**
	 * @readonly
	 * @type {Leviathan.Store}
	 */
	get store() {
		return this._store;
	}

	/**
	 * @constructor
	 * @param {Leviathan.Maybe<Leviathan.Props>} props
	 */
	constructor(props) {
		Object.assign(this, { props: props || {} });
	}

	/**
	 * Default strategy to render a view
	 * @returns {Maybe<JSX.LeviathanElement>}
	 */
	render() {
		return null;
	}
}
