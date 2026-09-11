// Module ID: 17124
// Function ID: 17125
// Name: FramePanelUI
// Dependencies: [19, 21, 17125, 17126, 17129, 17098, 17123, 2]
// Exports: default

// Module 17124 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17098 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17123 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17129 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17125;
  } else {
    tmp4 = 17126;
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
