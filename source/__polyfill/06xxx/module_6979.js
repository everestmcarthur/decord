// Module ID: 6979
// Function ID: 6980
// Dependencies: [6977]
// Exports: getInvertedTransformStyle

// Module 6979
import PlatformConfig2 from "PlatformConfig" /* 6977 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
