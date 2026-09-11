// Module ID: 14679
// Function ID: 14680
// Name: EditProfileThemeActionSheet
// Dependencies: [19, 21, 4607, 576, 7271, 7223, 1114, 1178, 5739, 5657, 4574, 2]
// Exports: default

// Module 14679 (EditProfileThemeActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4607);
const obj2 = { nitroWheel: null, titleWrapper: null, titleContainer: null };
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
obj2.nitroWheel = size;
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = closure_5();
  const obj = { children: null };
  const obj3 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = onResetTheme(1114).intl;
  obj3.title = intl.string(onResetTheme(1114).t.DMeO2X);
  obj3.trailing = closure_3(onResetTheme(1178).NitroWheel, { style: tmp.nitroWheel });
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  const items = [closure_3(onResetTheme(7223).BottomSheetTitleHeader, obj3), ];
  const obj5 = { hasIcons: false, children: null };
  const obj9 = { label: null, subLabel: null, onPress: null };
  const intl2 = onResetTheme(1114).intl;
  obj9.label = intl2.string(onResetTheme(1114).t["L+GmoR"]);
  const intl3 = onResetTheme(1114).intl;
  obj9.subLabel = intl3.string(onResetTheme(1114).t.MA9iNr);
  obj9.onPress = function onPress() {
    onResetTheme();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj5.children = closure_3(onResetTheme(5657).TableRow, obj9);
  items[1] = closure_3(onResetTheme(5739).TableRowGroup, obj5);
  obj.children = items;
  return closure_4(onResetTheme(7271).ActionSheet, obj);
};
