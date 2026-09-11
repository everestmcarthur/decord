// Module ID: 17047
// Function ID: 17048
// Name: updateVisualRefresh
// Dependencies: [17, 1115, 14494, 2]
// Exports: updateVisualRefresh

// Module 17047 (updateVisualRefresh)
import _mod17 from "module_17" /* 17 */;
import NativeThemeModuleDefault from "NativeThemeModule" /* 14494 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  if (obj.isAndroid()) {
    let result = NativeThemeModuleDefault.setVisualRefreshEnabled(arg0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(arg0);
  }
  return result;
};
