// Module ID: 10650
// Function ID: 10651
// Dependencies: [10460, 10467, 10469, 10493, 10505, 10651, 10653, 10654, 10655, 10500]
// Exports: createCasualConfiguration, createConfiguration, parse, parseDate

// Module 10650
import _mod10493 from "module_10493" /* 10493 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10500 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10651 from "module_10651" /* 10651 */;
import _mod10653 from "module_10653" /* 10653 */;
import _mod10654 from "module_10654" /* 10654 */;
import _mod10655 from "module_10655" /* 10655 */;

const require = globalThis.__r;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
function createCasualConfiguration() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new _isNativeReflectConstruct.default(), , , , ];
  const _default = new _isNativeReflectConstruct.default();
  items[1] = new regExp.default(flag);
  const _default1 = new regExp.default(flag);
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  obj.refiners = [];
  const result = includeCommonConfiguration.includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const _default4 = new _isNativeReflectConstruct.default();
  parsers.unshift(new _isNativeReflectConstruct.default());
  return result;
}
function createConfiguration(flag) {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new _isNativeReflectConstruct.default(), , , , ];
  const _default = new _isNativeReflectConstruct.default();
  items[1] = new regExp.default(flag2);
  const _default1 = new regExp.default(flag2);
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  obj.refiners = [];
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
const regExp = fn(_mod10493);
fn(_mod10505);
fn(_mod10651);
fn(_mod10653);
fn(_mod10654);
const _isNativeReflectConstruct = fn(_mod10655);
const chrono = new require("module_10460").Chrono(createCasualConfiguration());
const obj7 = { parsers: null, refiners: null };
let items = [new _isNativeReflectConstruct.default(), , , , ];
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_10460").Chrono;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingResult;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingComponents;
  }
};
const obj4 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ReferenceWithTimezone;
  }
};
const obj5 = {
  enumerable: true,
  get() {
    return require("Meridiem").Meridiem;
  }
};
const obj6 = {
  enumerable: true,
  get() {
    return require("Meridiem").Weekday;
  }
};
items[1] = new regExp.default(true);
let _default1 = new regExp.default(true);
items[2] = new _isNativeReflectConstruct.default();
let _default2 = new _isNativeReflectConstruct.default();
items[3] = new _isNativeReflectConstruct.default();
let _default3 = new _isNativeReflectConstruct.default();
items[4] = new _isNativeReflectConstruct.default();
obj7.parsers = items;
obj7.refiners = [];
const chrono1 = new require("module_10460").Chrono(includeCommonConfiguration.includeCommonConfiguration(obj7, true));

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export const Chrono = require("module_10460").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
