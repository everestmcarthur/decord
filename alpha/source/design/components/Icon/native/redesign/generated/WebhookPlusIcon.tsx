// Module ID: 17301
// Function ID: 17302
// Name: WebhookPlusIcon
// Dependencies: [19, 21, 576, 4456, 17302, 2]
// Exports: WebhookPlusIcon

// Module 17301 (WebhookPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4456 */;
import _mod17302 from "module_17302" /* 17302 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/WebhookPlusIcon.tsx");

export const WebhookPlusIcon = function WebhookPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17302, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
