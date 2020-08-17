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

	type Props<T = {}> = { [K in keyof Partial<T>]: any; };
	type StoreAction<S> = keyof Omit<S, 'state' | 'dispatch'>;
	type RxLeviathanElements = Store<{}> | View;
	type SubscriptionHash<P> = {
		[K in keyof P]: <V extends View>(subscriber: V) => any
	};

	/** Store Module **/

	interface Store<Props> {}
	class Store<Props> {
		readonly state: Props;
		dispatch(action: StoreAction<this>, ...params: any[]): Store<Props>;
		constructor(initial: Maybe<Props>);
	}

	/** View Module **/

	interface View<Props = {}, Store = {}> {}
	class View<Props, Store> {
		readonly props: Props;
		readonly store: Omit<Store, 'state'>;
		readonly subscriptions: SubscriptionHash<Partial<Props>>;
		render(): Maybe<JSX.RxLeviathanElement>;
		constructor(props?: Maybe<Props>);
	}

	/** Top-Level Module **/

	const NAME: string;
	const VERSION: string;

	/** Decorators **/
	function Subscribes<F extends Function, S = Store<any>>(...stores: S[]): F; // Class Decorator / Function
	function Observable<F extends Function>(ctor: F): F; // Class Decorator / Function
	function Action<M extends Function>(method: M): any; // Method Decorator / Function

	/** Core Functions **/
	function create(element: JSX.RxLeviathanElement, props: Props, children?: JSX.RxLeviathanElement): RxLeviathan.View;
	function render(element: JSX.RxLeviathanElement, dom?: HTMLElement): string | JSX.IntrinsicElements | void;
	function get(symbol?: Symbol): Maybe<RxLeviathanElements>;
}

/**
 * RxLeviathan JSX Typings
 * @version 1.0.0
 */
declare global {
	namespace JSX {
		type RxLeviathanElement = IntrinsicElements | RxLeviathan.View;

		/**
		 * Non-synthetic intrinsic elements (Using dom.lib)
		 */
		type IntrinsicElements = {
			[P in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[P]>;
		}
	}
}


