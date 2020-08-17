/**
 * @module @nahuelio/rx-leviathan
 * @desc Leviathan TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
export const NAME = process.env.npm_package_name;
export const VERSION = process.env.npm_package_name;
export { Store } from './store/store';
export { View } from './dom/view';
export { Observable, Subscribes, Action, get } from './core/core';
export { create, render } from './dom/dom';
