// Module ID: 14692
// Function ID: 14693
// Dependencies: [19, 11474, 21, 14693, 14706, 2]

// Module 14692
import SearchListSectionLabel from "SearchListSectionLabel" /* 14693 */;
import SettingSegmentedControlDefault from "SettingSegmentedControl" /* 14706 */;
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 11474 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let obj = { node: null };
    obj[0] = node;
    return jsx(SearchListSectionLabel.SettingsList, { node: null });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    obj = { node: null };
    obj[0] = node;
    return jsx(SettingSegmentedControlDefault, { node: null });
  }
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
