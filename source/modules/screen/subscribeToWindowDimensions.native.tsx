// Module ID: 12127
// Function ID: 12128
// Name: subscribeToWindowDimensions
// Dependencies: [1478, 2]
// Exports: default

// Module 12127 (subscribeToWindowDimensions)
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
