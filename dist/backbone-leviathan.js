var leviathan = (function (exports, Backbone, _) {
    'use strict';

    Backbone = Backbone && Object.prototype.hasOwnProperty.call(Backbone, 'default') ? Backbone['default'] : Backbone;
    _ = _ && Object.prototype.hasOwnProperty.call(_, 'default') ? _['default'] : _;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var query = {
        get: function (path) {
            return null;
        }
    };

    var DOM = (function () {
        function DOM() {
        }
        DOM.create = function (name, props, children) {
            return null;
        };
        return DOM;
    }());

    var Store = (function () {
        function Store(initial) {
            this.state = {};
            Object.assign(this, { state: initial || {} });
        }
        Store.prototype.dispatch = function (name) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            if (_.has(this, name) && _.isFunction(this[name])) {
                this[name].apply(this, params);
            }
            return this;
        };
        return Store;
    }());

    var Leviathan = __assign(__assign({ NAME: "backbone-leviathan", VERSION: "1.0.0" }, query), { Store: Store,
        DOM: DOM });
    var leviathan = Object.assign(Backbone, { Leviathan: Leviathan });

    exports.Leviathan = Leviathan;
    exports.default = leviathan;

    return exports;

}({}, Backbone, _));
//# sourceMappingURL=backbone-leviathan.js.map
