// Module ID: 9217
// Function ID: 9218
// Name: MicrophoneDenyIcon
// Dependencies: [19, 21, 576, 4307, 9218, 2]
// Exports: MicrophoneDenyIcon

// Module 9217 (MicrophoneDenyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod9218 from "module_9218" /* 9218 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MicrophoneDenyIcon.tsx");

export const MicrophoneDenyIcon = function MicrophoneDenyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9218, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
