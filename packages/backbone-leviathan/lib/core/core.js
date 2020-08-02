/**
 * BackboneLeviathan Core
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * @template T
 * @typedef {leviathan.Maybe<T>} Maybe
 */

/**
 * @interface {leviathan.Core}
 */
export const Core = {
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
	register(ctor) {
		// TODO
		return ctor;
	},

	/**
	 * Retrieve registered artifact by a given name
	 * @param {string} [name]
	 * @returns {Maybe<leviathan.LeviathanElements>}
	 */
	get: (name) => {
		const found = !_.isNull(name) ? Core._factory.find(
			(factoryElement) => {
			return factoryElement.name === name;
		}) : null;
		return found ? found.instance : null;
	}
};
