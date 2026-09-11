// Module ID: 11485
// Function ID: 11486
// Name: SafetyToolsActionCreators
// Dependencies: [11457, 4573, 11486, 1896, 2]
// Exports: openSafetyToolsActionSheet

// Module 11485 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import Constants from "Constants" /* 11457 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = closure_3(channelId);
  _require = tmp;
  ActionSheetActionCreatorsDefault.openLazy(require("asyncRequireImpl")(11486, dependencyMap.paths), tmp, {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0);
    }
  });
};
