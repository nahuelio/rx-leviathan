/**
 * Backbone Leviathan
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 * @description
 * 	Leviathan is an experimental expansion that augments Backbone namespace
 * 	by adding 2 new modules:
 * 	* DOM: will provide with incremental-dom capabilities to make use of JSX within Views
 * 	* Store: will provide a Model in the form of Observables
 */
import Backbone from 'backbone';
import query from './core/query';
import DOM from './dom/dom';
import Store from './store/store';

export const Leviathan = {
	NAME: process.env.npm_package_name as string,
	VERSION: process.env.npm_package_version as string,
	...query,
	Store,
	DOM
};

export default Object.assign(Backbone, { Leviathan });
