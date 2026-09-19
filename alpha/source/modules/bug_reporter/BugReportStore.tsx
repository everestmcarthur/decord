// Module ID: 10440
// Function ID: 10441
// Name: BugReportStore
// Dependencies: [4626, 2]

// Module 10440 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4626 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
