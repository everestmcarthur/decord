// Module ID: 10399
// Function ID: 10400
// Name: openExpressionPickerActionSheet
// Dependencies: [4603, 10400, 1896, 2]
// Exports: openExpressionPickerActionSheet

// Module 10399 (openExpressionPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10400, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
