/**
 * @module @nahuelio/rx-leviathan/core
 * @desc RxLeviathan Core TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * @type {RxLeviathan.RxLeviathanFactoryElement[]}
 */
const factory = [];

/**
 * Factory Register
 * @param
 */
const register = (instance) => {
	// TODO
	return instance;
};

/**
 * Retrieve registered artifact by a given name
 * @param {string} [name]
 * @returns {Maybe<RxLeviathan.RxLeviathanElements>}
 */
export const get = (name) => {
	const found = !_.isNull(name) ? Core._factory.find(
		(factoryElement) => {
			return factoryElement.name === name;
		}) : null;
	return found ? found.instance : null;
};

/**
 * Subscribe decorator
 * @param {...RxLeviathan.Store} stores
 * @returns {Function}
 */
export const Subscribes = (...stores) => {
	return (ctor) => {
		return ctor;
	};
};

/**
 * Observable decorator
 * @param {Function} ctor
 * @returns {Function}
 */
export const Observable = (ctor) => {
	// TODO
	return ctor;
};
