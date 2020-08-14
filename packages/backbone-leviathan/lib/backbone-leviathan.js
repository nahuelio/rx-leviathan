/**
 * @module @nahuelio/backbone-leviathan
 * @desc Backbone Leviathan TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import Backbone from 'backbone';
import { Core } from './core/core';
import { Store } from './store/store';
import { DOM } from './dom/dom';
import { View } from './dom/view';

export default Object.assign(Backbone, {
	Leviathan: {
		NAME: process.env.npm_package_name,
		VERSION: process.env.npm_package_version,
		...Core,
		Store,
		View,
		DOM
	}
});

export const NAME = Backbone.Leviathan.NAME;
export const VERSION = Backbone.Leviathan.VERSION;
export const Subscribes = Core.Subscribes;
export const Observable = Core.Observable;
export const get = Core.get;
export { Store, View, DOM };
