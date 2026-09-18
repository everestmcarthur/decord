// Module ID: 12038
// Function ID: 12039
// Name: subscribeToWindowDimensions
// Dependencies: [1478, 2]
// Exports: default

// Module 12038 (subscribeToWindowDimensions)
import DimensionsStore from "DimensionsStore" /* 1478 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  closure_0 = arg0;
  if (arg1 === undefined) {
    const str = "main";
  }
  return DimensionsStore.subscribe((arg0) => {
    closure_0(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};
