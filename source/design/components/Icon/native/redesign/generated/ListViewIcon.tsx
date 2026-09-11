// Module ID: 7167
// Function ID: 7168
// Name: ListViewIcon
// Dependencies: [19, 21, 576, 4307, 7168, 2]
// Exports: ListViewIcon

// Module 7167 (ListViewIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod7168 from "module_7168" /* 7168 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ListViewIcon.tsx");

export const ListViewIcon = function ListViewIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod7168, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
