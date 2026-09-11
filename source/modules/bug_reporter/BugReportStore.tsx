// Module ID: 10275
// Function ID: 10276
// Name: BugReportStore
// Dependencies: [4476, 2]

// Module 10275 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4476 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
