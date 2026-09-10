// Module ID: 17073
// Function ID: 17074
// Name: FramePanelContainer
// Dependencies: [19, 9542, 9543, 21, 504, 17074, 17076, 2]

// Module 17073 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17074 */;
import FramePanelUIDefault from "FramePanelUI" /* 17076 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9542 */;

const require = fn;
const isLaunched = fn(9543).isLaunched;
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
