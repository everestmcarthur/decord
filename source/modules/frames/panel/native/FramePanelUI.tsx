// Module ID: 17076
// Function ID: 17077
// Name: FramePanelUI
// Dependencies: [19, 21, 17077, 17078, 17081, 17050, 17075, 2]
// Exports: default

// Module 17076 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17050 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17075 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17081 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17077;
  } else {
    tmp4 = 17078;
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
