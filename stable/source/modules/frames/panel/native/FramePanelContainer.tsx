// Module ID: 17042
// Function ID: 17043
// Name: FramePanelContainer
// Dependencies: [19, 9516, 9517, 21, 504, 17043, 17045, 2]

// Module 17042 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17043 */;
import FramePanelUIDefault from "FramePanelUI" /* 17045 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9516 */;

const require = fn;
const isLaunched = fn(9517).isLaunched;
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
