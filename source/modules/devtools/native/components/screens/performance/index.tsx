// Module ID: 15761
// Function ID: 15762
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15762, 15763, 15764, 15765, 15766, 15767, 15768, 15769]

// Module 15761 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 15763 */;
import useMountTimerDefault from "useMountTimer" /* 15764 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15765 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15766 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15767 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15768 */;
import MountMeasureDefault from "MountMeasure" /* 15769 */;
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
