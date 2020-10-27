/**
 * @module nahuelio.rxlc.utils
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { EventEmitter } from 'events';
import _ from 'underscore';

export interface Dependency  extends String {}

/**
 * Topology Static Class
 * @class Topology
 * @extends EventEmitter
 * {@see https://en.wikipedia.org/wiki/Topological_sorting}
 */
export class Topology extends EventEmitter {
	/**
	 * @static
	 * @property {Record<string, string>} TYPE
	 */
	private static TYPE: Record<string, string> = {
		VOLATILE: 'sort:volatile',
		PERMANENT: 'sort:permanent'
	};

	/**
	 * @static
	 * @private
	 * @property {Record<string, Error>} ERROR
	 */
	private static ERROR: Record<string, Error> = {
		CIRCULAR: new Error('Circular dependency detected. It\'s not possible to derive topological sort')
	}

	/**
	 * Reset internal dependencies to resolve topological order
	 * @static
	 * @private
	 * @param {Dependency[]} dependencies
	 * @returns {Map<string, Dependency[]>}
	 */
	private static reset (dependencies: Dependency[]): Map<string, Dependency[]> {
		return this.clean(dependencies).reduce((memo, dependency: Dependency) => {
			if (!memo.has(dependency.toString())) memo.set(dependency.toString(), []);
			return memo;
		}, new Map<string, Dependency[]>());
	}

	/**
	 * Remove duplicated dependencies from the list.
	 * @static
	 * @private
	 * @param {Dependency} dependencies
	 * @param {string} [identity = 'id']
	 * @returns {Dependency[]}
	 */
	private static removeDuplicates (dependencies: Dependency[], identity: string = 'id'): Dependency[] {
		return _.unique(dependencies, true, (dependency) => dependency);
	}

	/**
	 * Clean up input dependencies
	 * @static
	 * @private
	 * @param {Dependency[]} dependencies
	 * @returns {Dependency[]}
	 */
	private static clean (dependencies: Dependency[]): Dependency[] {
		return dependencies.length > 0 ? [_.first(dependencies)].concat(this.removeDuplicates(dependencies.slice(1))) : dependencies;
	}

	/**
	 * Visit Sortable Strategy
	 * @private
	 * @static
	 * @param {T[]} nodes
	 * @param {T[]} result
	 * @param {Record<string, T>} meta
	 * @param {number} key
	 * @returns {void}
	 */
	private static visit <T>(nodes, result, meta, key): void {
		if (meta[key] === Topology.TYPE.VOLATILE) throw Topology.ERROR.CIRCULAR;
		if (meta[key]) return;
		meta[key] = Topology.TYPE.VOLATILE;
		nodes[key].forEach(this.visit.bind(this, nodes, result, meta));
		meta[key] = Topology.TYPE.PERMANENT;
		result.push(key);
	}

	/**
	 * Perform evaluation on a given node that determines the order based on dependencies.
	 * @private
	 * @static
	 * @param {T[]} nodes
	 * @param {Record<string, T>} meta
	 * @param {T[]} result
	 * @param {T} node
	 * @param {number} key
	 * @returns T[]
	 */
	private static perform <T>(nodes: T[], meta: Record<string, T>, result: T[], node: T, key: number): T[] {
		if (!meta[key]) this.visit(nodes, result, meta, key);
		return nodes.reverse();
	}

	/**
	 * Perform topological sort on a list of nodes and returns a new list of sorted nodes.
	 * TODO: Continue Implementation...
	 * @example
	 * 	<pre>
	 *  	const input = [{ id: 'A' }, { id: 'B' }, { id: 'C' }]
	 * 		Topology.sort(input); // => []
	 * 	</pre>
	 * @static
	 * @param {Dependency[]} dependencies
	 * @returns Dependency[]
	 */
	public static sort (dependencies: Dependency[]): Dependency[] {
		return dependencies.reduce(this.perform.bind(this, this.reset(dependencies), {}), []);
	}
}
