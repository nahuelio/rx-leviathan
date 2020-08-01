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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * BackboneLeviathan Core
   * @author Patricio Ferreira <3dimentionar@gmail.com>
   */
  var Core = {
    get: function get() {
      // dot notation query
      return null;
    }
  };

  /**
   * Backbone BackboneLeviathan DOM
   * @author Patricio Ferreira <3dimentionar@gmail.com>
   */

  /**
   * Class DOM
   * @class DOM
   */
  var DOM = /*#__PURE__*/function () {
    function DOM() {
      _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
      key: "create",

      /**
       * Factory for instantiating JSX.LeviathanElement
       * @param name
       * @param props
       * @param children
       */
      value: function create(name, props, children) {
        // TODO
        return null;
      }
    }]);

    return DOM;
  }();

  /**
   * Store Class
   * @class Store
   */

  var Store = /*#__PURE__*/function () {
    /**
     * State
     * @property state
     */

    /**
     * @constructor
     * @param {Maybe<State<T>>} initial
     */
    function Store(initial) {
      _classCallCheck(this, Store);

      _defineProperty(this, "state", void 0);

      Object.assign(this, {
        state: initial || {}
      });
    }
    /**
     * Dispatch an action with given set of parameters.
     * @param {string} name
     * @param {any[]} params
     * @returns StoreInstance<T, A>
     */


    _createClass(Store, [{
      key: "dispatch",
      value: function dispatch(name) {
        if (_.has(this, name) && _.isFunction(this[name])) {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          this[name].apply(this, params);
        }

        return this;
      }
    }]);

    return Store;
  }();

  var Leviathan = _objectSpread2(_objectSpread2({
    NAME: "@nahuelio/backbone-leviathan",
    VERSION: "1.0.0"
  }, Core), {}, {
    Store: Store,
    DOM: DOM
  });
  var backboneLeviathan = Object.assign(Backbone, {
    Leviathan: Leviathan
  });

  exports.Leviathan = Leviathan;
  exports.default = backboneLeviathan;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=backbone-leviathan.js.map
