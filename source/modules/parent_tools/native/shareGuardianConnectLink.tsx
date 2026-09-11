// Module ID: 14933
// Function ID: 14934
// Name: shareGuardianConnectLink
// Dependencies: [7612, 8449, 1114, 2396, 2]
// Exports: shareGuardianConnectLink

// Module 14933 (shareGuardianConnectLink)
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7612 */;
import showShareActionSheet from "showShareActionSheet" /* 8449 */;
import size from "module_2" /* 2 */;

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (username == null) {
    username = stateFromStores.username;
  }
  const tmp = closure_3(stateFromStores.id, linkCode);
  const obj2 = { message: null };
  const intl = util.intl;
  obj2.message = intl.formatToPlainString(_modDef2396.lVD5Nd, { username, url: tmp });
  showShareActionSheet.showShareActionSheet(obj2, "Family Center Connect Guardian");
};
