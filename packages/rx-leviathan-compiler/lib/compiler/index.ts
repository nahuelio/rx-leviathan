/**
 * @module @nahuelio.rxlc.compiler
 *	@author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Program } from './program';

/**
 * Compile
 * @param {string[]} [fileNames]
 */
export const compile = (fileNames?: string[]): void => {
	try {
		if (!fileNames) return;
		Program.create(fileNames).run();
	} catch (error) {
		process.exit(error.errorCode);
	}
};
