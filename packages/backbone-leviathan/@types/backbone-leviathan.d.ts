/**
 * Backbone Leviathan Typings
 * @version 1.0.0
 */
declare namespace leviathan {
	/** Helper Types **/

	type Maybe<T> = T | null | undefined;

	/** Types **/

	type State<T> = { [P in keyof T]: any };
	type Props<T> = { [P in keyof T]: any };
	type StoreAction = keyof Omit<Store<State<any>>, 'state' | 'dispatch'>;
	type LeviathanElementCtor = StoreCtor | Extract<View<any, any>, 'new'>;
	type LeviathanElements = Store<any> | View<any, any>;
	type LeviathanFactoryElement = { name: string; instance: LeviathanElements };

	/** Store Module **/

	type StoreCtor = { new (initial: Maybe<State<{}>>); };
	interface Store<S extends State<{}>> {
		readonly state: S;
		dispatch(name: StoreAction, ...params: any[]): Store<S>;
	}

	/** DOM Module **/

	type ViewCtor = { new (props: Maybe<Props<{}>>, store: Maybe<State<{}>>); }
	interface View<P extends Props<{}>, S extends Store<State<{}>>> {
		readonly props: P;
		readonly store: S;
		readonly _patch: (parent: HTMLElement) => void;
		render(): Maybe<JSX.LeviathanElement>;
	}

	interface DOM {
		create: (name: JSX.LeviathanElementSignature, props: Maybe<any>, children: Maybe<View<any, any>>) => Maybe<View<any, any>>;
		render(dom: HTMLElement, element: JSX.LeviathanElementSignature): string;
	}

	/** Core Module **/

	interface Core {
		readonly _factory: LeviathanFactoryElement[];
		register(ctor: LeviathanElementCtor): LeviathanElementCtor;
		get(name?: string): Maybe<LeviathanElements>;
	}

	interface Leviathan {
		readonly NAME: string;
		readonly VERSION: string;
		Core: Core;
		Store: StoreCtor;
		View: ViewCtor;
		DOM: DOM;
	}
}

export = leviathan;
export as namespace leviathan;

