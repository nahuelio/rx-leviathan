/**
 * @module @nahuelio/rx-leviathan-compiler
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { ts } from '../@types/rx-leviathan';
import { RxLeviathanCompiler } from './compiler';
export const VERSION = process.env.npm_package_version;
export const use = (ts: ts): ts => RxLeviathanCompiler.extend(ts);
