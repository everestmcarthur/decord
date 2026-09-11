// Module ID: 17121
// Function ID: 17122
// Name: FramePanelContainer
// Dependencies: [19, 9601, 9602, 21, 504, 17122, 17124, 2]

// Module 17121 (FramePanelContainer)
import FramePanelControllerDefault from "FramePanelController" /* 17122 */;
import FramePanelUIDefault from "FramePanelUI" /* 17124 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9601 */;

const require = fn;
const isLaunched = fn(9602).isLaunched;
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
