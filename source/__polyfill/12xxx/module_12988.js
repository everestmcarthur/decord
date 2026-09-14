// Module ID: 12988
// Function ID: 12989
// Dependencies: [12974, 12933, 12971]
// Exports: createCheckInEnvelope

// Module 12988
import _mod12933 from "module_12933" /* 12933 */;
import _mod12971 from "module_12971" /* 12971 */;
import _mod12974 from "module_12974" /* 12974 */;

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
    obj.dsn = _mod12974.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12933.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12971.createEnvelope(obj, items1);
};
