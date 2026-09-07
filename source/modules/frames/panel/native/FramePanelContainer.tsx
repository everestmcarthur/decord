// Module ID: 17042
// Function ID: 17043
// Dependencies: [19, 9515, 9516, 21, 504, 17043, 17045, 2]

// Module 17042
import initialize from "initialize" /* 504 */;
import FramePanelControllerDefault from "FramePanelController" /* 17043 */;
import renderActivityOrPIPDefault from "renderActivityOrPIP" /* 17045 */;
import closure_3 from "map" /* 9515 */;
import { isLaunched } from "FrameLayoutModes" /* 9516 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function FramePanelContainer() {
  let obj = initialize;
  const items = [closure_3];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()))) {
    obj = { children: null };
    obj[0] = jsx(renderActivityOrPIPDefault, {});
    tmp2 = jsx(FramePanelControllerDefault, { children: null });
    const tmp5 = FramePanelControllerDefault;
  }
  return tmp2;
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
