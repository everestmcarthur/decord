// Module ID: 10362
// Function ID: 10363
// Name: openExpressionPickerActionSheet
// Dependencies: [4574, 10363, 1896, 2]
// Exports: openExpressionPickerActionSheet

// Module 10362 (openExpressionPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10363, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
