// Module ID: 17662
// Function ID: 17663
// Name: ListBulletsIcon
// Dependencies: [19, 21, 576, 4337, 17663, 2]
// Exports: ListBulletsIcon

// Module 17662 (ListBulletsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod17663 from "module_17663" /* 17663 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ListBulletsIcon.tsx");

export const ListBulletsIcon = function ListBulletsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17663, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
