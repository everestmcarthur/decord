// Module ID: 7092
// Function ID: 7093
// Dependencies: [7093]
// Exports: getDistanceForDirection

// Module 7092
import _mod7093 from "module_7093" /* 7093 */;

require = arg1;
const dependencyMap = arg6;

export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod7093.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
