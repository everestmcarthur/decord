// Module ID: 4518
// Function ID: 4519
// Dependencies: [19, 4515]
// Exports: usePortalState

// Module 4518
import _mod19 from "module_19" /* 19 */;
import _mod4515 from "module_4515" /* 4515 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4515.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
