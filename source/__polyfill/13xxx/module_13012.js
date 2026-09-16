// Module ID: 13012
// Function ID: 13013
// Dependencies: [13011]
// Exports: getTraceMetaTags

// Module 13012
import _mod13011 from "module_13011" /* 13011 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13011.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
