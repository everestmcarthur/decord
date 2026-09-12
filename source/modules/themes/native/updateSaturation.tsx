// Module ID: 14526
// Function ID: 14527
// Name: updateSaturation
// Dependencies: [17, 1150, 14527, 2]
// Exports: updateSaturation

// Module 14526 (updateSaturation)
import _mod17 from "module_17" /* 17 */;
import NativeThemeModuleDefault from "NativeThemeModule" /* 14527 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = NativeThemeModuleDefault.updateSaturation(saturation);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
