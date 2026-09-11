// Module ID: 13890
// Function ID: 13891
// Name: OverlaySupported
// Dependencies: [1115, 2]

// Module 13890 (OverlaySupported)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

let flag = PlatformUtils.isPlatformEmbedded;
if (flag) {
  const _module = PlatformUtils;
  flag = _module.isWindows() || false;
  const tmp2 = _module.isWindows() || false;
}
if (flag) {
  flag = false;
}
const result = size.fileFinishedImporting("modules/overlay/OverlaySupported.tsx");

export const IS_OVERLAY_DEV_ENV = false;
export const OVERLAY_SUPPORTED = flag;
