// Module ID: 12859
// Function ID: 12860
// Dependencies: [12815, 12845]
// Exports: createClientReportEnvelope

// Module 12859
import _mod12815 from "module_12815" /* 12815 */;
import _mod12845 from "module_12845" /* 12845 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod12815.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12845.createEnvelope(obj4, items1);
};
