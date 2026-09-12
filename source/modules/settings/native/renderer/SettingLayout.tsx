// Module ID: 14775
// Function ID: 14776
// Name: SettingLayout
// Dependencies: [19, 11602, 21, 14776, 14789, 2]

// Module 14775 (SettingLayout)
import SettingListRenderer from "SettingListRenderer" /* 14776 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 14789 */;
import noop from "module_19" /* 19 */;

require = fn;
const NodeType = fn(11602).NodeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default noop.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    const obj2 = { node };
    return jsx(SettingListRenderer.SettingsList, { node });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    const obj = { node };
    return jsx(SettingSegmentedControlRendererDefault, { node });
  }
});
