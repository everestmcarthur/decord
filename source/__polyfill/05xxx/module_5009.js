// Module ID: 5009
// Function ID: 5010
// Dependencies: [19, 4984]
// Exports: default

// Module 5009
import _modDef4984 from "module_4984" /* 4984 */;
import noop from "module_19" /* 19 */;


export default function useTransitionProgress() {
  const context = noop.useContext(_modDef4984);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
