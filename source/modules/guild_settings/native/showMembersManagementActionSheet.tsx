// Module ID: 16649
// Function ID: 16650
// Name: showMembersManagementActionSheet
// Dependencies: [1371, 1114, 4574, 16650, 1896, 7339, 16651, 7268, 2]
// Exports: default, getMembersManagementActions

// Module 16649 (showMembersManagementActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/showMembersManagementActionSheet.tsx");

export default function showMembersManagementActionSheet(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, onPress: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16650, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7339).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7339);
  }
  if (canPrune) {
    const obj2 = { label: null, onPress: null, isDestructive: true };
    const intl2 = tmp(1114).intl;
    obj2.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16651, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  const result = guild(7268).showSimpleActionSheet({ key: "GuildSettingsMembersMore", options: items, hasIcons: false });
};
export const getMembersManagementActions = function getMembersManagementActions(guild) {
  guild = guild.guild;
  ({ canPrune, selectedRoleId: importDefault, onFilterRoleId: dependencyMap } = guild);
  const obj = { label: null, action: null };
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.pEasFX);
  obj.action = function action() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16650, dependencyMap.paths), "MembersFilter", { guild, selectedRoleId, onFilterRoleId });
  };
  const items = [obj];
  if (canPrune == null) {
    canPrune = tmp(7339).canPruneGuildMembers(guild, UserStore.getCurrentUser());
    const tmpResult = tmp(7339);
  }
  if (canPrune) {
    const obj2 = { label: null, action: null, variant: "destructive" };
    const intl2 = tmp(1114).intl;
    obj2.label = intl2.string(tmp(1114).t["2mIlKQ"]);
    obj2.action = function action() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16651, dependencyMap.paths), "MembersPrune", { guild });
    };
    items.push(obj2);
  }
  return items;
};
