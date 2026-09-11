// Module ID: 11991
// Function ID: 11992
// Name: TTIMeasurementView
// Dependencies: [5019, 11992, 2]

// Module 11991 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11992 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5019 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
