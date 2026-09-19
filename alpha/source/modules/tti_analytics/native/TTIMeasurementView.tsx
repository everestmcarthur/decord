// Module ID: 12150
// Function ID: 12151
// Name: TTIMeasurementView
// Dependencies: [5177, 12151, 2]

// Module 12150 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12151 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5177 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
