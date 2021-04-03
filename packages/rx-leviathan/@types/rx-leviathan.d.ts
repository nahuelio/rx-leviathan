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
	type RxLeviathanElements = Store | Component<Props>;
	type SubscriptionHash<P> = {
		[K in keyof P]: Maybe<<V extends Component<P>>(subscriber: V) => any> | undefined
	};

	/** Store Module **/

	interface Store {}
	class Store {
		readonly state: Props;
		constructor(initial: Maybe<Props>);
	}

	/** Component Module **/

	interface Component<P extends Props, S = Store> {}
	class Component<P, S> {
		readonly props: P;
		readonly subscriptions: SubscriptionHash<P>;
		dispatch(action: StoreAction<S>, ...params: any[]): Component<P>;
		render(): Maybe<JSX.RxLeviathanElement>;
		constructor(props?: Maybe<P>);
	}

	/** Top-Level Module **/

	const NAME: string;
	const VERSION: string;

	/** Decorators **/

	// Class Decorator / Function
	function Subscribes<V extends Function>(...stores: typeof Store[]): V;
	// Class Decorator / Function
	function Observable<S extends typeof Store>(ctor: S): S;
	// Method Decorator / Function
	function Action(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;

	/** Core Functions **/
	function create(element: JSX.RxLeviathanElement, props: Props, children?: JSX.RxLeviathanElement): Component<any>;
	function render(element: JSX.RxLeviathanElement, dom?: HTMLElement): string | JSX.IntrinsicElements | void;
	function get(symbol?: Symbol): Maybe<RxLeviathanElements>;

	/**
	 * RxLeviathan Compiler
	 */
	type ts = typeof import('typescript');
	function use(ts: ts): ts;
}

/**
 * RxLeviathan JSX Typings
 * @version 1.0.0
 */
declare global {
	namespace JSX {
		type RxLeviathanElement = keyof IntrinsicElements | RxLeviathan.Component<any>;
		/**
		 * Non-synthetic intrinsic elements (Using dom.lib)
		 */
		type IntrinsicElements = {
			[P in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[P]>;
		}
	}
}


