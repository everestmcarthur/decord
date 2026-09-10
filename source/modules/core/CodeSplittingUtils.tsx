// Module ID: 4249
// Function ID: 4250
// Name: core/CodeSplittingUtils
// Dependencies: [4250, 1461, 2]

// Module 4249 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1461 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4250 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
