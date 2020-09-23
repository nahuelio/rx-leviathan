/**
 * @module @nahuelio/rx-leviathan/core
 * @desc RxLeviathan Core
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */

/**
 * Retrieve registered artifact by his unique symbol
 * @param {Symbol} [symbol]
 * @returns {RxLeviathan.Maybe<RxLeviathan.RxLeviathanElements>}
 */
export const get = (symbol) => {
	if (!symbol) return null;
	const key = Symbol.keyFor(symbol);
	return key ? Symbol.for(key): null;
};

/**
 * Subscribe Class Decorator
 * @param {...RxLeviathan.Store} stores
 * @returns {Function}
 */
export const Subscribes = (...stores) => {
	return (ctor) => {
		return ctor;
	};
};

/**
 * Observable Class Decorator
 * @param {Function} ctor
 * @returns {Function}
 */
export const Observable = (ctor) => {
	// TODO
	return ctor;
};

/**
 * Action Method Decorator
 * @param {Function} method
 * @returns {Function}
 */
export const Action = (method) => {
	return method;
}
