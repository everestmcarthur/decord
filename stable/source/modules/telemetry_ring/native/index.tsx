// Module ID: 1234
// Function ID: 1235
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1235, 1899, 14083, 14084, 1900, 1903]

// Module 1234 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1235 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1899 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1900 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1903 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 14083 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 14084 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;
