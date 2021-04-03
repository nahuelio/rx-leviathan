/**
 * @module @nahuelio/rx-leviathan/leviathan
 * @desc RxLeviathan TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Maybe, Store, RxLeviathanElements } from '../../@types/rx-leviathan';

/**
 * Retrieve registered artifact by his unique symbol
 * @param {Symbol} [symbol]
 * @returns Maybe<RxLeviathanElements>
 */
export const get = (symbol) => {
	if (!symbol) return null;
	const key = Symbol.keyFor(symbol);
	return key ? Symbol.for(key): null;
};

/**
 * Subscribe Class Decorator
 * @param {...Store} stores
 * @returns Function
 */
export const Subscribes = (...stores: Store[]) => {
	return (ctor) => {
		// TODO
		return ctor;
	};
};

/**
 * Observable Class Decorator
 * @param {typeof Store} ctor
 * @returns typeof Store
 */
export const Observable = (ctor: typeof Store): typeof Store => {
	// TODO
	return ctor;
};

/**
 * Action Method Decorator
 * @param {Function} method
 * @returns Function
 */
export const Action = (method) => {
	// TODO
	return method;
};
