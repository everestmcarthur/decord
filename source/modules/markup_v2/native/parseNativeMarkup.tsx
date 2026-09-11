// Module ID: 8181
// Function ID: 8182
// Name: parseNativeMarkup
// Dependencies: [12, 8182, 8185, 2]
// Exports: default

// Module 8181 (parseNativeMarkup)
import _mod8182 from "module_8182" /* 8182 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8185 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_2 = apply.once(() => _mod8182.parse);
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup_v2/native/parseNativeMarkup.tsx");

export default function parseNativeMarkupToAST(arg0, arg1, channelId) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const result = transformNativeMarkupNode.transformNativeBlocks(closure_2()(arg0), channelId);
  let tmpResult = result;
  if (null != tmp) {
    tmpResult = tmp(result, arg1, false);
  }
  return tmpResult;
};
