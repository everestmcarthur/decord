// Module ID: 11993
// Function ID: 11994
// Name: TTIMeasurementView
// Dependencies: [5020, 11994, 2]

// Module 11993 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11994 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5020 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
