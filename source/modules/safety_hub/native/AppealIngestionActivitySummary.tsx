// Module ID: 11894
// Function ID: 11895
// Name: AppealIngestionActivitySummary
// Dependencies: [19, 17, 21, 4560, 11895, 2]
// Exports: default

// Module 11894 (AppealIngestionActivitySummary)
import noopAll from "noop" /* 19 */;
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 11895 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

noopAll;
let closure_4 = createCacheKey.createStyles({ activity: { marginBottom: 16 } });
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent: arg0.flaggedContent })}</View>;
};
