// Module ID: 12873
// Function ID: 12874
// Name: getTraceMetaTags
// Dependencies: [12872]

// Module 12873 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 12872 */;

require = arg1;
const dependencyMap = arg6;
arg5.getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(getTraceData.getTraceData());
  const mapped = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};
