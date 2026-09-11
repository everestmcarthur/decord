// Module ID: 12951
// Function ID: 12952
// Dependencies: [12937, 12896, 12934]
// Exports: createCheckInEnvelope

// Module 12951
import _mod12896 from "module_12896" /* 12896 */;
import _mod12934 from "module_12934" /* 12934 */;
import _mod12937 from "module_12937" /* 12937 */;

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
    obj.dsn = _mod12937.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12896.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12934.createEnvelope(obj, items1);
};
