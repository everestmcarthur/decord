// Module ID: 12040
// Function ID: 12041
// Name: TTIMeasurementView
// Dependencies: [5051, 12041, 2]

// Module 12040 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12041 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5051 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
