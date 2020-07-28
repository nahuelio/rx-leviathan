/**
 * Backbone Leviathan DOM
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { DOMView, IStore, Props, Maybe } from 'leviathan';

/**
 * Class DOM
 * @class DOM
 */
export default class DOM {
	/**
	 * Factory for instantiating JSX.LeviathanElement
	 * @param name
	 * @param props
	 * @param children
	 */
	public static create<P extends Props<{}>, S extends IStore<{}>>(
		name: JSX.LeviathanElementSignature,
		props: Maybe<P>,
		children?: DOM
	): Maybe<DOMView<P, S>> {
		// TODO
		return null;
	}
};
