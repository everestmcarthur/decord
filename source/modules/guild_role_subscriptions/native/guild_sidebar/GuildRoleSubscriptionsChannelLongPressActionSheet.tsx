// Module ID: 16277
// Function ID: 16278
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [19, 17, 1964, 21, 4607, 576, 7271, 7223, 1178, 12874, 1114, 8686, 16170, 11050, 2]
// Exports: default

// Module 16277 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7223 */;
import ActionSheet from "ActionSheet" /* 7271 */;
import Form from "Form" /* 8686 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 11050 */;
import _modDef12874 from "module_12874" /* 12874 */;
import _modDef16170 from "module_16170" /* 16170 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4607);
let obj2 = { headerIcon: null };
let size = { marginRight: 16, tintColor: nativeDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
obj2.headerIcon = size;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: require, onClose: importDefault } = arg0);
  const obj = { children: null };
  const obj2 = { leading: null, title: null };
  const obj3 = { style: closure_7().headerIcon, children: null };
  const tmp = closure_7();
  obj3.children = closure_5(native.Icon, { disableColor: true, source: _modDef12874 });
  obj2.leading = closure_5(View, obj3);
  const intl = util.intl;
  obj2.title = intl.string(util.t["KzCF/6"]);
  const items = [closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), ];
  const obj5 = { leading: null, label: null, onPress: null };
  const obj4 = { disableColor: true, source: _modDef12874 };
  obj5.leading = closure_5(native.Icon, { source: _modDef16170 });
  const obj7 = { text: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.WqhZss);
  obj5.label = closure_5(Form.FormLabel, obj7);
  obj5.onPress = function onPress() {
    importDefault();
    const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(closure_1_0, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
  };
  items[1] = closure_5(Form.FormRow, obj5);
  obj.children = items;
  return closure_6(ActionSheet.ActionSheet, obj);
};
