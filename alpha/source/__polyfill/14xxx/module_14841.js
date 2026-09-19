// Module ID: 14841
// Function ID: 14842
// Dependencies: [19, 14839]
// Exports: default

// Module 14841
import _modDef14839 from "module_14839" /* 14839 */;
import noop from "module_19" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = noop.useContext(_modDef14839);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
