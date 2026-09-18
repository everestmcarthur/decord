// Module ID: 4236
// Function ID: 4237
// Name: core/CodeSplittingUtils
// Dependencies: [4237, 1461, 2]

// Module 4236 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1461 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4237 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
