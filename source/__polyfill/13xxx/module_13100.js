// Module ID: 13100
// Function ID: 13101
// Dependencies: [13086, 13045, 13083]
// Exports: createCheckInEnvelope

// Module 13100
import _mod13045 from "module_13045" /* 13045 */;
import _mod13083 from "module_13083" /* 13083 */;
import _mod13086 from "module_13086" /* 13086 */;

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
    obj.dsn = _mod13086.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13045.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13083.createEnvelope(obj, items1);
};
