// Module ID: 17132
// Function ID: 17133
// Name: FramePanelContainer
// Dependencies: [19, 9580, 9581, 21, 504, 17133, 17135, 2]

// Module 17132 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17133 */;
import FramePanelUIDefault from "FramePanelUI" /* 17135 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9580 */;

const require = fn;
const isLaunched = fn(9581).isLaunched;
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
