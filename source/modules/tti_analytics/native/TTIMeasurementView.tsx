// Module ID: 11968
// Function ID: 11969
// Name: TTIMeasurementView
// Dependencies: [5018, 11969, 2]

// Module 11968 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11969 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5018 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
