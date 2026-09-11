// Module ID: 13961
// Function ID: 13962
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [19, 21, 13962, 7270, 7222, 7272, 1114, 4573, 7192, 13963, 2]
// Exports: default

// Module 13961 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7192 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13963 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  const messageRequestPrivacyOption = guild(13962).useMessageRequestPrivacyOption({ guild });
  const obj2 = { header: closure_3(guild(7222).BottomSheetTitleHeader, { title: guild.name }), children: null };
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj5.label = intl.string(guild(1114).t.h850Ss);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  const items = [closure_3(guild(7272).ActionSheetRow, obj5), closure_3(guild(13963).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1114).intl;
  obj6.label = intl2.string(guild(1114).t.J2TBi3);
  obj6.onPress = function onPress() {
    return GuildActionSheetActions.handleLeaveServer(guild);
  };
  items[3] = closure_3(guild(7272).ActionSheetRow, obj6);
  obj4.children = items;
  obj2.children = closure_4(guild(7272).ActionSheetRow.Group, obj4);
  return closure_3(guild(7270).ActionSheet, obj2);
};
