// Module ID: 1578
// Function ID: 1579
// Dependencies: [19, 1553]
// Exports: usePreventRemoveContext

// Module 1578
import PreventRemoveContext from "PreventRemoveContext" /* 1553 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = noop.useContext(PreventRemoveContext.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};
