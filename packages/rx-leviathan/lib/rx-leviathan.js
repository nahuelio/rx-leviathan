/**
 * @module @nahuelio/rx-leviathan
 * @desc Leviathan TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Observable, Subscribes, Action, get } from './core/core';
import { create, render } from './dom/dom';
import { Store } from './store/store';
import { View } from './dom/view';

export const NAME = process.env.npm_package_name;
export const VERSION = process.env.npm_package_version;
export { Store, View, Observable, Subscribes, Action, get, create, render };
