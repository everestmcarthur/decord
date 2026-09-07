// Module ID: 15965
// Function ID: 15966
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15950, 15946, 5630, 2]
// Exports: default

// Module 15965 (useAuthFlowBackHandler)
import closure_2 from "noop" /* 19 */;
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes" /* 15950 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(_require(15946).TrackRegistrationContext);
  _require(5630).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};
