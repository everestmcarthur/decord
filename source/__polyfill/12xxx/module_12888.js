// Module ID: 12888
// Function ID: 12889
// Dependencies: [12874, 12833, 12871]
// Exports: createCheckInEnvelope

// Module 12888
import _mod12833 from "module_12833" /* 12833 */;
import _mod12871 from "module_12871" /* 12871 */;
import _mod12874 from "module_12874" /* 12874 */;

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
    obj.dsn = _mod12874.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12833.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12871.createEnvelope(obj, items1);
};
