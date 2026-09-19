// Module ID: 17467
// Function ID: 17468
// Name: ActivityPanelStateContext
// Dependencies: [19, 9314, 7314, 2]

// Module 17467 (ActivityPanelStateContext)
import noop from "module_19" /* 19 */;

const obj = {
  mode: fn(9314).ActivityPanelModes.PANEL,
  setMode() {
    const error = new Error("ActivityPanelStateContextType.Provider.setMode: not called within a context provider");
    throw error;
  },
  wrapperDimensions: { width: 9, height: 16, isLandscape: false, isWindowLandscape: false },
  pipState: null,
  pipAvoidanceSpecs: null,
  wrapperOffset: null,
  useActivityWebViewLock: null
};
let ReanimatedHelperTypes = fn(7314);
obj.pipState = ReanimatedHelperTypes.createFakeSharedValue({ x: -1, y: -1 });
ReanimatedHelperTypes = fn(7314);
obj.pipAvoidanceSpecs = ReanimatedHelperTypes.createFakeSharedValue({ top: 0, bottom: 0 });
ReanimatedHelperTypes = fn(7314);
obj.wrapperOffset = ReanimatedHelperTypes.createFakeSharedValue({ x: 0, y: 0, gestureActive: false });
obj.useActivityWebViewLock = function useActivityWebViewLock() {
  return true;
};
const context = noop.createContext(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelStateContext.tsx");

export default context;
export const activityPanelStateContextDefault = obj;
