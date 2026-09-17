// Module ID: 13020
// Function ID: 13021
// Dependencies: [13019]
// Exports: getTraceMetaTags

// Module 13020
import _mod13019 from "module_13019" /* 13019 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13019.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
