// Module ID: 5006
// Function ID: 5007
// Name: MarkupChannelMentionRule
// Dependencies: [2013, 1957, 1979, 4199, 4209, 1371, 1074, 1925, 1396, 1114, 5007, 4705, 4713, 5008, 4714, 5005, 4257, 2]
// Exports: getGuildIdFromChannelId

// Module 5006 (MarkupChannelMentionRule)
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import StringUtils from "StringUtils" /* 1925 */;
import _modDef4257 from "module_4257" /* 4257 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import LinkUtils from "LinkUtils" /* 4714 */;
import MarkupTextRuleDefault from "MarkupTextRule" /* 5005 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5007 */;
import GatedChannelStore from "GatedChannelStore" /* 2013 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getChannel(id, arr) {
  closure_0 = id;
  const channel = ChannelStore.getChannel(id);
  const isSubscriptionGated = useChannelRoleSubscriptionStatus.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore).isSubscriptionGated;
  let str = ChannelUtils.getMentionIconType(channel);
  if (str == null) {
    str = "text";
  }
  if (null != arr) {
    const found = arr.find((id) => id.id === closure_0);
    if (null != found) {
      const obj = { type: null, id: null, guildId: null, name: null, isDm: null, isForumPost: null, isMentionable: true, canViewChannel: true, roleSubscriptionGated: null, iconType: null, parentId: null };
      ({ type: obj8.type, id: obj8.id, guild_id: obj8.guildId, name: obj8.name } = found);
      obj.isDm = null != channel && channel.isPrivate();
      const tmp7 = null != channel && channel.isPrivate();
      obj.isForumPost = null != channel && channel.isForumPost();
      obj.roleSubscriptionGated = isSubscriptionGated;
      obj.iconType = str;
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      obj.parentId = parent_id;
      return obj;
    }
  }
  let tmp4 = null;
  if (null != channel) {
    const obj5 = { type: null, id: null, guildId: null, name: null, isDm: null, isForumPost: null, isMentionable: null, canViewChannel: null, roleSubscriptionGated: null, iconType: null, parentId: null };
    ({ type: obj4.type, id: obj4.id, guild_id: obj4.guildId } = channel);
    obj5.name = tmp(4713).computeChannelName(channel, UserStore, RelationshipStore);
    obj5.isDm = channel.isPrivate();
    obj5.isForumPost = channel.isForumPost();
    const tmpResult = tmp(4713);
    obj5.isMentionable = tmp(5008).isChannelTypeMentionable(channel.type);
    const tmpResult3 = tmp(5008);
    obj5.canViewChannel = tmp(4714).canViewChannel(channel);
    obj5.roleSubscriptionGated = isSubscriptionGated;
    obj5.iconType = str;
    obj5.parentId = channel.parent_id;
    tmp4 = obj5;
    const tmpResult4 = tmp(4714);
  }
  return tmp4;
}
function handleUnknownChannel(guildId, channelId, messageId, arg3, originalLink) {
  const guild = GuildStore.getGuild(guildId);
  const obj = { type: "channelMention", guildId, channelId, messageId, originalLink, inContent: null, content: null };
  let tmp2 = null;
  if (null != guild) {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    tmp2 = null;
    if (id !== arg3) {
      const obj3 = { type: "guild", guildId: guild.id, content: StringUtils.truncateText(guild.name, 32), icon: null };
      ({ id: obj9.id, icon: obj9.icon } = guild);
      obj3.icon = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 40 });
      const items = [obj3];
      tmp2 = items;
      const obj4 = { id: null, icon: null, size: 40 };
    }
  }
  obj.inContent = tmp2;
  const intl = util.intl;
  const formatted = intl.string(util.t.zLZPmk).toLowerCase();
  const str = intl.string(util.t.zLZPmk);
  const obj6 = { type: "channel", content: null, channelType: constants.UNKNOWN, iconType: "text" };
  const obj14 = { type: "em", content: null };
  const items1 = [{ type: "text", content: StringUtils.truncateText(formatted, 32) }];
  obj14.content = items1;
  const items2 = [obj14];
  obj6.content = items2;
  const items3 = [obj6];
  obj.content = items3;
  return obj;
}
function parseChannel(canViewChannel, messageId, arg2, originalLink) {
  if (canViewChannel.canViewChannel) {
    if (canViewChannel.isMentionable) {
      const obj2 = { type: "channelMention", channelId: null, guildId: null, messageId: null, originalLink: null };
      ({ id: obj5.channelId, guildId: obj5.guildId } = canViewChannel);
      obj2.messageId = messageId;
      obj2.originalLink = originalLink;
      const guild = GuildStore.getGuild(canViewChannel.guildId);
      if (null == guild) {
        if (canViewChannel.isDm) {
          const obj4 = {};
          const merged = Object.assign(obj2);
          obj4.guildId = guildId;
          const obj6 = { type: "text", content: StringUtils.truncateText(canViewChannel.name, 32) };
          const obj7 = { type: "channel", content: null, channelType: null, iconType: null };
          const items = [obj6];
          obj7.content = items;
          ({ type: obj22.channelType, iconType: obj22.iconType } = canViewChannel);
          const items1 = [obj7];
          obj4.inContent = items1;
          const obj8 = { type: "channel", content: null, iconType: null };
          const items2 = [{ type: "text", content: "" }];
          obj8.content = items2;
          obj8.iconType = "message";
          const items3 = [obj8];
          obj4.content = items3;
          let obj11 = obj4;
        } else if (null != originalLink) {
          const obj9 = { type: "link", content: null, target: null, title: "HermesInternal" };
          const obj10 = { type: "text", content: originalLink };
          const items4 = [obj10];
          obj9.content = items4;
          obj9.target = originalLink;
          obj11 = obj9;
        } else {
          const intl2 = util.intl;
          const _HermesInternal2 = HermesInternal;
          obj11 = { type: "text", content: "#" + intl2.string(util.t.J90oLW) };
        }
        return obj11;
      } else {
        const obj12 = {};
        const merged1 = Object.assign(obj2);
        const obj13 = { type: "guild", guildId: guild.id, content: StringUtils.truncateText(guild.name, 32), icon: null };
        ({ id: obj28.id, icon: obj28.icon } = guild);
        obj13.icon = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 40 });
        const obj14 = { id: null, icon: null, size: 40 };
        const obj15 = { type: "text", content: StringUtils.truncateText(canViewChannel.name, 32) };
        const obj16 = { type: "channel", content: null, channelType: null, iconType: null };
        const items5 = [obj15];
        obj16.content = items5;
        ({ type: obj31.channelType, iconType: obj31.iconType } = canViewChannel);
        const obj17 = { type: "channel", content: null, iconType: null };
        const items6 = [{ type: "text", content: "" }];
        obj17.content = items6;
        let str2 = "message";
        if (canViewChannel.isForumPost) {
          str2 = "post";
        }
        obj17.iconType = str2;
        if (canViewChannel.guildId === arg2) {
          if (tmp34) {
            if (canViewChannel.isForumPost) {
              const channel = ChannelStore.getChannel(canViewChannel.parentId);
              if (null != channel) {
                const channelName = tmp35(4713).computeChannelName(channel, UserStore, RelationshipStore);
                const tmp35Result = tmp35(4713);
                let str3 = tmp35(4705).getMentionIconType(channel);
                if (str3 == null) {
                  str3 = "forum";
                }
                const obj18 = { inContent: null, content: null };
                const tmp35Result3 = tmp35(4705);
                const obj19 = { type: "text", content: tmp35(1925).truncateText(channelName, 32) };
                const obj21 = { type: "channel", content: null, channelType: null, iconType: null };
                const items7 = [obj19];
                obj21.content = items7;
                obj21.channelType = channel.type;
                obj21.iconType = str3;
                const items8 = [obj21];
                obj18.inContent = items8;
                const items9 = [obj16];
                obj18.content = items9;
                let obj24 = obj18;
                const tmp35Result4 = tmp35(1925);
              }
            }
            const obj23 = { inContent: null, content: null };
            const items10 = [obj16];
            obj23.inContent = items10;
            const items11 = [obj17];
            obj23.content = items11;
            obj24 = obj23;
          }
          const merged2 = Object.assign(obj24);
          return obj12;
        }
        if (canViewChannel.guildId === arg2) {
          if (!tmp34) {
            obj24 = { inContent: null, content: null };
            const items12 = [obj16];
            obj24.content = items12;
          }
        }
        if (canViewChannel.guildId !== arg2) {
          if (tmp34) {
            let obj25 = { inContent: null, content: null };
            const items13 = [obj13];
            obj25.inContent = items13;
            let tmp11 = obj17;
            if (canViewChannel.isForumPost) {
              tmp11 = obj16;
            }
            const items14 = [tmp11];
            obj25.content = items14;
          }
        }
        let tmp12;
        if (canViewChannel.guildId !== arg2) {
          if (!tmp34) {
            const obj30 = { inContent: null, content: null };
            const items15 = [obj13];
            obj30.inContent = items15;
            const items16 = [obj16];
            obj30.content = items16;
            tmp12 = obj30;
          }
        }
        obj25 = tmp12;
      }
    } else {
      const _HermesInternal = HermesInternal;
      const obj32 = { type: "text", content: "#" + canViewChannel.name };
      return obj32;
    }
  } else {
    if (canViewChannel.roleSubscriptionGated) {
      let name = canViewChannel.name;
    } else {
      const intl = util.intl;
      name = intl.string(util.t["/YzI63"]);
    }
    const obj = { type: "channel", content: null, channelType: null, iconType: "locked" };
    const obj56 = { type: "text", content: name };
    const items17 = [obj56];
    obj.content = items17;
    if (canViewChannel.roleSubscriptionGated) {
      let UNKNOWN = canViewChannel.type;
    } else {
      UNKNOWN = constants.UNKNOWN;
    }
    obj.channelType = UNKNOWN;
    const obj57 = { type: "channelMention", guildId: null, channelId: null, messageId: null, inContent: null, content: null };
    ({ guildId: obj3.guildId, id: obj3.channelId } = canViewChannel);
    obj57.messageId = messageId;
    const items18 = [obj];
    obj57.content = items18;
    return obj57;
  }
}
const Constants = fn(1074);
({ ChannelTypes: closure_9, ME: c10 } = Constants);
let obj = {
  channelMention: {
    order: MarkupTextRuleDefault.order,
    requiredFirstCharacters: ["<"],
    match(arg0) {
      return /^<#(\d+)>/.exec(arg0);
    },
    parse(arg0, arg1, returnMentionIds) {
      if (returnMentionIds.returnMentionIds) {
        const obj = { type: "channelMention", id: tmp };
        return obj;
      } else {
        const tmp3 = getChannel(tmp, returnMentionIds.mentionChannels);
        if (null == tmp3) {
          const channel = ChannelStore.getChannel(returnMentionIds.channelId);
          guildId = undefined;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          let tmp5Result = handleUnknownChannel(null, tmp, null, guildId);
        } else {
          const channel1 = ChannelStore.getChannel(returnMentionIds.channelId);
          let guildId1;
          if (channel1 != null) {
            guildId1 = channel1.getGuildId();
          }
          tmp5Result = parseChannel(tmp3, null, guildId1);
        }
        return tmp5Result;
      }
    }
  },
  channelOrMessageUrl: null,
  mediaPostLink: null
};
let obj2 = {
  order: MarkupTextRuleDefault.order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    return /^<#(\d+)>/.exec(arg0);
  },
  parse(arg0, arg1, returnMentionIds) {
    if (returnMentionIds.returnMentionIds) {
      const obj = { type: "channelMention", id: tmp };
      return obj;
    } else {
      const tmp3 = getChannel(tmp, returnMentionIds.mentionChannels);
      if (null == tmp3) {
        const channel = ChannelStore.getChannel(returnMentionIds.channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        let tmp5Result = handleUnknownChannel(null, tmp, null, guildId);
      } else {
        const channel1 = ChannelStore.getChannel(returnMentionIds.channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        tmp5Result = parseChannel(tmp3, null, guildId1);
      }
      return tmp5Result;
    }
  }
};
obj.channelOrMessageUrl = {
  order: _modDef4257.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const CHANNEL_OR_MESSAGES_URL_RE = LinkUtils.CHANNEL_OR_MESSAGES_URL_RE;
    const match = CHANNEL_OR_MESSAGES_URL_RE.exec(arg0);
    if (null != match) {
      if (null != match[2]) {
        if (obj.test(match[2])) {
          return null;
        }
        obj = /\D/;
      }
      if (null != match[3]) {
        if (obj2.test(match[3])) {
          return null;
        }
        obj2 = /\D/;
      }
    }
    return match;
  },
  parse(arg0, arg1, channelId) {
    [tmp, tmp2, tmp3, tmp4] = arg0;
    if (null == tmp3) {
      const obj = { type: "link", content: null, target: null, title: "HermesInternal" };
      const obj2 = { type: "text", content: tmp };
      const items = [obj2];
      obj.content = items;
      obj.target = tmp;
      return obj;
    } else {
      const tmp23 = getChannel(tmp3, null);
      if (null == tmp23) {
        const channel = ChannelStore.getChannel(channelId.channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        let tmp5Result = handleUnknownChannel(tmp2, tmp3, tmp4, guildId, tmp);
      } else {
        const channel1 = ChannelStore.getChannel(channelId.channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        tmp5Result = parseChannel(tmp23, tmp4, guildId1, tmp);
      }
      return tmp5Result;
    }
  }
};
let obj3 = {
  order: _modDef4257.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const CHANNEL_OR_MESSAGES_URL_RE = LinkUtils.CHANNEL_OR_MESSAGES_URL_RE;
    const match = CHANNEL_OR_MESSAGES_URL_RE.exec(arg0);
    if (null != match) {
      if (null != match[2]) {
        if (obj.test(match[2])) {
          return null;
        }
        obj = /\D/;
      }
      if (null != match[3]) {
        if (obj2.test(match[3])) {
          return null;
        }
        obj2 = /\D/;
      }
    }
    return match;
  },
  parse(arg0, arg1, channelId) {
    [tmp, tmp2, tmp3, tmp4] = arg0;
    if (null == tmp3) {
      const obj = { type: "link", content: null, target: null, title: "HermesInternal" };
      const obj2 = { type: "text", content: tmp };
      const items = [obj2];
      obj.content = items;
      obj.target = tmp;
      return obj;
    } else {
      const tmp23 = getChannel(tmp3, null);
      if (null == tmp23) {
        const channel = ChannelStore.getChannel(channelId.channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        let tmp5Result = handleUnknownChannel(tmp2, tmp3, tmp4, guildId, tmp);
      } else {
        const channel1 = ChannelStore.getChannel(channelId.channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        tmp5Result = parseChannel(tmp23, tmp4, guildId1, tmp);
      }
      return tmp5Result;
    }
  }
};
obj.mediaPostLink = {
  order: _modDef4257.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const MEDIA_POST_URL_RE = LinkUtils.MEDIA_POST_URL_RE;
    return MEDIA_POST_URL_RE.exec(arg0);
  },
  parse(arg0, arg1, channelId) {
    [tmp, tmp2, tmp3, tmp4, tmp5] = arg0;
    if (null != tmp3) {
      if (null != tmp4) {
        const tmp31 = getChannel(tmp4, null);
        if (null != tmp31) {
          const channel = ChannelStore.getChannel(channelId.channelId);
          guildId = undefined;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          return parseChannel(tmp31, tmp5, guildId, tmp);
        } else {
          const tmp30Result = tmp30(tmp3, null);
          if (null != tmp30Result) {
            const channel1 = ChannelStore.getChannel(channelId.channelId);
            let guildId1;
            if (channel1 != null) {
              guildId1 = channel1.getGuildId();
            }
            let tmp6Result = parseChannel(tmp30Result, tmp5, guildId1, tmp);
          } else {
            const channel2 = ChannelStore.getChannel(channelId.channelId);
            let guildId2;
            if (channel2 != null) {
              guildId2 = channel2.getGuildId();
            }
            tmp6Result = handleUnknownChannel(tmp2, tmp3, tmp5, guildId2, tmp);
          }
          return tmp6Result;
        }
        tmp30 = getChannel;
      }
    }
    const obj = { type: "link", content: null, target: tmp, title: "HermesInternal" };
    const items = [{ type: "text", content: tmp }];
    obj.content = items;
    return obj;
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupChannelMentionRule.tsx");

export default obj;
export const getGuildIdFromChannelId = function getGuildIdFromChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  return guildId;
};
export { getChannel };
export { handleUnknownChannel };
export { parseChannel };
