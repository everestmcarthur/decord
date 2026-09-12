// Module ID: 12987
// Function ID: 12988
// Dependencies: [12973, 12932, 12970]
// Exports: createCheckInEnvelope

// Module 12987
import _mod12932 from "module_12932" /* 12932 */;
import _mod12970 from "module_12970" /* 12970 */;
import _mod12973 from "module_12973" /* 12973 */;

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
    obj.dsn = _mod12973.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12932.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12970.createEnvelope(obj, items1);
};
