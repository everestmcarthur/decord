// Module ID: 17122
// Function ID: 17123
// Name: FramePanelContainer
// Dependencies: [19, 9603, 9604, 21, 504, 17123, 17125, 2]

// Module 17122 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17123 */;
import FramePanelUIDefault from "FramePanelUI" /* 17125 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9603 */;

const require = fn;
const isLaunched = fn(9604).isLaunched;
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
