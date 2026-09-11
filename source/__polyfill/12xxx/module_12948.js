// Module ID: 12948
// Function ID: 12949
// Dependencies: [12904, 12934]
// Exports: createClientReportEnvelope

// Module 12948
import _mod12904 from "module_12904" /* 12904 */;
import _mod12934 from "module_12934" /* 12934 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod12904.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12934.createEnvelope(obj4, items1);
};
