// Module ID: 12938
// Function ID: 12939
// Dependencies: [4544, 12, 12747, 2]

// Module 12938
import _modDef12747 from "module_12747" /* 12747 */;
import closure_2 from "updateInvite" /* 4544 */;
import importDefaultResult from "apply" /* 12 */;

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef12747.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
