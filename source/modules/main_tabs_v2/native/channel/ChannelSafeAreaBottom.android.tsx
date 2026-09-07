// Module ID: 12646
// Function ID: 12647
// Dependencies: [11355, 12647, 12648, 2]

// Module 12646
import set from "set" /* 2 */;
import _modDef12647 from "module_12647" /* 12647 */;
import _modDef12648 from "module_12648" /* 12648 */;
import apexExperiment from "apexExperiment" /* 11355 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = _modDef12647;
} else {
  importDefaultResult = _modDef12648;
}
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
