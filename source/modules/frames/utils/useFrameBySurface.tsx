// Module ID: 16617
// Function ID: 16618
// Name: useFrameBySurface
// Dependencies: [9515, 504, 2]
// Exports: default

// Module 16617 (useFrameBySurface)
import closure_2 from "map" /* 9515 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default function useFrameBySurface(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return _require(504).useStateFromStores(items, () => {
    if (null != closure_0) {
      return closure_1_2.getFrameBySurface(tmp, closure_1);
    }
  }, items1);
};
