// Module ID: 17417
// Function ID: 17418
// Name: FramePanelUI
// Dependencies: [19, 21, 17418, 17419, 17422, 17391, 17416, 2]
// Exports: default

// Module 17417 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17391 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17416 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17422 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17418;
  } else {
    tmp4 = 17419;
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
