// Module ID: 12950
// Function ID: 12951
// Dependencies: [12906, 12936]
// Exports: createClientReportEnvelope

// Module 12950
import _mod12906 from "module_12906" /* 12906 */;
import _mod12936 from "module_12936" /* 12936 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod12906.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12936.createEnvelope(obj4, items1);
};
