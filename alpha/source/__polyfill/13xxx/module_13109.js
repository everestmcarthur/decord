// Module ID: 13109
// Function ID: 13110
// Dependencies: [13095, 13054, 13092]
// Exports: createCheckInEnvelope

// Module 13109
import _mod13054 from "module_13054" /* 13054 */;
import _mod13092 from "module_13092" /* 13092 */;
import _mod13095 from "module_13095" /* 13095 */;

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
    obj.dsn = _mod13095.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13054.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13092.createEnvelope(obj, items1);
};
