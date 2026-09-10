// Module ID: 4280
// Function ID: 4281
// Name: core/CodeSplittingUtils
// Dependencies: [4281, 1461, 2]

// Module 4280 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1461 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4281 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
