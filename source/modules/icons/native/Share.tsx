// Module ID: 9862
// Function ID: 9863
// Dependencies: [1115, 9863, 9864, 2]

// Module 9862
import registerAssetDefault from "registerAsset" /* 9863 */;
import registerAssetDefault2 from "registerAsset" /* 9864 */;
import set from "set" /* 1115 */;

if (set.isIOS()) {
  let importDefaultResult = registerAssetDefault;
} else {
  importDefaultResult = registerAssetDefault2;
}
const result = set.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
