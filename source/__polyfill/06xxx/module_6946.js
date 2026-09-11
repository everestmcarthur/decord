// Module ID: 6946
// Function ID: 6947
// Dependencies: [6944]
// Exports: getInvertedTransformStyle

// Module 6946
import PlatformConfig2 from "PlatformConfig" /* 6944 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
