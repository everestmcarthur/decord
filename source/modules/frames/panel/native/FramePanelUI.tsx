// Module ID: 17247
// Function ID: 17248
// Name: FramePanelUI
// Dependencies: [19, 21, 17248, 17249, 17252, 17221, 17246, 2]
// Exports: default

// Module 17247 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17221 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17246 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17252 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17248;
  } else {
    tmp4 = 17249;
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
