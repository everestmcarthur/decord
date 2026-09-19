// Module ID: 17499
// Function ID: 17500
// Name: FramePanelSystemUIManager
// Dependencies: [19, 21, 17493, 17490, 2]

// Module 17499 (FramePanelSystemUIManager)
import ActivityPanelSystemUIManager from "ActivityPanelSystemUIManager" /* 17490 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17493 */;
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
