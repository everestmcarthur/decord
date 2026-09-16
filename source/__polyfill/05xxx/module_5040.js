// Module ID: 5040
// Function ID: 5041
// Dependencies: [19, 5015]
// Exports: default

// Module 5040
import _modDef5015 from "module_5015" /* 5015 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef5015);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
