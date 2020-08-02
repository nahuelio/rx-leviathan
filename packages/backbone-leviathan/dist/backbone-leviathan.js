(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('backbone'), require('underscore')) :
	typeof define === 'function' && define.amd ? define(['exports', 'backbone', 'underscore'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['backbone-leviathan'] = {}, global.Backbone, global._));
}(this, (function (exports, Backbone, _) { 'use strict';

	Backbone = Backbone && Object.prototype.hasOwnProperty.call(Backbone, 'default') ? Backbone['default'] : Backbone;
	_ = _ && Object.prototype.hasOwnProperty.call(_, 'default') ? _['default'] : _;

	/**
	 * BackboneLeviathan Core
	 * @author Patricio Ferreira <3dimentionar@gmail.com>
	 */
	/**
	 * @template T
	 * @typedef {leviathan.Maybe<T>} Maybe
	 */

	/**
	 * @interface {leviathan.Core}
	 */

	var Core = {
	  /**
	   * @type {leviathan.LeviathanFactoryElement[]}
	   */
	  _factory: [],

	  /**
	   * Decorator used to register artifact with instance name.
	   * This decorator will make an artifact to register itself for later retrieval.
	   *
	   * @example
	   *  <caption>Example Registering a Leviathan View</caption>
	   * 	<pre>
	   * 	    @Leviathan.register({ store: SomeStore })
	   * 	    class MyView extends Leviathan.View { ... }
	   * 	</pre>
	   * 	or
	   * 	<caption>Example Registering a Leviathan Store</caption>
	   * 	<pre>
	   * 	    @Leviathan.register()
	   * 	    class MyStore extends Leviathan.Store { ... }
	   * 	</pre>
	   * @param {leviathan.LeviathanElementCtor} ctor
	   * @returns {leviathan.LeviathanElementCtor}
	   */
	  register: function register(ctor) {
	    // TODO
	    return ctor;
	  },

	  /**
	   * Retrieve registered artifact by a given name
	   * @param {string} [name]
	   * @returns {Maybe<leviathan.LeviathanElements>}
	   */
	  get: function get(name) {
	    var found = !_.isNull(name) ? Core._factory.find(function (factoryElement) {
	      return factoryElement.name === name;
	    }) : null;
	    return found ? found.instance : null;
	  }
	};

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var _temp;
	/**
	 * @template T
	 * @typedef {leviathan.Maybe<T>} Maybe
	 */

	/**
	 * @typedef {leviathan.State<{}>} State
	 * @typedef {leviathan.Store<State>} Store
	 * @typedef {leviathan.StoreAction} StoreAction
	 */

	/**
	 * @class {leviathan.StoreCtor}
	 */

	var Store = (_temp = /*#__PURE__*/function () {
	  /**
	   * @readonly
	   * @type {Maybe<State>}
	   */

	  /**
	   * @constructor
	   * @param {Maybe<State>} initial
	   */
	  function Store(initial) {
	    _classCallCheck(this, Store);

	    _defineProperty(this, "state", null);

	    Object.assign(this, {
	      state: initial || null
	    });
	  }
	  /**
	   * Dispatches an action with a given name and optionally passing parameters.
	   * @this {Store}
	   * @param {StoreAction} name
	   * @param {any[]} params
	   * @returns {Store}
	   */


	  _createClass(Store, [{
	    key: "dispatch",
	    value: function dispatch(name) {
	      if (this[name] && _.isFunction(this[name])) {
	        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          params[_key - 1] = arguments[_key];
	        }

	        // @ts-ignore
	        this[name].apply(this, params);
	      }

	      return this;
	    }
	  }]);

	  return Store;
	}(), _temp);

	var _temp$1;

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
	var DOM = {
	  /**
	   * Factory for instantiating JSX.LeviathanElement
	   * @param {JSX.LeviathanElementSignature} name
	   * @param {Maybe<any>} props
	   * @param {Maybe<View>} children
	   * @returns {Maybe<View>}
	   */
	  create: function create(name, props, children) {
	    // TODO
	    return null;
	  },

	  /**
	   * DOM Server Render
	   * @param {HTMLElement} dom
	   * @param {JSX.LeviathanElementSignature} element;
	   * @returns {string}
	   */
	  render: function render(dom, element) {
	    // TODO: Render initial state
	    // Leviathan.Core.render(document.getElementById('root'), <[Leviathan.View|JSX.Element] />);
	    return '';
	  }
	};
	/**
	 * @class {leviathan.ViewCtor}
	 */

	var View = (_temp$1 = /*#__PURE__*/function () {
	  function View() {
	    _classCallCheck(this, View);

	    _defineProperty(this, "props", {});

	    _defineProperty(this, "store", null);
	  }

	  _createClass(View, [{
	    key: "render",

	    /**
	     * @returns {Maybe<JSX.LeviathanElement>}
	     */
	    value: function render() {
	      return null;
	    }
	  }]);

	  return View;
	}(), _temp$1);

	/**
	 * Backbone Leviathan
	 * @author Patricio Ferreira <3dimentionar@gmail.com>
	 *
	 * @description
	 * 	Leviathan is an experimental expansion that augments Backbone's capabilities.
	 */
	/**
	 * @type {leviathan.Leviathan}
	 */

	var Leviathan = {
	  NAME: "@nahuelio/backbone-leviathan",
	  VERSION: "1.0.0",
	  Core: Core,
	  Store: Store,
	  View: View,
	  DOM: DOM
	};
	var backboneLeviathan = Object.assign(Backbone, {
	  Leviathan: Leviathan
	});

	exports.Leviathan = Leviathan;
	exports.default = backboneLeviathan;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=backbone-leviathan.js.map
