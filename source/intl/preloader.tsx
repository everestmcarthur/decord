// Module ID: 2038
// Function ID: 2039
// Name: preloader
// Dependencies: [5, 1115, 1897, 2039, 2071, 2103, 2135, 2167, 2169, 2171, 2203, 2235, 2267, 2299, 2331, 2333, 2365, 2397, 2429, 2461, 2493, 2495, 2497, 2529, 2531, 2563, 2595, 2627, 2659, 2691, 2723, 2755, 2787, 2819, 2851, 2883, 2915, 2947, 2949, 2981, 3013, 3045, 3077, 3109, 3141, 3143, 3175, 3207, 3239, 3271, 3303, 3335, 3367, 3399, 3431, 3463, 3495, 3527, 3529, 3561, 3593, 3595, 3627, 3659, 3691, 2]
// Exports: preloadAllIntlMessageFiles

// Module 2038 (preloader)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _preloadAllIntlMessageFiles(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const items = [asyncRequireImpl(dependencyMap[1], dependencyMap.paths), asyncRequireImpl(dependencyMap[3], dependencyMap.paths), asyncRequireImpl(dependencyMap[4], dependencyMap.paths), asyncRequireImpl(dependencyMap[5], dependencyMap.paths), asyncRequireImpl(dependencyMap[6], dependencyMap.paths), asyncRequireImpl(dependencyMap[7], dependencyMap.paths), asyncRequireImpl(dependencyMap[8], dependencyMap.paths), asyncRequireImpl(dependencyMap[9], dependencyMap.paths), asyncRequireImpl(dependencyMap[10], dependencyMap.paths), asyncRequireImpl(dependencyMap[11], dependencyMap.paths), asyncRequireImpl(dependencyMap[12], dependencyMap.paths), asyncRequireImpl(dependencyMap[13], dependencyMap.paths), asyncRequireImpl(dependencyMap[14], dependencyMap.paths), asyncRequireImpl(dependencyMap[15], dependencyMap.paths), asyncRequireImpl(dependencyMap[16], dependencyMap.paths), asyncRequireImpl(dependencyMap[17], dependencyMap.paths), asyncRequireImpl(dependencyMap[18], dependencyMap.paths), asyncRequireImpl(dependencyMap[19], dependencyMap.paths), asyncRequireImpl(dependencyMap[20], dependencyMap.paths), asyncRequireImpl(dependencyMap[21], dependencyMap.paths), asyncRequireImpl(dependencyMap[22], dependencyMap.paths), asyncRequireImpl(dependencyMap[23], dependencyMap.paths), asyncRequireImpl(dependencyMap[24], dependencyMap.paths), asyncRequireImpl(dependencyMap[25], dependencyMap.paths), asyncRequireImpl(dependencyMap[26], dependencyMap.paths), asyncRequireImpl(dependencyMap[27], dependencyMap.paths), asyncRequireImpl(dependencyMap[28], dependencyMap.paths), asyncRequireImpl(dependencyMap[29], dependencyMap.paths), asyncRequireImpl(dependencyMap[30], dependencyMap.paths), asyncRequireImpl(dependencyMap[31], dependencyMap.paths), asyncRequireImpl(dependencyMap[32], dependencyMap.paths), asyncRequireImpl(dependencyMap[33], dependencyMap.paths), asyncRequireImpl(dependencyMap[34], dependencyMap.paths), asyncRequireImpl(dependencyMap[35], dependencyMap.paths), asyncRequireImpl(dependencyMap[36], dependencyMap.paths), asyncRequireImpl(dependencyMap[37], dependencyMap.paths), asyncRequireImpl(dependencyMap[38], dependencyMap.paths), asyncRequireImpl(dependencyMap[39], dependencyMap.paths), asyncRequireImpl(dependencyMap[40], dependencyMap.paths), asyncRequireImpl(dependencyMap[41], dependencyMap.paths), asyncRequireImpl(dependencyMap[42], dependencyMap.paths), asyncRequireImpl(dependencyMap[43], dependencyMap.paths), asyncRequireImpl(dependencyMap[44], dependencyMap.paths), asyncRequireImpl(dependencyMap[45], dependencyMap.paths), asyncRequireImpl(dependencyMap[46], dependencyMap.paths), asyncRequireImpl(dependencyMap[47], dependencyMap.paths), asyncRequireImpl(dependencyMap[48], dependencyMap.paths), asyncRequireImpl(dependencyMap[49], dependencyMap.paths), asyncRequireImpl(dependencyMap[50], dependencyMap.paths), asyncRequireImpl(dependencyMap[51], dependencyMap.paths), asyncRequireImpl(dependencyMap[52], dependencyMap.paths), asyncRequireImpl(dependencyMap[53], dependencyMap.paths), asyncRequireImpl(dependencyMap[54], dependencyMap.paths), asyncRequireImpl(dependencyMap[55], dependencyMap.paths), asyncRequireImpl(dependencyMap[56], dependencyMap.paths), asyncRequireImpl(dependencyMap[57], dependencyMap.paths), asyncRequireImpl(dependencyMap[58], dependencyMap.paths), asyncRequireImpl(dependencyMap[59], dependencyMap.paths), asyncRequireImpl(dependencyMap[60], dependencyMap.paths), asyncRequireImpl(dependencyMap[61], dependencyMap.paths), asyncRequireImpl(dependencyMap[62], dependencyMap.paths), asyncRequireImpl(dependencyMap[63], dependencyMap.paths), asyncRequireImpl(dependencyMap[64], dependencyMap.paths)];
        c0 = 3;
        const obj = { value: Promise.all(items), done: true };
        return obj;
      }
    } catch (tmp4) {
      c0 = tmp;
      throw tmp4;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("intl/preloader.tsx");

export const preloadAllIntlMessageFiles = function preloadAllIntlMessageFiles() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
