// Module ID: 5273
// Function ID: 5274
// Dependencies: [5274]

// Module 5273
import findOffsets from "findOffsets" /* 5274 */;

require = arg1;
const dependencyMap = arg6;

export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = findOffsets.parseBox(getUint32, 0);
        if (parseBoxResult) {
          const items = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
          parseBoxResult = -1 !== items.indexOf(parseBoxResult.majorBrand);
        }
        return parseBoxResult;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  },
  findHeicOffsets(byteLength) {
    return findOffsets.findOffsets(byteLength);
  }
};
