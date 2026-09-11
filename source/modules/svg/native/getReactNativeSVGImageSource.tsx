// Module ID: 13124
// Function ID: 13125
// Name: getReactNativeSVGImageSource
// Dependencies: [1115, 2]
// Exports: default

// Module 13124 (getReactNativeSVGImageSource)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/svg/native/getReactNativeSVGImageSource.tsx");

export default function getReactNativeSVGImageSource(arg0) {
  let first = arg0;
  if (obj.isAndroid()) {
    const _Array = Array;
    first = arg0;
    if (Array.isArray(arg0)) {
      first = arg0[0];
    }
  }
  return first;
};
