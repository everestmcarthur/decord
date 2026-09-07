// Module ID: 9248
// Function ID: 9249
// Name: useIsSocialLayerParentApplication
// Dependencies: [19, 1074, 8861, 2]
// Exports: default, getIsSocialLayerParentApplication

// Module 9248 (useIsSocialLayerParentApplication)
import getApplicationFlags from "getApplicationFlags" /* 8861 */;
import closure_2 from "noop" /* 19 */;
import { ApplicationFlags } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => callback(closure_1_1[2]).hasApplicationFlag(callback, closure_1_3.PARENT), items);
};
export const getIsSocialLayerParentApplication = function getIsSocialLayerParentApplication(application) {
  return getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.PARENT);
};
