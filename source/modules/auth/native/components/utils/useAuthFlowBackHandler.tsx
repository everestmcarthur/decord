// Module ID: 16057
// Function ID: 16058
// Name: useAuthFlowBackHandler
// Dependencies: [19, 16042, 16038, 5711, 2]
// Exports: default

// Module 16057 (useAuthFlowBackHandler)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(16042).RegistrationTransitionActionTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(step) {
  _require = step;
  dependencyMap = noop.useContext(require("Auth").TrackRegistrationContext);
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    closure_1({ step, actionType: constants.VIEWED });
    return false;
  });
};
