// Module ID: 11902
// Function ID: 11903
// Name: TTIMeasurementView
// Dependencies: [4968, 11903, 2]

// Module 11902 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11903 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 4968 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
