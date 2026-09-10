// Module ID: 14767
// Function ID: 14768
// Name: SettingLayout
// Dependencies: [19, 11541, 21, 14768, 14781, 2]

// Module 14767 (SettingLayout)
import SettingListRenderer from "SettingListRenderer" /* 14768 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 14781 */;
import noop from "module_19" /* 19 */;

require = fn;
const NodeType = fn(11541).NodeType;
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
