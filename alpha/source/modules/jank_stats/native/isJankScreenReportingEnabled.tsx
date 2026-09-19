// Module ID: 16336
// Function ID: 16337
// Name: isJankScreenReportingEnabled
// Dependencies: [1364, 2067, 2]
// Exports: isJankScreenReportingEnabled

// Module 16336 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 2067 */;
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
