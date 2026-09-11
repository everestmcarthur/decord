// Module ID: 14622
// Function ID: 14623
// Dependencies: [19, 14620]
// Exports: default

// Module 14622
import _modDef14620 from "module_14620" /* 14620 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14620);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
