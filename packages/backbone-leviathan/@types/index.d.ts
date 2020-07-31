/**
 * Backbone Leviathan Typings
 * @module leviathan
 * @version 1.0.0
 */
declare namespace BackboneLeviathan {
	/**
	 * Helper type that considers T as possibly null
	 */
	export type Maybe<T> = T | null;

	/**
	 * @type State
	 */
	export type State<T> = {
		[P in keyof T]: any;
	}

	/**
	 * @type Props
	 */
	export type Props<T> = {
		[P in keyof T]: any;
	}

	/** Store Module **/

	/**
	 * @interface Store
	 * @instance
	 */
	export interface IStore<T extends State<T>> {
		[key: Extract<keyof Omit<IStore<T>, 'state' | 'dispatch'>, string>]: Function;
		readonly state: T;
		dispatch(name: keyof Omit<IStore<T>, 'state' | 'dispatch'>, ...params: any[]): IStore<T>;
	}

	/** DOM Module **/

	/**
	 * @interface DOMView
	 * @instance
	 */
	export interface DOMView<P extends Props<{}>, S extends IStore<{}>> {
		readonly props: P;
		readonly store: S;
		render(): JSX.LeviathanElement;
	}

	/**
	 * @interface DOM
	 */
	export interface DOM {
		create: (name: JSX.LeviathanElementSignature, props?: Maybe<Props>, children?: DOM) => Maybe<DOMView<Props, IStore>>;
	}

	/**
	 * @interface Core
	 */
	export interface Core {
		readonly NAME: string;
		readonly VERSION: string;
		get<R>(path: string): R;
	}

	/**
	 * @interface Leviathan
	 */
	export interface Leviathan extends Core {
		Store: FunctionConstructor;
		DOM: DOM;
	}
}

/**
 * Leviathan JSX Typings
 * @version 1.0.0
 * {@see https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type}
 */
declare global {
	namespace JSX {
		type LeviathanElementSignature = keyof HTMLElementTagNameMap | LeviathanElement;

		interface LeviathanElement {
			// TODO
		}
		interface IntrinsicElements {
			// TODO
		}
	}
}

export = JSX;

