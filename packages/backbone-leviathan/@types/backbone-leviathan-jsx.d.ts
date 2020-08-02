/**
 * Leviathan JSX Typings
 * @version 1.0.0
 * {@see https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type}
 */
declare global {
	namespace JSX {
		type LeviathanElementSignature = keyof HTMLElementTagNameMap | LeviathanElement;

		interface LeviathanElement {
			// TODO
		}
		interface IntrinsicElements {
			// TODO
		}
	}
}

export = JSX;
