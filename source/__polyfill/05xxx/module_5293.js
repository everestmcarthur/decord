// Module ID: 5293
// Function ID: 5294
// Dependencies: [5290]

// Module 5293
import _mod5290 from "module_5290" /* 5290 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5290.getStringValue(value);
  }
};

export default obj;
