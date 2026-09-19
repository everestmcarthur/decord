// Module ID: 17491
// Function ID: 17492
// Name: FramePanelContainer
// Dependencies: [19, 9312, 9313, 21, 504, 17492, 17494, 2]

// Module 17491 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17492 */;
import FramePanelUIDefault from "FramePanelUI" /* 17494 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9312 */;

const require = fn;
const isLaunched = fn(9313).isLaunched;
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
