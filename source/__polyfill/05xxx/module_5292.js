// Module ID: 5292
// Function ID: 5293
// Dependencies: [5290]

// Module 5292
import _mod5290 from "module_5290" /* 5290 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5290.getStringValue(value);
  }
};

export default obj;
