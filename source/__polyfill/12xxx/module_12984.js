// Module ID: 12984
// Function ID: 12985
// Dependencies: [12940, 12970]
// Exports: createClientReportEnvelope

// Module 12984
import _mod12940 from "module_12940" /* 12940 */;
import _mod12970 from "module_12970" /* 12970 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod12940.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12970.createEnvelope(obj4, items1);
};
