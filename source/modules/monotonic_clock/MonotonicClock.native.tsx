// Module ID: 7478
// Function ID: 7479
// Name: MonotonicClock
// Dependencies: [1354, 2]
// Exports: monotonicNowMs

// Module 7478 (MonotonicClock)
import clock from "clock" /* 1354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/monotonic_clock/MonotonicClock.native.tsx");

export const monotonicNowMs = function monotonicNowMs() {
  let monotonicNowMsResult = clock.monotonicNowMs();
  if (monotonicNowMsResult == null) {
    const _performance = performance;
    monotonicNowMsResult = performance.now();
  }
  return monotonicNowMsResult;
};
