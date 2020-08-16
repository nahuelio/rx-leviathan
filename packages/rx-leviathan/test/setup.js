/**
 * General Setup
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import * as sinon from 'sinon';
import { assert } from 'chai';

global.sinon = sinon;
global.assert = assert;
global.sandbox = sinon.createSandbox();
