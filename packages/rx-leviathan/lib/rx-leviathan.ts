/**
 * @module @nahuelio/rx-leviathan
 * @desc Leviathan TODO
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Observable, Subscribes, Action, get } from './leviathan/core';
import { render } from './leviathan/dom';
import { Store, Component, create } from './leviathan/ui';

export const NAME = process.env.npm_package_name;
export const VERSION = process.env.npm_package_version;
export { Store, Component, Observable, Subscribes, Action, get, create, render };
