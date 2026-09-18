// Module ID: 9481
// Function ID: 9482
// Name: useIsSocialLayerParentApplication
// Dependencies: [19, 1074, 9095, 2]
// Exports: default, getIsSocialLayerParentApplication

// Module 9481 (useIsSocialLayerParentApplication)
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9095 */;
import noop from "module_19" /* 19 */;

require = fn;
const ApplicationFlags = fn(1074).ApplicationFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => ApplicationFlagUtils.hasApplicationFlag(closure_0, ApplicationFlags.PARENT), items);
};
export const getIsSocialLayerParentApplication = function getIsSocialLayerParentApplication(application) {
  return ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.PARENT);
};
