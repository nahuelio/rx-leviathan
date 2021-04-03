/**
 * @module @nahuelio.rxlc.compiler
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'underscore';
import extend from 'extend';
import { ts } from '../../@types/rx-leviathan';
import { debug } from '@nahuelio/rx-leviathan-utils';
import {
	Program,
	EmitResult,
	SourceFile,
	WriteFileCallback,
	CancellationToken,
	CustomTransformers
} from 'typescript';

/**
 * Singleton Class RxLeviathanCompiler
 * @class RxCompiler
 */
export class RxLeviathanCompiler {
	/**
	 * @private
	 * @static
	 * @property {RxLeviathanCompiler} instance
	 */
	private static instance: RxLeviathanCompiler;

	/**
	 * Decorate typescript core
	 * @param ts
	 */
	decorate(ts: ts): ts {
		return extend(false, ts, { createProgram: _.compose(this.createProgram.bind(this), ts.createProgram) });
	}

	/**
	 * Custom Program proxy
	 * @param {Program} current
	 * @returns Program
	 */
	private createProgram(current: Program): Program {
		return extend(false, current, { emit: _.compose(current.emit, this.emit.bind(this, current.emit) ) });
	}

	/**
	 * Custom Emit proxy
	 * @param {Function} originalEmit
	 * @param {SourceFile} [targetSourceFile]
	 * @param {WriteFileCallback} [writeFile]
	 * @param {CancellationToken} [cancellationToken]
	 * @param {boolean} [emitOnlyDtsFiles]
	 * @param {CustomTransformers} [customTransformers]
	 * @returns EmitResult
	 */
	private emit(
		originalEmit: Function,
		targetSourceFile?: SourceFile,
		writeFile?: WriteFileCallback,
		cancellationToken?: CancellationToken,
		emitOnlyDtsFiles?: boolean,
		customTransformers?: CustomTransformers
	): EmitResult {
		customTransformers = customTransformers || {};
		return originalEmit(targetSourceFile,
			targetSourceFile,
			writeFile,
			cancellationToken,
			emitOnlyDtsFiles,
			this.decorateTransformers(customTransformers)) as EmitResult;
	}

	/**
	 * Decorate transformers with Leviathan's transformers
	 * @param {CustomTransformers} transformers
	 * @returns CustomTransformers
	 */
	private decorateTransformers(transformers: CustomTransformers): CustomTransformers {
		debug.log(transformers);
		// TODO
		return transformers;
	}

	/**
	 * Retrieve singleton instance
	 * @returns RxLeviathanCompiler
	 */
	static getInstance(): RxLeviathanCompiler {
		if (!RxLeviathanCompiler.instance) {
			RxLeviathanCompiler.instance = new RxLeviathanCompiler();
		}
		return RxLeviathanCompiler.instance;
	}

	/**
	 * Extends typescript compiler by injecting Leviathan's transformations
	 * @param {ts} ts
	 * @returns ts
	 */
	static extend(ts: ts): ts {
		return RxLeviathanCompiler.getInstance().decorate(ts);
	}
}
