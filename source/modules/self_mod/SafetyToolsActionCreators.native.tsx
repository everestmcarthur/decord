// Module ID: 11487
// Function ID: 11488
// Name: SafetyToolsActionCreators
// Dependencies: [11459, 4574, 11488, 1896, 2]
// Exports: openSafetyToolsActionSheet

// Module 11487 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import Constants from "Constants" /* 11459 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = closure_3(channelId);
  _require = tmp;
  ActionSheetActionCreatorsDefault.openLazy(require("asyncRequireImpl")(11488, dependencyMap.paths), tmp, {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0);
    }
  });
};
