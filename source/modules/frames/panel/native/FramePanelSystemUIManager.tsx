// Module ID: 17050
// Function ID: 17051
// Dependencies: [19, 21, 17044, 17041, 2]

// Module 17050
import BaseActivityPanelSystemUIManager from "BaseActivityPanelSystemUIManager" /* 17041 */;
import contextDefault from "context" /* 17044 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const context = importAllResult.useContext(contextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(BaseActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
