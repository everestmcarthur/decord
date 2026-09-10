// Module ID: 10216
// Function ID: 10217
// Name: BugReportStore
// Dependencies: [4443, 2]

// Module 10216 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4443 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
