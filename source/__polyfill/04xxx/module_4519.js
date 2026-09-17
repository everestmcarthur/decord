// Module ID: 4519
// Function ID: 4520
// Dependencies: [19, 4516]
// Exports: usePortalState

// Module 4519
import _mod19 from "module_19" /* 19 */;
import _mod4516 from "module_4516" /* 4516 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4516.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
