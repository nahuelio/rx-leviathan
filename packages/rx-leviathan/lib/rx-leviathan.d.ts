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

	type Props<T> = { [K in keyof Partial<T>]: any; };
	type StoreAction<S> = keyof Omit<S, 'state' | 'dispatch'>;
	type RxLeviathanElements = Store<any> | View<any, any>;
	type RxLeviathanFactoryElement = { name: string; instance: RxLeviathanElements };
	type EventHash<P, V = View<any, any>> = {
		[K in keyof P]: (subscriber: V) => any
	};

	/** Store Module **/

	interface Store<S = Props<any>> {}
	class Store<S> {
		readonly state: S;
		dispatch(action: StoreAction<this>, ...params: any[]): Store<S>;
		constructor(initial: Maybe<S>);
	}

	/** View Module **/

	interface View<P extends Props<any>, S extends Store<any>> {}
	class View<P, S> {
		readonly props: P;
		readonly store: Pick<S, 'state' | 'dispatch'>;
		readonly subscriptions: EventHash<Partial<P>, View<P, S>>;
		private readonly _patch: (parent: HTMLElement) => void;
		render(): Maybe<JSX.RxLeviathanElement>;
		constructor(props: Maybe<P>);
	}

	/** Top-Level Module **/

	const NAME: string;
	const VERSION: string;
	function Subscribes<F extends Function, S = Store>(...stores: S[]): F; // @Decorator/Function
	function Observable<F extends Function>(ctor: F); // @Decorator/Function
	function render(element: JSX.RxLeviathanElement, dom?: HTMLElement): string;
	function get(name?: string): Maybe<RxLeviathanFactoryElement>;
}

/**
 * RxLeviathan JSX Typings
 * @version 1.0.0
 */
declare global {
	namespace JSX {
		type RxLeviathanElement = IntrinsicElements | RxLeviathan.View<any, any>;

		/**
		 * Non-synthetic intrinsic elements (Using dom.lib)
		 */
		type IntrinsicElements = {
			[P in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[P]>;
		}
	}
}


