// Module ID: 15795
// Function ID: 15796
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15796, 15797, 15798, 15799, 15800, 15801, 15802, 15803]

// Module 15795 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 15797 */;
import useMountTimerDefault from "useMountTimer" /* 15798 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15799 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15800 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15801 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15802 */;
import MountMeasureDefault from "MountMeasure" /* 15803 */;
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
