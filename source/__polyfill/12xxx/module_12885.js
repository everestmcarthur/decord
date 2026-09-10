// Module ID: 12885
// Function ID: 12886
// Dependencies: [12841, 12871]
// Exports: createClientReportEnvelope

// Module 12885
import _mod12841 from "module_12841" /* 12841 */;
import _mod12871 from "module_12871" /* 12871 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod12841.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12871.createEnvelope(obj4, items1);
};
