// Module ID: 13009
// Function ID: 13010
// Dependencies: [12995, 12954, 12992]
// Exports: createCheckInEnvelope

// Module 13009
import _mod12954 from "module_12954" /* 12954 */;
import _mod12992 from "module_12992" /* 12992 */;
import _mod12995 from "module_12995" /* 12995 */;

require = arg1;
const dependencyMap = arg6;

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk, arg3, arg4) {
  const obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = _mod12995.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12954.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12992.createEnvelope(obj, items1);
};
