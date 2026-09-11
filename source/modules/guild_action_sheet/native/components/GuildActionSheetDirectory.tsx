// Module ID: 14019
// Function ID: 14020
// Name: GuildActionSheetDirectory
// Dependencies: [19, 17, 21, 4606, 576, 1611, 7223, 6698, 14020, 13963, 2]
// Exports: default

// Module 14019 (GuildActionSheetDirectory)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import BottomSheetModal from "BottomSheetModal" /* 6698 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7223 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13963 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 14020 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4606);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, actions: { paddingHorizontal: 16, gap: 24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default function GuildActionSheetDirectory(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const obj = { scrollable: true, startExpanded: expanded, children: null };
  const obj2 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [React4(GuildActionSheetHeaderDefault, { guild }), ];
  const obj3 = { style: tmp.actions, children: null };
  const items1 = [React4(GuildActionSheetActions.GuildActionSheetDirectoryActions, { guild }), React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild })];
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  obj2.children = items;
  obj.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj2);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
};
