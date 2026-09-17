// Module ID: 12049
// Function ID: 12050
// Name: TTIMeasurementView
// Dependencies: [5053, 12050, 2]

// Module 12049 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12050 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5053 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
