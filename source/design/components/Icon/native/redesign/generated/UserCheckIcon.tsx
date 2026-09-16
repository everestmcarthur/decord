// Module ID: 13208
// Function ID: 13209
// Name: UserCheckIcon
// Dependencies: [19, 21, 576, 4338, 8192, 2]
// Exports: UserCheckIcon

// Module 13208 (UserCheckIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4338 */;
import _mod8192 from "module_8192" /* 8192 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/UserCheckIcon.tsx");

export const UserCheckIcon = function UserCheckIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8192, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
