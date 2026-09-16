// Module ID: 10410
// Function ID: 10411
// Name: openExpressionPickerActionSheet
// Dependencies: [4605, 10411, 1897, 2]
// Exports: openExpressionPickerActionSheet

// Module 10410 (openExpressionPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = size.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10411, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
