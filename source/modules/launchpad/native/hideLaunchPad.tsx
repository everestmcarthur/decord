// Module ID: 11099
// Function ID: 11100
// Name: hideLaunchPad
// Dependencies: [1074, 1109, 2]
// Exports: default

// Module 11099 (hideLaunchPad)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
