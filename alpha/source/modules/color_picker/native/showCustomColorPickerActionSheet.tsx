// Module ID: 14865
// Function ID: 14866
// Name: showCustomColorPickerActionSheet
// Dependencies: [4723, 14866, 1980, 2]
// Exports: default

// Module 14865 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14866, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
