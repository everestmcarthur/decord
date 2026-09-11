// Module ID: 9165
// Function ID: 9166
// Name: DoorExitIcon
// Dependencies: [19, 21, 576, 4307, 9166, 2]
// Exports: DoorExitIcon

// Module 9165 (DoorExitIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod9166 from "module_9166" /* 9166 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/DoorExitIcon.tsx");

export const DoorExitIcon = function DoorExitIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9166, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
