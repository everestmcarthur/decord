// Module ID: 7044
// Function ID: 7045
// Dependencies: [17]
// Exports: getShadowStyle

// Module 7044
import _mod17 from "module_17" /* 17 */;

const Platform = _mod17.Platform;

export const getShadowStyle = function getShadowStyle(color) {
  let shadowColor = color.color;
  ({ offset, radius, opacity } = color);
  if (shadowColor === undefined) {
    shadowColor = "#000";
  }
  return { shadowOffset, shadowRadius, shadowColor, shadowOpacity };
};
