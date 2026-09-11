// Module ID: 15220
// Function ID: 15221
// Name: QuestBottomSheetTaskSelect
// Dependencies: [19, 5496, 21, 5739, 5657, 8971, 1114, 9315, 2]
// Exports: default

// Module 15220 (QuestBottomSheetTaskSelect)
import noop from "module_19" /* 19 */;

const require = fn;
const QuestTaskPlatform = fn(5496).QuestTaskPlatform;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  const obj = { hasIcons: true, children: null };
  const obj2 = { arrow: true, icon: closure_3(onTaskSelect(8971).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1114).intl;
  obj2.label = intl.string(onTaskSelect(1114).t["QXc01+"]);
  obj2.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.DESKTOP);
    }
    return tmpResult;
  };
  const items = [closure_3(onTaskSelect(5657).TableRow, obj2), ];
  const obj3 = { arrow: true, icon: closure_3(onTaskSelect(9315).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1114).intl;
  obj3.label = intl2.string(onTaskSelect(1114).t["8lAfuB"]);
  obj3.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = closure_3(onTaskSelect(5657).TableRow, obj3);
  obj.children = items;
  return closure_4(onTaskSelect(5739).TableRowGroup, obj);
};
