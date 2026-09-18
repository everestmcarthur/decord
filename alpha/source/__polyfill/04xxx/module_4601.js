// Module ID: 4601
// Function ID: 4602
// Dependencies: [19, 4598]
// Exports: usePortalState

// Module 4601
import _mod19 from "module_19" /* 19 */;
import _mod4598 from "module_4598" /* 4598 */;

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4598.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
