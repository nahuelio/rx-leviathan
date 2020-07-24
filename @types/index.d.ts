/**
 * Backbone Leviathan Typings
 * @module leviathan
 * @version 1.0.0
 */
declare module 'leviathan' {
	/**
	 * Helper type that considers T, null or undefined as possible return types.
	 */
	export type Maybe<T> = T | null;

	export type State<T> = {
		[P in keyof T]: any;
	}

	export type Actions<A> = {
		[P in keyof A]: ReturnType<any>;
	} & ThisType<IStore>;

	/**
	 * @interface Store
	 * @instance
	 */
	export interface IStore<T extends State<T>, A extends Actions<A>> {
		readonly state: T;
		readonly actions: A;
		dispatch(name: Extract<keyof A, string>, ...params: any[]): IStore<T, A>;
	}

	/**
	 * @interface DOMView
	 * @instance
	 */
	export interface DOMView {
		// TODO
	}

	/**
	 * @interface DOM
	 */
	export interface DOM {
		factory: { [P in keyof HTMLElementTagNameMap]: ReturnType<HTMLElementTagNameMap<P>> };
		create: (name: string, props?: object, children?: DOM) => Maybe<DOMView>;
	}

	/**
	 * @interface Core
	 */
	export interface Core {
		readonly __name__: string;
		readonly __version__: string;
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
