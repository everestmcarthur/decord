// Module ID: 13111
// Function ID: 13112
// Dependencies: [13110]
// Exports: getTraceMetaTags

// Module 13111
import _mod13110 from "module_13110" /* 13110 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13110.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
