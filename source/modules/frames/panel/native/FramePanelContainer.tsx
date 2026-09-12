// Module ID: 17148
// Function ID: 17149
// Name: FramePanelContainer
// Dependencies: [19, 9640, 9641, 21, 504, 17149, 17151, 2]

// Module 17148 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17149 */;
import FramePanelUIDefault from "FramePanelUI" /* 17151 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9640 */;

const require = fn;
const isLaunched = fn(9641).isLaunched;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(function FramePanelContainer() {
  const items = [FramesStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: jsx(FramePanelUIDefault, {}) };
    tmp2 = jsx(FramePanelControllerDefault, { children: jsx(FramePanelUIDefault, {}) });
  }
  return tmp2;
});
