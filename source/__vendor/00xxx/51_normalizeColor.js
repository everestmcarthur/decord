// Module ID: 51
// Function ID: 52
// Name: normalizeColor
// Dependencies: [52, 53]
// Exports: default

// Module 51 (normalizeColor)
import PlatformColor from "PlatformColor" /* 52 */;
import hslToRgbDefault from "hslToRgb" /* 53 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default function normalizeColor(obj) {
  if (typeof obj === "object") {
    if (null != obj) {
      const normalizeColorObjectResult = PlatformColor.normalizeColorObject(obj);
      if (null != normalizeColorObjectResult) {
        return normalizeColorObjectResult;
      }
    }
  }
  return hslToRgbDefault(obj);
};
