// Module ID: 5001
// Function ID: 5002
// Name: ScreenContentWrapper
// Dependencies: [19, 21, 5002]
// Exports: default

// Module 5001 (ScreenContentWrapper)
import _modDef5002 from "module_5002" /* 5002 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;

export default function ScreenContentWrapper(arg0) {
  const merged = Object.assign(arg0);
  return jsx(_modDef5002, { collapsable: false });
};
