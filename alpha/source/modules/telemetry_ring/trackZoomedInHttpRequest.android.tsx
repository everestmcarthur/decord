// Module ID: 17615
// Function ID: 17616
// Name: trackZoomedInHttpRequest
// Dependencies: [1074, 1900, 2]
// Exports: default

// Module 17615 (trackZoomedInHttpRequest)
import Constants from "Constants" /* 1074 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1900 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.source = "zoomed_in";
    ZoomedInTelemetryDefault.append(AnalyticEvents.HTTP_REQUEST, obj2);
  } catch (err) {
  }
};
