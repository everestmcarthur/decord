// Module ID: 12999
// Function ID: 13000
// Dependencies: [12998]
// Exports: getTraceMetaTags

// Module 12999
import _mod12998 from "module_12998" /* 12998 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod12998.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
