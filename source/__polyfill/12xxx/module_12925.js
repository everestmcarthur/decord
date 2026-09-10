// Module ID: 12925
// Function ID: 12926
// Dependencies: [12881, 12911]
// Exports: createClientReportEnvelope

// Module 12925
import _mod12881 from "module_12881" /* 12881 */;
import _mod12911 from "module_12911" /* 12911 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod12881.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12911.createEnvelope(obj4, items1);
};
