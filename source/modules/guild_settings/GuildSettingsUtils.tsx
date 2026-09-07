// Module ID: 17634
// Function ID: 17635
// Name: isRolePowerful
// Dependencies: [2016, 1074, 1086, 16833, 2]
// Exports: getPowerfulPermissionTitles, isRolePowerful

// Module 17634 (isRolePowerful)
import set from "set" /* 2 */;
import fromStringAll from "fromString" /* 1086 */;
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag" /* 2016 */;
import getPermissionOptionsDefault from "getPermissionOptions" /* 16833 */;
import ME from "ME" /* 1074 */;

const hasPermission = GuildRoleRecordTypeTag.hasPermission;
({ ElevatedPermissions: c4, ElevatedPermissionsList: c5 } = ME);
const result = set.fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export const isRolePowerful = function isRolePowerful(role) {
  return fromStringAll.hasAny(role.permissions, closure_4);
};
export const getPowerfulPermissionTitles = function getPowerfulPermissionTitles(arg0, arg1) {
  const items = [];
  getPermissionOptionsDefault;
  for (const item10015 of closure_5) {
    let str = item10015;
    let tmp3 = hasPermission;
    if (hasPermission(arg1, item10015)) {
      let tmp4 = item10015;
      let arr = items.push(tmp2[str.toString(str)].title);
    }
    continue;
  }
  return items;
};
