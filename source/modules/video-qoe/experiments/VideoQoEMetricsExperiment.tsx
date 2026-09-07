// Module ID: 15146
// Function ID: 15147
// Name: getVideoQoEMetricsConfig
// Dependencies: [1433, 2]
// Exports: getVideoQoEMetricsConfig

// Module 15146 (getVideoQoEMetricsConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } });
const result = set.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};
