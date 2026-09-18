// Module ID: 17113
// Function ID: 17114
// Name: AutocompleteScreenUtils
// Dependencies: [2022, 4371, 1372, 12582, 8083, 1074, 1115, 11930, 4664, 9669, 10881, 10355, 10353, 5256, 12771, 10357, 12068, 9673, 17114, 12583, 4566, 2]
// Exports: getSearchFilterAuthorTypeIcon, getSearchFilterHasIcon, getSearchQueryChannelIds, getSearchQueryUserIds, toSearchListChannelItem, toSearchListUserItem

// Module 17113 (AutocompleteScreenUtils)
import util from "util" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4566 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11930 */;
import SearchUtils from "SearchUtils" /* 12583 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import RelationshipStore from "RelationshipStore" /* 4371 */;
import UserStore from "UserStore" /* 1372 */;
import SearchQueryStore from "SearchQueryStore" /* 12582 */;

require = fn;
const SearchListItemTypes = fn(8083).SearchListItemTypes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export const getSearchQueryChannelIds = function getSearchQueryChannelIds(items) {
  return new Set(SearchQueryStore.getChannelIds(items));
};
export const getSearchQueryUserIds = function getSearchQueryUserIds(items) {
  const prefixTag = SearchQueryStore.getPrefixTag(items);
  if (null == prefixTag) {
    const _Set2 = Set;
    const set = new Set();
    return set;
  } else {
    const _Set = Set;
    const set1 = new Set(obj.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
  obj = SearchQueryStore;
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = util.intl;
  if (intl.string(util.t.nrpA5E) === text) {
    return ForwardingIconDefault;
  } else {
    const intl3 = tmp(1115).intl;
    if (intl3.string(tmp(1115).t.ZNR2fi) === text) {
      return tmp(4664).LinkIcon;
    } else {
      const intl4 = tmp(1115).intl;
      if (intl4.string(tmp(1115).t["20uQR3"]) === text) {
        return tmp(9669).EmbedIcon;
      } else {
        const intl5 = tmp(1115).intl;
        if (intl5.string(tmp(1115).t.L4lxyE) === text) {
          return tmp(10881).PollsIcon;
        } else {
          const intl6 = tmp(1115).intl;
          if (intl6.string(tmp(1115).t["AV/v6i"]) === text) {
            return tmp(10355).AttachmentIcon;
          } else {
            const intl7 = tmp(1115).intl;
            if (intl7.string(tmp(1115).t.XM9XGP) === text) {
              return tmp(10353).VideoIcon;
            } else {
              const intl8 = tmp(1115).intl;
              if (intl8.string(tmp(1115).t.TNLcpx) === text) {
                return tmp(5256).ImageIcon;
              } else {
                const intl9 = tmp(1115).intl;
                if (intl9.string(tmp(1115).t.F8Wf0e) === text) {
                  return tmp(12771).SoundboardIcon;
                } else {
                  const intl2 = tmp(1115).intl;
                  if (intl2.string(tmp(1115).t.PJgX2h) === text) {
                    return tmp(10357).StickerIcon;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
export const getSearchFilterAuthorTypeIcon = function getSearchFilterAuthorTypeIcon(text) {
  const intl = util.intl;
  if (intl.string(util.t.tPZo4p) === text) {
    return tmp(12068).UserIcon;
  } else {
    const intl3 = tmp(1115).intl;
    if (intl3.string(tmp(1115).t.JL7sRS) === text) {
      return tmp(9673).RobotIcon;
    } else {
      const intl2 = tmp(1115).intl;
      if (intl2.string(tmp(1115).t.WjkIKU) === text) {
        return tmp(17114).WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(items, user, callback2) {
  const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(items);
  if (null == user) {
    return null;
  } else {
    let nickname = null;
    if (null == guildIdFromSearchContext) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    if (nickname == null) {
      nickname = GuildMemberStore.getNick(guildIdFromSearchContext, user.id);
    }
    if (nickname == null) {
      nickname = UserUtilsDefault.getName(user);
    }
    const element = { type: SearchListItemTypes.DM, props: null };
    const obj3 = { type: RelationshipTypes.NONE, user, nickname, onPress: callback2, guildId: guildIdFromSearchContext };
    element.props = obj3;
    return element;
  }
};
export const toSearchListChannelItem = function toSearchListChannelItem(channel, callback3) {
  const id = channel;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    const user = UserStore.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      const element = { type: SearchListItemTypes.DM, props: null };
      const obj = { type: RelationshipTypes.NONE, user, nickname: null, onPress: null };
      let nickname = RelationshipStore.getNickname(user.id);
      if (nickname == null) {
        nickname = UserUtilsDefault.getName(user);
      }
      obj.nickname = nickname;
      obj.onPress = function onPress() {
        return callback3(id.id);
      };
      element.props = obj;
      tmp5 = element;
    }
    return tmp5;
  } else {
    const element1 = { type: null, props: null };
    if (channel.isGroupDM()) {
      element1.type = tmp.GROUP_DM;
      const obj2 = { channel, onPress: callback3 };
      element1.props = obj2;
      let tmp2 = element1;
    } else {
      element1.type = tmp.GUILD_TEXT_CHANNEL;
      const obj3 = { channel, onPress: callback3 };
      element1.props = obj3;
      tmp2 = element1;
    }
    return tmp2;
  }
};
