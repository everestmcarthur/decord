// Module ID: 12032
// Function ID: 12033
// Name: TTIMeasurementView
// Dependencies: [5052, 12033, 2]

// Module 12032 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12033 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5052 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
