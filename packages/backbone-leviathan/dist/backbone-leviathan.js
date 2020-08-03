(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('backbone'), require('underscore')) :
  typeof define === 'function' && define.amd ? define(['exports', 'backbone', 'underscore'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['backbone-leviathan'] = {}, global.Backbone, global._));
}(this, (function (exports, Backbone, _) { 'use strict';

  Backbone = Backbone && Object.prototype.hasOwnProperty.call(Backbone, 'default') ? Backbone['default'] : Backbone;
  _ = _ && Object.prototype.hasOwnProperty.call(_, 'default') ? _['default'] : _;

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

  /**
   * @class {Leviathan.Core}
   */

  var Core = /*#__PURE__*/function () {
    function Core() {
      _classCallCheck(this, Core);
    }

    _createClass(Core, null, [{
      key: "register",

      /**
       * @type {Leviathan.LeviathanFactoryElement[]}
       */

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
       * @param {Leviathan.LeviathanElementCtor} ctor
       * @returns {Leviathan.LeviathanElementCtor}
       */
      value: function register(ctor) {
        // TODO
        return ctor;
      }
      /**
       * Retrieve registered artifact by a given name
       * @param {string} [name]
       * @returns {Maybe<Leviathan.LeviathanElements>}
       */

    }, {
      key: "get",
      value: function get(name) {
        var found = !_.isNull(name) ? Core._factory.find(function (factoryElement) {
          return factoryElement.name === name;
        }) : null;
        return found ? found.instance : null;
      }
    }]);

    return Core;
  }();

  _defineProperty(Core, "_factory", []);

  /**
   * @class {Leviathan.Store}
   */

  var Store = /*#__PURE__*/function () {
    /**
     * @readonly
     * @type {Maybe<Leviathan.State<{}>>}
     */

    /**
     * @constructor
     * @param {Maybe<Leviathan.State<{}>>} initial
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
     * @param {Leviathan.StoreAction} name
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
  }();

  /**
   * Backbone BackboneLeviathan DOM
   * @author Patricio Ferreira <3dimentionar@gmail.com>
   */

  /**
   * @class {Leviathan.DOM}
   */
  var DOM = /*#__PURE__*/function () {
    function DOM() {
      _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
      key: "create",

      /**
       * Factory for instantiating JSX.LeviathanElement
       * @param {JSX.LeviathanElementSignature} name
       * @param {Maybe<any>} props
       * @param {Maybe<View>} children
       * @returns {Maybe<View>}
       */
      value: function create(name, props, children) {
        // TODO
        return null;
      }
      /**
       * DOM Server Render
       * @param {HTMLElement} dom
       * @param {JSX.LeviathanElementSignature} element;
       * @returns {string}
       */

    }, {
      key: "render",
      value: function render(dom, element) {
        // TODO: Render initial state
        // Leviathan.Core.render(document.getElementById('root'), <[Leviathan.View|JSX.Element] />);
        return '';
      }
    }]);

    return DOM;
  }();
  /**
   * @class {Leviathan.View<Leviathan.Props, Leviathan.Store>}
   */

  var View = /*#__PURE__*/function () {
    _createClass(View, [{
      key: "props",

      /**
       * @readonly
       * @property {Leviathan.Props}
       */
      get: function get() {
        return this._props;
      }
      /**
       * @readonly
       * @type {Leviathan.Store}
       */

    }, {
      key: "store",
      get: function get() {
        return this._store;
      }
      /**
       * @constructor
       * @param {Leviathan.Maybe<Leviathan.Props>} props
       */

    }]);

    function View(props) {
      _classCallCheck(this, View);

      _defineProperty(this, "_props", {});

      _defineProperty(this, "_store", null);

      Object.assign(this, {
        props: props || {}
      });
    }
    /**
     * Default strategy to render a view
     * @returns {Maybe<JSX.LeviathanElement>}
     */


    _createClass(View, [{
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return View;
  }();

  /**
   * Backbone Leviathan
   * @author Patricio Ferreira <3dimentionar@gmail.com>
   *
   * @description
   * 	Leviathan is an experimental expansion that augments Backbone's capabilities.
   */
  var backboneLeviathan = Object.assign(Backbone, {
    Leviathan: {
      NAME: "@nahuelio/backbone-leviathan",
      VERSION: "1.0.0",
      Core: Core,
      Store: Store,
      View: View,
      DOM: DOM
    }
  });
  var NAME = Backbone.Leviathan.NAME;
  var VERSION = Backbone.Leviathan.VERSION;

  exports.Core = Core;
  exports.DOM = DOM;
  exports.NAME = NAME;
  exports.Store = Store;
  exports.VERSION = VERSION;
  exports.View = View;
  exports.default = backboneLeviathan;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=backbone-leviathan.js.map
