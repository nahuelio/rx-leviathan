/**
 * @module @nahuelio.rxlc
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { compile } from './compiler';
const environment = process.env.ENV || 'test';
if (environment !== 'test') compile(process.argv.slice(2));

export const VERSION = '__VERSION__';
export { compile };
