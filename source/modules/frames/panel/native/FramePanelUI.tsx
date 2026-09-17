// Module ID: 17287
// Function ID: 17288
// Name: FramePanelUI
// Dependencies: [19, 21, 17288, 17289, 17292, 17261, 17286, 2]
// Exports: default

// Module 17287 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17261 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17286 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17292 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17288;
  } else {
    tmp4 = 17289;
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
