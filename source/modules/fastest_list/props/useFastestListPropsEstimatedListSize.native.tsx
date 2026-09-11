// Module ID: 7134
// Function ID: 7135
// Name: useFastestListPropsEstimatedListSize
// Dependencies: [32, 19, 1477, 2]
// Exports: default

// Module 7134 (useFastestListPropsEstimatedListSize)
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
  ({ estimatedListSize: require, horizontal: dependencyMap } = arg0);
  return _slicedToArray(noop.useState(() => {
    if ("windowSize" !== closure_1_0) {
      return closure_1_0;
    } else {
      const size = useWindowDimensions.getWindowDimensions();
    }
  }), 2)[0];
};
