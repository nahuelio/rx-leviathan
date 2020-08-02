/**
 * Backbone Leviathan Typings
 * @version 1.0.0
 */
declare namespace leviathan {
	/** Helper Types **/

	type Maybe<T> = T | null;

	/** Types **/

	type State<T> = { [P in keyof T]: any };
	type Props<T> = { [P in keyof T]: any };
	type StoreAction = keyof Omit<Store<State<{}>>, 'state' | 'dispatch'>;

	/** Store Module **/

	type StoreConstructor = { new (initial: Maybe<State<{}>>): Store<State<{}>>; };
	interface Store<S extends State<{}>> {
		readonly state: S;
		dispatch(name: StoreAction, ...params: any[]): Store<S>;
	}

	/** DOM Module **/

	interface DOMView<P extends Props<{}>, S extends Store<State<{}>>> {
		readonly props: P;
		readonly store: S;
		render(): JSX.LeviathanElement;
	}

	interface DOM {
		create: (name: JSX.LeviathanElementSignature, props?: Maybe<Props<{}>>, children?: DOM) => Maybe<DOMView<Props<{}>, Store<State<{}>>>>;
	}

	/** Core Module **/

	interface Core {
		get<R extends Maybe<any>>(path: string): R;
	}

	interface Leviathan {
		readonly NAME: string;
		readonly VERSION: string;
		Core: Core;
		Store: StoreConstructor;
		DOM: DOM;
	}
}

export = leviathan;
export as namespace leviathan;

