/**
 * Backbone Leviathan Core
 * @description
 * 	TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
/// <reference path="../@types/index.d.ts" />
import Backbone from 'backbone';
import DOM from './dom/dom';
import Store from './store/store';

/**
 * Leviathan Information
 */
const Leviathan: leviathan.Leviathan = {
	name: process.env.npm_package_name as string,
	version: process.env.npm_package_version as string,
	Store,
	DOM
}

/**
 * Export Backbone with leviathan
 */
export default Object.assign(Backbone, { Leviathan });
