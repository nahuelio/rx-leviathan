/**
 * BackboneLeviathan Core
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';

/**
 * @class {Leviathan.Core}
 */
export class Core {
	/**
	 * @type {Leviathan.LeviathanFactoryElement[]}
	 */
	static _factory = [];

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
	static register(ctor) {
		// TODO
		return ctor;
	}

	/**
	 * Retrieve registered artifact by a given name
	 * @param {string} [name]
	 * @returns {Maybe<Leviathan.LeviathanElements>}
	 */
	static get(name) {
		const found = !_.isNull(name) ? Core._factory.find(
			(factoryElement) => {
			return factoryElement.name === name;
		}) : null;
		return found ? found.instance : null;
	}
};
