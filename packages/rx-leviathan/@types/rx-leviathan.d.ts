/**
 * RxLeviathan Typings
 * @version 1.0.0
 */
export as namespace RxLeviathan;
export = RxLeviathan;

declare namespace RxLeviathan {
	/** Helper Types **/

	type Maybe<T> = T | null | undefined;
	type PartialPick<T, K extends keyof T> = T | Partial<Pick<T, K>>;

	/** Types **/

	type RxLeviathanKey = string | number | null;
	type RxLeviathanAttributes<T> = { [P in keyof T]: any };

	type Props = Record<string, Maybe<any> | undefined>;
	type RxLeviathanElements = Store<Props> | Component<Store<any>>;
	type ReactiveHash<S> = {
		[K in keyof S]: Maybe<<C extends Component<S>>(subscriber: C) => any> | undefined
	};

	/** Store Module **/
	interface Store<P = {}> {}
	class Store<P = {}> { protected state: P; }

	/** Component Module **/

	interface Component<S = {}> {}
	class Component<S = {}> {
		readonly props: { [K in keyof S]: S[K] };
		private $: ReactiveHash<S>;
		render(): Maybe<JSX.RxLeviathanElement>;
		constructor(props?: Maybe<S>);
	}

	/** Top-Level Module **/

	const NAME: string;
	const VERSION: string;

	/** Decorators **/

	// Class Decorator / Function
	function Subscribes<C extends Function>(...stores: Function[]): C;
	// Class Decorator / Function
	function Observable<S = Store>(ctor: S): S;
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


