// Module ID: 14650
// Function ID: 14651
// Name: showCustomColorPickerActionSheet
// Dependencies: [4574, 14651, 1896, 2]
// Exports: default

// Module 14650 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14651, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
