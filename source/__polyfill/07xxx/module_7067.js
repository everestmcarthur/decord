// Module ID: 7067
// Function ID: 7068
// Dependencies: [7065]
// Exports: getInvertedTransformStyle

// Module 7067
import PlatformConfig2 from "PlatformConfig" /* 7065 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
