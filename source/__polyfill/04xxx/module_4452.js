// Module ID: 4452
// Function ID: 4453
// Dependencies: [19, 4449]
// Exports: usePortalState

// Module 4452
import _mod19 from "module_19" /* 19 */;
import _mod4449 from "module_4449" /* 4449 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4449.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
