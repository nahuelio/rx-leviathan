import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$assign from '@babel/runtime-corejs3/core-js-stable/object/assign';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import Backbone from 'backbone';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _ from 'underscore';

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

    _Object$assign(this, {
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

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Leviathan = _objectSpread(_objectSpread({
  NAME: "@nahuelio/backbone-leviathan",
  VERSION: "1.0.0"
}, Core), {}, {
  Store: Store,
  DOM: DOM
});
var backboneLeviathan = _Object$assign(Backbone, {
  Leviathan: Leviathan
});

export default backboneLeviathan;
export { Leviathan };
//# sourceMappingURL=backbone-leviathan.js.map
