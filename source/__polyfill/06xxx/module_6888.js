// Module ID: 6888
// Function ID: 6889
// Dependencies: [6886]
// Exports: getInvertedTransformStyle

// Module 6888
import PlatformConfig2 from "PlatformConfig" /* 6886 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
