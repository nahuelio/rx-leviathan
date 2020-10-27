/**
 * @module @nahuelio.rxlc.compiler
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { EventEmitter } from 'events';
import extend from 'extend';
import { createProgram, CompilerOptions, EmitResult } from 'typescript';

/**
 * Program Class
 * @class Program
 * @extends EventEmitter
 */
export class Program extends EventEmitter {
	/**
	 * @property {CompilerOptions} createProgramOptions
	 */
	compilerOptions: CompilerOptions;

	/**
	 * File Names
	 * @property {string[]} fileNames
	 */
	fileNames: string[];

	/**
	 * Results
	 * @property
	 */
	readonly results: EmitResult;

	/**
	 * Constructor
	 * @constructor
	 * @param {string[]} fileNames
	 * @param {CompilerOptions} compilerOptions
	 */
	constructor(fileNames: string[], compilerOptions: CompilerOptions) {
		super();
		extend(true, this, { fileNames, compilerOptions });
	}

	/**
	 * Program Run
	 * @returns {Program}
	 */
	run() {
		extend(true, this, { results: createProgram(this.fileNames, this.compilerOptions).emit() });
		console.log(this.results);
		return this;
	}

	/**
	 * Create Program
	 * @static
	 * @param {string[]} fileNames
	 * @param {CompilerOptions} compilerOptions
	 * @return {Program}
	 */
	static create(fileNames: string[], compilerOptions?: CompilerOptions) {
		return new Program(fileNames, compilerOptions);
	}
}
