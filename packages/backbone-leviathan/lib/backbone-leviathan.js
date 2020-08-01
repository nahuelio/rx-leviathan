/**
 * Backbone Leviathan
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 * @description
 * 	Leviathan is an experimental expansion that augments Backbone namespace.
 */
import Backbone from 'backbone';
import { Core } from './core/core';
import { DOM } from './dom/dom';
import { Store } from './store/store';

export const Leviathan = {
	NAME: process.env.npm_package_name,
	VERSION: process.env.npm_package_version,
	...Core,
	Store,
	DOM
};

export default Object.assign(Backbone, { Leviathan });
