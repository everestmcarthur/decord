// Module ID: 10690
// Function ID: 10691
// Dependencies: [10691, 10693, 10694, 10695, 10696, 10697, 10698, 10699, 10700, 10701, 10702, 10703, 10704, 10705, 10706, 10552, 10707, 10708, 10519, 10559]
// Exports: createCasualConfiguration, parse, parseDate

// Module 10690
import _mod10519 from "module_10519" /* 10519 */;
import _mod10552 from "module_10552" /* 10552 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10559 */;
import _mod10691 from "module_10691" /* 10691 */;
import _mod10693 from "module_10693" /* 10693 */;
import _mod10694 from "module_10694" /* 10694 */;
import _mod10695 from "module_10695" /* 10695 */;
import _mod10696 from "module_10696" /* 10696 */;
import _mod10697 from "module_10697" /* 10697 */;
import _mod10698 from "module_10698" /* 10698 */;
import _mod10699 from "module_10699" /* 10699 */;
import _mod10700 from "module_10700" /* 10700 */;
import _mod10701 from "module_10701" /* 10701 */;
import _mod10702 from "module_10702" /* 10702 */;
import _mod10703 from "module_10703" /* 10703 */;
import _mod10704 from "module_10704" /* 10704 */;
import _mod10705 from "module_10705" /* 10705 */;
import _mod10706 from "module_10706" /* 10706 */;
import _mod10707 from "module_10707" /* 10707 */;
import _mod10708 from "module_10708" /* 10708 */;

function createConfiguration(flag, arg1) {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new regExp.default(flag2), , , , , , , , , ];
  const _default = new regExp.default(flag2);
  items[1] = new _isNativeReflectConstruct.default();
  const _default1 = new _isNativeReflectConstruct.default();
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  const _default4 = new _isNativeReflectConstruct.default();
  items[5] = new _isNativeReflectConstruct.default();
  const _default5 = new _isNativeReflectConstruct.default();
  items[6] = new _isNativeReflectConstruct.default();
  const _default6 = new _isNativeReflectConstruct.default();
  items[7] = new _isNativeReflectConstruct.default(flag);
  const _default7 = new _isNativeReflectConstruct.default(flag);
  items[8] = new _isNativeReflectConstruct.default(flag);
  const _default8 = new _isNativeReflectConstruct.default(flag);
  items[9] = new _isNativeReflectConstruct.default(flag);
  obj.parsers = items;
  const _default9 = new _isNativeReflectConstruct.default(flag);
  const items1 = [new _isNativeReflectConstruct.default(), , ];
  const _default10 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  const _default11 = new _isNativeReflectConstruct.default();
  items1[2] = new _isNativeReflectConstruct.default();
  obj.refiners = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
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
    flag = false;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  const parsers1 = tmp.parsers;
  const _default = new _isNativeReflectConstruct.default();
  parsers1.unshift(new _isNativeReflectConstruct.default());
  const parsers2 = tmp.parsers;
  const _default1 = new _isNativeReflectConstruct.default();
  parsers2.unshift(new _isNativeReflectConstruct.default());
  const parsers3 = tmp.parsers;
  const _default2 = new _isNativeReflectConstruct.default();
  parsers3.unshift(new _isNativeReflectConstruct.default());
  const parsers4 = tmp.parsers;
  const _default3 = new _isNativeReflectConstruct.default();
  parsers4.unshift(new _isNativeReflectConstruct.default());
  return tmp;
}
fn(_mod10691);
fn(_mod10693);
fn(_mod10694);
fn(_mod10695);
fn(_mod10696);
fn(_mod10697);
fn(_mod10698);
fn(_mod10699);
fn(_mod10700);
fn(_mod10701);
fn(_mod10702);
fn(_mod10703);
fn(_mod10704);
fn(_mod10705);
fn(_mod10706);
const regExp = fn(_mod10552);
fn(_mod10707);
const _isNativeReflectConstruct = fn(_mod10708);
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
parsers1.unshift(new _isNativeReflectConstruct.default());
let parsers2 = configuration.parsers;
let _default1 = new _isNativeReflectConstruct.default();
parsers2.unshift(new _isNativeReflectConstruct.default());
let parsers3 = configuration.parsers;
let _default2 = new _isNativeReflectConstruct.default();
parsers3.unshift(new _isNativeReflectConstruct.default());
let parsers4 = configuration.parsers;
let _default3 = new _isNativeReflectConstruct.default();
parsers4.unshift(new _isNativeReflectConstruct.default());
const chrono = new _mod10519.Chrono(configuration);
const chrono1 = new _mod10519.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10519.Chrono(createConfiguration(false, true));

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
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
