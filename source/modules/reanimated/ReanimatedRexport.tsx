// Module ID: 4341
// Function ID: 4342
// Name: ReanimatedRexport
// Dependencies: [1116, 1636, 4342, 2]

// Module 4341 (ReanimatedRexport)
import cancelAnimationDefault from "cancelAnimation" /* 1636 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4342 */;
import PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const merged = Object.assign(cancelAnimationDefault, obj);
  const importDefaultResult = cancelAnimationDefault;
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in require("cancelAnimation")) {
  arg5[key10033] = require("cancelAnimation")[key10033];
  continue;
}

export default cancelAnimationDefault;
