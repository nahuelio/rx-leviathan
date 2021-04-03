/**
 * @module @nahuelio/rx-leviathan-utils/debug
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { red, yellow, green, blue } from 'colorette';

export const debug = {
	log: (...args) => console.log(args.map(blue)),
	success: (...args) => console.log(args.map(green)),
	warn: (...args) => console.warn(args.map(yellow)),
	error: (...args) => console.error(args.map(red))
};
