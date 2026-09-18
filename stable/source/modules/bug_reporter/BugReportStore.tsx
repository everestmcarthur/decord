// Module ID: 10189
// Function ID: 10190
// Name: BugReportStore
// Dependencies: [4429, 2]

// Module 10189 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4429 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
