// Module ID: 1233
// Function ID: 1234
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1234, 1900, 14185, 14186, 1901, 1904]

// Module 1233 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1234 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1900 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1901 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1904 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 14185 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 14186 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;
