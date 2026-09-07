// Module ID: 16372
// Function ID: 16373
// Name: showYouAccountActionSheet
// Dependencies: [16373, 4527, 16374, 1896, 2]
// Exports: showYouAccountActionSheet

// Module 16372 (showYouAccountActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import YOU_SCREEN_ID from "YOU_SCREEN_ID" /* 16373 */;

let closure_3 = YOU_SCREEN_ID.YOU_ACCOUNT_ACTION_SHEET_KEY;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16374, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};
