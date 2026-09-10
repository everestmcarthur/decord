// Module ID: 1338
// Function ID: 1339
// Name: getSystemLocale
// Dependencies: [17, 1117, 2]
// Exports: getSystemLocale

// Module 1338 (getSystemLocale)
import _mod17 from "module_17" /* 17 */;
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1117 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp3 = _mod17;
  if ("android" === tmp3.Platform.OS) {
    let LocalizationManager = NativeDeviceLocaleModule.default;
  } else {
    LocalizationManager = tmp3.NativeModules.LocalizationManager;
  }
  let str;
  if (null != LocalizationManager) {
    str = LocalizationManager.getConstants().Language;
  }
  if (str == null) {
    str = "";
  }
  return str;
};
