// Module ID: 9538
// Function ID: 9539
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [4904, 1114, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 9538 (showActivitiesInvalidPermissionsAlert)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  const obj2 = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj2.title = intl.string(util.t.otsg2R);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t["/Yx5qX"]);
  AlertActionCreatorsDefault.show(obj2);
};
