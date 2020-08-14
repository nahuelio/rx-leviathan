/**
 * Backbone Leviathan Typings
 * @version 1.0.0
 */
export as namespace Leviathan;
export = Leviathan;

declare namespace Leviathan {
	/** Helper Types **/

	type Maybe<T> = T | null;
	type PartialPick<T, K extends keyof T> = T | Partial<Pick<T, K>>;

	/** Types **/

	type Props<T> = { [K in keyof Partial<T>]: any; };
	type StoreAction<S> = keyof Omit<S, 'state' | 'dispatch'>;
	type LeviathanElements = Store<any> | View<any, any>;
	type LeviathanFactoryElement = { name: string; instance: LeviathanElements };
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
		render(): Maybe<JSX.LeviathanElement>;
		constructor(props: Maybe<P>);
	}

	/** DOM Module **/

	interface DOM {}
	class DOM {
		static render(element: JSX.LeviathanElement, dom?: HTMLElement): string | DOM;
	}

	/** Top-Level Module **/

	const _factory: LeviathanFactoryElement[];
	function Subscribes <S = Store>(...stores: S[]): Function; // @Decorator/Function
	function Observable(): Function; // @Decorator/Function
	function get(name?: string): Maybe<LeviathanElements>;
}

/**
 * Leviathan JSX Typings
 * @version 1.0.0
 * {@see https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type}
 */
declare global {
	namespace JSX {
		type LeviathanElement = IntrinsicElements | Leviathan.View<any, any>;

		/**
		 * Non-synthetic intrinsic elements
		 */
		type IntrinsicElements = {
			[P in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[P]>;
		}
	}
}


