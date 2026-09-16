// Module ID: 17252
// Function ID: 17253
// Name: FramePanelSystemUIManager
// Dependencies: [19, 21, 17246, 17243, 2]

// Module 17252 (FramePanelSystemUIManager)
import ActivityPanelSystemUIManager from "ActivityPanelSystemUIManager" /* 17243 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17246 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default noop.memo(() => {
  const context = noop.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
