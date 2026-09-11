// Module ID: 16523
// Function ID: 16524
// Name: createICYMIStyles
// Dependencies: [19, 4606, 16524, 2]
// Exports: createICYMIStyles

// Module 16523 (createICYMIStyles)
import ICYMIContext from "ICYMIContext" /* 16524 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(rect) {
  _require = require("createStyles").createStyles(rect);
  return () => {
    const items = [...arguments];
    const useContext = noop.useContext;
    const items1 = [useContext(ICYMIContext.ICYMIContext), ...items];
    return closure_0(...items);
  };
};
