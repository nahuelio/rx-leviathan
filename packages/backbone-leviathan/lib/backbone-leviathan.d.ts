/**
 * Backbone Leviathan Typings
 * @version 1.0.0
 */
export as namespace Leviathan;
export = Leviathan;

declare namespace Leviathan {
	/** Helper Types **/

	type Maybe<T> = T | null;

	/** Types **/

	type State<T> = { [P in keyof T]: any };
	type Props<T> = { [P in keyof T]: any };
	type StoreAction = keyof Omit<Store<State<any>>, 'state' | 'dispatch'>;
	type LeviathanElements = Store<any> | View<any>;
	type LeviathanFactoryElement = { name: string; instance: LeviathanElements };

	/** Store Module **/

	interface Store<S = State<{}>> {}
	class Store<S> {
		readonly state: S;
		dispatch(name: StoreAction, ...params: any[]): Store<S>;
		constructor(initial: Maybe<State<{}>>);
	}

	/** DOM Module **/

	interface View<P = {}, S = Store<State<any>>> {}
	class View<P> {
		readonly props: P;
		readonly store: Store<State<{}>>;
		private readonly _patch: (parent: HTMLElement) => void;
		render(): Maybe<JSX.LeviathanElement>;
		constructor(props: Maybe<P>);
	}

	interface DOM {}
	class DOM {
		private static create: (name: JSX.LeviathanElement, props: Maybe<any>, children: Maybe<View<any>>) => Maybe<View<any>>;
		static render(dom: HTMLElement, element: JSX.LeviathanElement): string;
	}

	/** Core Module **/

	interface Core {}
	class Core {
		private static readonly _factory: LeviathanFactoryElement[];
		static register(params?: Maybe<any>): Function; // @Decorator
		static get(name?: string): Maybe<LeviathanElements>;
	}
}

/**
 * Leviathan JSX Typings
 * @version 1.0.0
 * {@see https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type}
 */
declare global {
	namespace JSX {
		type LeviathanElement = IntrinsicElements | Leviathan.View<any>;

		/**
		 * For now, cheap way to use typescript's DOM types
		 * TODO: Work more on this...
		 */
		type IntrinsicElements = {
			[P in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[P]>;
		}
	}
}


