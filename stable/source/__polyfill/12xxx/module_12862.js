// Module ID: 12862
// Function ID: 12863
// Dependencies: [12848, 12807, 12845]
// Exports: createCheckInEnvelope

// Module 12862
import _mod12807 from "module_12807" /* 12807 */;
import _mod12845 from "module_12845" /* 12845 */;
import _mod12848 from "module_12848" /* 12848 */;

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
    obj.dsn = _mod12848.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12807.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12845.createEnvelope(obj, items1);
};
