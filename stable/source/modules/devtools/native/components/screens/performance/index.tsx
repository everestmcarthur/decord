// Module ID: 15731
// Function ID: 15732
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15732, 15733, 15734, 15735, 15736, 15737, 15738, 15739]

// Module 15731 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 15733 */;
import useMountTimerDefault from "useMountTimer" /* 15734 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15735 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15736 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15737 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15738 */;
import MountMeasureDefault from "MountMeasure" /* 15739 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("types")) {
  arg5[key10018] = require("types")[key10018];
  continue;
}

export const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
export const startFrameMonitor = startFrameMonitor.startFrameMonitor;
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;
