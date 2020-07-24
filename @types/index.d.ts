/**
 * Backbone Leviathan Typings
 * @version 1.0.0
 */
declare namespace leviathan {
	export interface Store {
	}

	export interface DOM {
	}

	export interface Leviathan {
		readonly name: string;
		readonly version: string;
		Store: Store;
		DOM: DOM;
	}
}
