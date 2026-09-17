// Module ID: 16163
// Function ID: 16164
// Name: isJankScreenReportingEnabled
// Dependencies: [1364, 1984, 2]
// Exports: isJankScreenReportingEnabled

// Module 16163 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 1984 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export const isJankScreenReportingEnabled = function isJankScreenReportingEnabled() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    const AndroidJankPerScreenExperiment = libdiscoreExperiments.AndroidJankPerScreenExperiment;
    isAndroidResult = AndroidJankPerScreenExperiment.getCachedEnabled();
  }
  return isAndroidResult;
};
