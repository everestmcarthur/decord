// Module ID: 10559
// Function ID: 10560
// Name: includeCommonConfiguration
// Dependencies: [10560, 10561, 10556, 10562, 10563, 10564, 10565]
// Exports: includeCommonConfiguration

// Module 10559 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10556 */;
import _mod10560 from "module_10560" /* 10560 */;
import _mod10561 from "module_10561" /* 10561 */;
import _mod10562 from "module_10562" /* 10562 */;
import _mod10563 from "module_10563" /* 10563 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10565 from "module_10565" /* 10565 */;

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
fn(_mod10560);
const regExp = fn(_mod10561);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10562 = fn(_mod10562);
fn(_mod10563);
fn(_mod10564);
const _isNativeReflectConstruct = fn(_mod10565);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  const refiners = parsers.refiners;
  const _default = new _isNativeReflectConstruct.default();
  refiners.unshift(new _isNativeReflectConstruct.default());
  const refiners1 = parsers.refiners;
  const _default1 = new _isNativeReflectConstruct.default();
  refiners1.unshift(new regExp.default());
  const refiners2 = parsers.refiners;
  const _default2 = new regExp.default();
  refiners2.unshift(new OverlapRemovalRefiner.default());
  const refiners3 = parsers.refiners;
  const _default3 = new OverlapRemovalRefiner.default();
  refiners3.push(new regExp.default());
  const refiners4 = parsers.refiners;
  const _default4 = new regExp.default();
  refiners4.push(new OverlapRemovalRefiner.default());
  const refiners5 = parsers.refiners;
  const _default5 = new OverlapRemovalRefiner.default();
  refiners5.push(new module_10562.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10562.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
