// Module ID: 11928
// Function ID: 11929
// Name: TTIMeasurementView
// Dependencies: [4982, 11929, 2]

// Module 11928 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11929 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 4982 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
