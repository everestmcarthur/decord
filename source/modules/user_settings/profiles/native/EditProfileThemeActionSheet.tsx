// Module ID: 14677
// Function ID: 14678
// Name: EditProfileThemeActionSheet
// Dependencies: [19, 21, 4606, 576, 7270, 7222, 1114, 1178, 5738, 5656, 4573, 2]
// Exports: default

// Module 14677 (EditProfileThemeActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4606);
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
  const items = [closure_3(onResetTheme(7222).BottomSheetTitleHeader, obj3), ];
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
  obj5.children = closure_3(onResetTheme(5656).TableRow, obj9);
  items[1] = closure_3(onResetTheme(5738).TableRowGroup, obj5);
  obj.children = items;
  return closure_4(onResetTheme(7270).ActionSheet, obj);
};
