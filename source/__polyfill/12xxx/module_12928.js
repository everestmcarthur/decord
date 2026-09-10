// Module ID: 12928
// Function ID: 12929
// Dependencies: [12914, 12873, 12911]
// Exports: createCheckInEnvelope

// Module 12928
import _mod12873 from "module_12873" /* 12873 */;
import _mod12911 from "module_12911" /* 12911 */;
import _mod12914 from "module_12914" /* 12914 */;

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
    obj.dsn = _mod12914.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12873.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12911.createEnvelope(obj, items1);
};
