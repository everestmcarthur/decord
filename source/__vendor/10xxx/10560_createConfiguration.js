// Module ID: 10560
// Function ID: 10561
// Name: createConfiguration
// Dependencies: [10475, 10433, 10440, 10442, 10561, 10544, 10546, 10547, 10548, 10549, 10562, 10563, 10473]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10560 (createConfiguration)
import includeCommonConfiguration from "includeCommonConfiguration" /* 10473 */;
import regExp from "regExp" /* 10475 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10544 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 10546 */;
import _isNativeReflectConstruct4 from "_isNativeReflectConstruct" /* 10547 */;
import _isNativeReflectConstruct5 from "_isNativeReflectConstruct" /* 10548 */;
import _isNativeReflectConstruct6 from "_isNativeReflectConstruct" /* 10549 */;
import _isNativeReflectConstruct7 from "_isNativeReflectConstruct" /* 10561 */;
import _isNativeReflectConstruct8 from "_isNativeReflectConstruct" /* 10562 */;
import _isNativeReflectConstruct9 from "_isNativeReflectConstruct" /* 10563 */;

function createConfiguration() {
  const obj = { parsers: null, refiners: null };
  const items = [new mod.default(), , , , ];
  const _default = new mod.default();
  items[1] = new mod3.default();
  const _default1 = new mod3.default();
  items[2] = new mod5.default();
  const _default2 = new mod5.default();
  items[3] = new mod4.default();
  const _default3 = new mod4.default();
  items[4] = new mod2.default();
  obj[0] = items;
  const _default4 = new mod2.default();
  const items1 = [new mod6.default(), ];
  const _default5 = new mod6.default();
  items1[1] = new mod7.default();
  obj[1] = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((arg0) => !(arg0 instanceof mod.default));
  return result;
}
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
function createCasualConfiguration() {
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  return tmp;
}
let closure_3 = fn(regExp);
const _isNativeReflectConstruct = fn(_isNativeReflectConstruct7);
let closure_5 = fn(_isNativeReflectConstruct2);
let closure_6 = fn(_isNativeReflectConstruct3);
let closure_7 = fn(_isNativeReflectConstruct4);
let closure_8 = fn(_isNativeReflectConstruct5);
let closure_9 = fn(_isNativeReflectConstruct6);
let closure_10 = fn(_isNativeReflectConstruct8);
let closure_11 = fn(_isNativeReflectConstruct9);
const configuration = createConfiguration();
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("Chrono").Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
let _default = new _isNativeReflectConstruct.default();
const obj1 = {
  enumerable: true,
  get() {
    return require(10440) /* ReferenceWithTimezone */.ReferenceWithTimezone;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require(10442).Meridiem;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require(10442).Weekday;
  }
};
parsers1.unshift(new _isNativeReflectConstruct.default());
const chrono1 = new require("Chrono").Chrono(configuration1);
const chrono2 = new require("Chrono").Chrono(createConfiguration());

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
export const Chrono = require(10440) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = require(10440) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = require(10440) /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = require(10440) /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require(10442).Meridiem;
export const Weekday = require(10442).Weekday;
export const hans = chrono;
export const casual = chrono1;
export const strict = chrono2;
