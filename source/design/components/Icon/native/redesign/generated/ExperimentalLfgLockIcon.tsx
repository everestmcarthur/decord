// Module ID: 5136
// Function ID: 5137
// Name: ExperimentalLfgLockIcon
// Dependencies: [19, 21, 576, 4307, 5116, 2]
// Exports: ExperimentalLfgLockIcon

// Module 5136 (ExperimentalLfgLockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod5116 from "module_5116" /* 5116 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalLfgLockIcon.tsx");

export const ExperimentalLfgLockIcon = function ExperimentalLfgLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5116, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
