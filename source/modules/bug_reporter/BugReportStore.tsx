// Module ID: 10314
// Function ID: 10315
// Name: BugReportStore
// Dependencies: [4509, 2]

// Module 10314 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4509 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
