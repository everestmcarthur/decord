// Module ID: 12028
// Function ID: 12029
// Name: TTIMeasurementView
// Dependencies: [5049, 12029, 2]

// Module 12028 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12029 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5049 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
