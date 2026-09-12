// Module ID: 11524
// Function ID: 11525
// Name: SafetyToolsActionCreators
// Dependencies: [11496, 4603, 11525, 1896, 2]
// Exports: openSafetyToolsActionSheet

// Module 11524 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import Constants from "Constants" /* 11496 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = closure_3(channelId);
  _require = tmp;
  ActionSheetActionCreatorsDefault.openLazy(require("asyncRequireImpl")(11525, dependencyMap.paths), tmp, {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0);
    }
  });
};
