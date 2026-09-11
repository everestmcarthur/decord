// Module ID: 14027
// Function ID: 14028
// Name: GuildActionSheet
// Dependencies: [19, 17, 21, 4607, 576, 1611, 8256, 7224, 6699, 1115, 14022, 14028, 13965, 14029, 14032, 7228, 2]

// Module 14027 (GuildActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import BottomSheetModal from "BottomSheetModal" /* 6699 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7224 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7228 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8256 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13965 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 14022 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 14028 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 14029 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 14032 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4607);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, actions: { paddingHorizontal: 16, gap: 24 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default noop.memo(function GuildActionSheet(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  const obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj3.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
  const items = [React4(GuildActionSheetHeaderDefault, { guild }), React4(GuildActionSheetTabItemsDefault, { guild }), , ];
  const obj5 = { style: tmp.actions, children: null };
  const items1 = [React4(GuildActionSheetActions.GuildUnreadAction, { guild }), React4(GuildActionSheetProgressDefault, { guild }), React4(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }), React4(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }), React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }), React4(GuildActionSheetEmojiSectionDefault, { guildId: guild.id })];
  obj5.children = items1;
  items[2] = hasOwnProperty(View, obj5);
  items[3] = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj3.children = items;
  obj2.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj3);
  return React4(Sheet_BottomSheet.BottomSheet, obj2);
});
