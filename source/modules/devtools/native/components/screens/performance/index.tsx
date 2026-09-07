// Module ID: 15731
// Function ID: 15732
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15732, 15733, 15734, 15735, 15736, 15737, 15738, 15739]

// Module 15731 (FRAME_BUDGET_MS)
import set from "set" /* 2 */;
import FRAME_BUDGET_MS from "FRAME_BUDGET_MS" /* 15733 */;
import useMountTimerDefault from "useMountTimer" /* 15734 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15735 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15736 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15737 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15738 */;
import MountMeasureDefault from "MountMeasure" /* 15739 */;

const result = set.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("set")) {
  let tmp3 = key10018;
  arg5[key10018] = require("set")[key10018];
  continue;
}

export const FRAME_BUDGET_MS = FRAME_BUDGET_MS.FRAME_BUDGET_MS;
export const startFrameMonitor = FRAME_BUDGET_MS.startFrameMonitor;
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;
