// Module ID: 12244
// Function ID: 12245
// Name: CommandListSortButton
// Dependencies: [19, 17, 12230, 1182, 21, 4607, 576, 1114, 5175, 4574, 12245, 1896, 4603, 11250, 2]
// Exports: default

// Module 12244 (CommandListSortButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const CommandListSortOrder = fn(12230).CommandListSortOrder;
const ANDROID_FOREGROUND_RIPPLE = fn(1182).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4607);
let obj2 = { container: { overflow: "hidden", borderRadius: nativeDefault.radii.xxl }, button: null };
const obj3 = { overflow: "hidden", borderRadius: nativeDefault.radii.xxl };
obj2.button = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

export default function CommandListSortButton(sortOrder) {
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = closure_8();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1114).intl;
    let stringResult = intl2.string(sortOrder(1114).t.SzxiqK);
  } else if (tmp2.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1114).intl;
    stringResult = intl.string(sortOrder(1114).t.m8xsti);
  }
  const obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12245, dependencyMap.paths), "CommandListSortActionSheet", {
        sortOrder,
        onSortOptionPress,
        onClose() {
          onSortOptionPress(closure_1_2[9]).hideActionSheet("CommandListSortActionSheet");
        }
      });
    },
    children: null
  };
  const obj2 = { style: tmp.button, children: null };
  const items = [closure_6(sortOrder(4603).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }), closure_6(sortOrder(11250).ChevronSmallDownIcon, { size: "xs", color: onSortOptionPress(576).colors.TEXT_DEFAULT })];
  obj2.children = items;
  obj.children = closure_7(View, obj2);
  return closure_6(sortOrder(5175).PressableOpacity, obj);
};
