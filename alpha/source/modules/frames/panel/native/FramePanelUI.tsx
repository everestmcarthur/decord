// Module ID: 17494
// Function ID: 17495
// Name: FramePanelUI
// Dependencies: [19, 21, 17495, 17496, 17499, 17468, 17493, 2]
// Exports: default

// Module 17494 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17468 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17493 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17499 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17495;
  } else {
    tmp4 = 17496;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const renderActivityPanelSystemUIManager = noop.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(() => jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager }), items);
};
