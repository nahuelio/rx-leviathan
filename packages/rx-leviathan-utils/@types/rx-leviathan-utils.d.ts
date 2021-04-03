/**
 * RxLeviathan Utils Types
 * @version 1.0.0
 */
export as namespace RxLeviathanUtils;
export = RxLeviathanUtils;

declare namespace RxLeviathanUtils {
	/**
	 * @namespace debug
	 */
	namespace debug {
		function log(...args: any[]): void;
		function success(...args: any[]): void;
		function warn(...args: any[]): void;
		function error(...args: any[]): void;
	}
	/**
	 * @namespace adt
	 */
	namespace adt {}

	/**
	 * @namespace dom
	 */
	namespace dom {
		const isBrowser: boolean;
		function isDomInvalid(element?: HTMLElement): boolean;
	}

	/**
	 * @namespace decorators
	 */
	namespace decorators {}

	/**
	 * @namespace topology
	 */
	namespace topology {
		interface Topology {}
	}
}
