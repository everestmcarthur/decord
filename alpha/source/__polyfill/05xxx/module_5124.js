// Module ID: 5124
// Function ID: 5125
// Dependencies: [19, 5099]
// Exports: default

// Module 5124
import _modDef5099 from "module_5099" /* 5099 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5099);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
