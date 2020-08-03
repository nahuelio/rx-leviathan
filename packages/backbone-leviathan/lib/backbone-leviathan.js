/**
 * Backbone Leviathan
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 *
 * @description
 * 	Leviathan is an experimental expansion that augments Backbone's capabilities.
 */
import Backbone from 'backbone';
import { Core } from './core/core';
import { Store } from './store/store';
import { DOM, View } from './dom/dom';

export default Object.assign(Backbone, {
	Leviathan: {
		NAME: process.env.npm_package_name,
		VERSION: process.env.npm_package_version,
		Core,
		Store,
		View,
		DOM
	}
});

export const NAME = Backbone.Leviathan.NAME;
export const VERSION = Backbone.Leviathan.VERSION;
export { Core, Store, View, DOM };
