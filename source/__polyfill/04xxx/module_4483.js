// Module ID: 4483
// Function ID: 4484
// Dependencies: [19, 4480]
// Exports: usePortalState

// Module 4483
import _mod19 from "module_19" /* 19 */;
import _mod4480 from "module_4480" /* 4480 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4480.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
