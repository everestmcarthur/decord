// Module ID: 11312
// Function ID: 11313
// Name: useDefaultAppLauncherWidth
// Dependencies: [7225, 1477, 9502, 2]
// Exports: useDefaultAppLauncherWidth

// Module 11312 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7225 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9502 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
