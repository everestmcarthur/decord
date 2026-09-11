// Module ID: 12953
// Function ID: 12954
// Dependencies: [12939, 12898, 12936]
// Exports: createCheckInEnvelope

// Module 12953
import _mod12898 from "module_12898" /* 12898 */;
import _mod12936 from "module_12936" /* 12936 */;
import _mod12939 from "module_12939" /* 12939 */;

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
    obj.dsn = _mod12939.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12898.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12936.createEnvelope(obj, items1);
};
