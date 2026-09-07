// Module ID: 14296
// Function ID: 14297
// Dependencies: [3, 14297, 14367, 14385, 14388, 14391, 1253, 1238, 2]

// Module 14296
import set from "set" /* 2 */;
import q from "q" /* 1238 */;
import Buffer from "Buffer" /* 1253 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 14391 */;
import timestamp from "timestamp" /* 3 */;
import module_14297 from "module_14297" /* 14297 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14367 */;
import _typeof from "_typeof" /* 14385 */;
import GetOption from "GetOption" /* 14388 */;

if (typeof process === "undefined") {
  const _window3 = window;
  window.process = {};
}
window.process.nextTick = setImmediate;
if (null == global.location) {
  global.location = { protocol: "https:", host: "discord.com" };
}
if (!global.self) {
  global.self = global;
}
if (null == window.crypto) {
  const _module5 = _isNativeReflectConstruct;
  const _window = window;
  window.crypto = global.crypto;
}
if (null == global.Buffer) {
  global.Buffer = Buffer.Buffer;
}
if (null == global.__reanimatedWorkletInit) {
  global.__reanimatedWorkletInit = () => {

  };
}
const fn = function() {
  return Array.from(this);
};
Map.prototype.toJSON = fn;
Set.prototype.toJSON = fn;
let tmp7 = null != window.TextEncoder;
if (tmp7) {
  const _window2 = window;
  tmp7 = null != window.TextDecoder;
}
if (!tmp7) {
  const _module6 = q;
}
const result = set.fileFinishedImporting("polyfillsNative.tsx");
