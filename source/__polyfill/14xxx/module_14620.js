// Module ID: 14620
// Function ID: 14621
// Dependencies: [19, 14618]
// Exports: default

// Module 14620
import _modDef14618 from "module_14618" /* 14618 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14618);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
