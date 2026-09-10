// Module ID: 4961
// Function ID: 4962
// Dependencies: [19, 4940]
// Exports: default

// Module 4961
import _modDef4940 from "module_4940" /* 4940 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef4940);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
