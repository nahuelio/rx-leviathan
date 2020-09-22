/**
 * RxLeviathan Typings
 * @version 1.0.0
 */
export as namespace RxLeviathan;
export = RxLeviathan;

declare namespace RxLeviathan {
	/** Helper Types **/

	type Maybe<T> = T | null;
	type PartialPick<T, K extends keyof T> = T | Partial<Pick<T, K>>;

	/** Types **/

	type RxLeviathanKey = string | number | null;
	type RxLeviathanAttributes<T> = { [P in keyof T]: any };

	type Props<T = {}> = { [K in keyof Partial<T>]: any; };
	type StoreAction<S> = keyof Omit<S, 'state'>;
	type RxLeviathanElements = Store | View<Props>;
	type SubscriptionHash<P> = {
		[K in keyof P]: <V extends View<Props>>(subscriber: V) => any
	};

	/** Store Module **/

	interface Store {}
	class Store {
		readonly state: Props;
		constructor(initial: Maybe<Props>);
	}

	/** View Module **/

	interface View<P extends Props, S = Store> {}
	class View<P, S> {
		readonly props: P;
		readonly subscriptions: SubscriptionHash<P>;
		dispatch(action: StoreAction<S>, ...params: any[]): View<P>;
		render(): Maybe<JSX.RxLeviathanElement>;
		constructor(props?: Maybe<P>);
	}

	/** DOM To String Module **/
	interface DOMString {
		attr(attributes?: object, ...modifiers: Function[]): string | void;
		text(content: any, ...modifiers: Function[]): void;
		elementOpen(tagName: string, key?: RxLeviathanKey, statics?: RxLeviathanAttributes<any>, ...args): void;
		elementVoid(tagName: string, key?: RxLeviathanKey, statics?: RxLeviathanAttributes<any>, ...args): void;
		elementClose(tagName: string): void;
		patch(resolver: Function): string | void;
		toString(tagName: keyof JSX.IntrinsicElements, props: Props, ...children: any[]): string;
	}

	/** Top-Level Module **/

	const NAME: string;
	const VERSION: string;

	/** Decorators **/
	function Subscribes<V extends Function>(...stores: typeof Store[]): V; // Class Decorator / Function
	function Observable<S extends typeof Store>(ctor: S): S; // Class Decorator / Function
	function Action<M extends Function>(method: M): M; // Method Decorator / Function

	/** Core Functions **/
	function create(element: JSX.RxLeviathanElement, props: Props, children?: JSX.RxLeviathanElement): View<any>;
	function render(element: JSX.RxLeviathanElement, dom?: HTMLElement): string | JSX.IntrinsicElements | void;
	function get(symbol?: Symbol): Maybe<RxLeviathanElements>;
}

/**
 * RxLeviathan JSX Typings
 * @version 1.0.0
 */
declare global {
	namespace JSX {
		type RxLeviathanElement = keyof IntrinsicElements | RxLeviathan.View<any>;
		/**
		 * Non-synthetic intrinsic elements (Using dom.lib)
		 */
		type IntrinsicElements = {
			[P in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[P]>;
		}
	}
}


