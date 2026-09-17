// Module ID: 10330
// Function ID: 10331
// Name: BugReportStore
// Dependencies: [4510, 2]

// Module 10330 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4510 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
