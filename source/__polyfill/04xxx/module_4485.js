// Module ID: 4485
// Function ID: 4486
// Dependencies: [19, 4482]
// Exports: usePortalState

// Module 4485
import _mod19 from "module_19" /* 19 */;
import _mod4482 from "module_4482" /* 4482 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4482.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
