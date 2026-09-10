// Module ID: 13934
// Function ID: 13935
// Name: NsfwGateGuildSettingsActionSheet
// Dependencies: [19, 21, 13935, 7211, 7163, 7213, 1114, 4541, 7133, 13936, 2]
// Exports: default

// Module 13934 (NsfwGateGuildSettingsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7133 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13936 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSettingsActionSheet.tsx");

export default function NsfwGateGuildSettingsActionSheet(guild) {
  guild = guild.guild;
  const messageRequestPrivacyOption = guild(13935).useMessageRequestPrivacyOption({ guild });
  const obj2 = { header: closure_3(guild(7163).BottomSheetTitleHeader, { title: guild.name }), children: null };
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj5.label = intl.string(guild(1114).t.h850Ss);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  const items = [closure_3(guild(7213).ActionSheetRow, obj5), closure_3(guild(13936).RestrictedGuildPrivacyOption, { guild }), messageRequestPrivacyOption, ];
  const obj6 = { variant: "danger", label: null, onPress: null };
  const intl2 = guild(1114).intl;
  obj6.label = intl2.string(guild(1114).t.J2TBi3);
  obj6.onPress = function onPress() {
    return GuildActionSheetActions.handleLeaveServer(guild);
  };
  items[3] = closure_3(guild(7213).ActionSheetRow, obj6);
  obj4.children = items;
  obj2.children = closure_4(guild(7213).ActionSheetRow.Group, obj4);
  return closure_3(guild(7211).ActionSheet, obj2);
};
