// Module ID: 16036
// Function ID: 16037
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16037, 16038, 16039, 16040, 16041, 16042, 16043, 16044]

// Module 16036 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 16038 */;
import useMountTimerDefault from "useMountTimer" /* 16039 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16040 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16041 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16042 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16043 */;
import MountMeasureDefault from "MountMeasure" /* 16044 */;
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
