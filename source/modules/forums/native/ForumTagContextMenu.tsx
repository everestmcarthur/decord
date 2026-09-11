// Module ID: 10719
// Function ID: 10720
// Name: ForumTagContextMenu
// Dependencies: [21, 1935, 1114, 10720, 7263, 4304, 8759, 2]
// Exports: default

// Module 10719 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 4304 */;
import ClipboardUtils from "ClipboardUtils" /* 7263 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(1935).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1114).intl;
  obj.label = intl.string(tagId(1114).t["8VG6IY"]);
  obj.IconComponent = tagId(10720).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(8759).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
