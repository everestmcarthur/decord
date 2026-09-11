// Module ID: 9625
// Function ID: 9626
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [4951, 1114, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 9625 (showActivitiesInvalidPermissionsAlert)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4951 */;
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
