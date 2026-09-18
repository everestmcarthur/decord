// Module ID: 7186
// Function ID: 7187
// Name: RoleIconUtils
// Dependencies: [19, 2015, 1979, 21, 504, 7187, 7188, 1114, 2]
// Exports: getRoleIcon, useRoleIcon

// Module 7186 (RoleIconUtils)
import guild_boosting_RoleIconUtils from "guild_boosting/RoleIconUtils" /* 7187 */;
import RoleIconDefault from "RoleIcon" /* 7188 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/RoleIconUtils.tsx");

export const useRoleIcon = function useRoleIcon(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let role;
  const items = [GuildStore, role];
  const items1 = [guildId, roleId];
  const stateFromStoresObject = guildId(num[4]).useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), role: null };
    role = undefined;
    if (null != guildId) {
      if (null != roleId) {
        role = GuildRoleStore.getRole(guildId, tmp3);
      }
    }
    obj.role = role;
    return obj;
  }, items1);
  const guild = stateFromStoresObject.guild;
  role = stateFromStoresObject.role;
  const items2 = [guild, role, roleId, num];
  return guild.useMemo(() => {
    if (null != guild) {
      if (null != roleId) {
        if (obj.canGuildUseRoleIcons(tmp, role)) {
          let roleIconData = tmp3(7187).getRoleIconData(tmp5);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          let tmp6;
          if (null != customIconSrc) {
            const obj2 = { uri: customIconSrc };
            tmp6 = obj2;
          }
          const obj3 = { source: tmp6, unicodeEmoji, name: null, size: null };
          let str;
          const tmp3Result = tmp3(7187);
          const tmp7 = jsx;
          if (tmp5 != null) {
            str = tmp5.name;
          }
          if (str == null) {
            str = "";
          }
          obj3.name = str;
          obj3.size = num;
          return tmp7(RoleIconDefault, obj3);
        }
        obj = guild_boosting_RoleIconUtils;
        tmp3 = require;
      }
    }
  }, items2);
};
export const getRoleIcon = function getRoleIcon(roleId) {
  roleId = roleId.roleId;
  const guild = GuildStore.getGuild(roleId.guildId);
  if (null != guild) {
    if (null != roleId) {
      const role = GuildRoleStore.getRole(guild.id, roleId);
      if (null != role) {
        if (obj.canGuildUseRoleIcons(guild, role)) {
          let roleIconData = tmp4(7187).getRoleIconData(role);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          if (null == customIconSrc) {
            let surrogates;
            if (unicodeEmoji != null) {
              surrogates = unicodeEmoji.surrogates;
            }
          }
          const obj2 = { source: customIconSrc, name: role.name, size: roleId.size, unicodeEmoji: null, alt: null };
          let surrogates1;
          if (unicodeEmoji != null) {
            surrogates1 = unicodeEmoji.surrogates;
          }
          obj2.unicodeEmoji = surrogates1;
          const intl = tmp4(1114).intl;
          const obj3 = { name: role.name };
          obj2.alt = intl.formatToPlainString(tmp4(1114).t["9+YWrE"], obj3);
          return obj2;
        }
        obj = guild_boosting_RoleIconUtils;
      }
    }
  }
};
