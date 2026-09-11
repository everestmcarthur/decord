// Module ID: 5000
// Function ID: 5001
// Name: ScreenContentWrapper
// Dependencies: [19, 21, 5001]
// Exports: default

// Module 5000 (ScreenContentWrapper)
import _modDef5001 from "module_5001" /* 5001 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;

export default function ScreenContentWrapper(arg0) {
  const merged = Object.assign(arg0);
  return jsx(_modDef5001, { collapsable: false });
};
