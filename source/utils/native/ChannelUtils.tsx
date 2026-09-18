// Module ID: 5197
// Function ID: 5198
// Name: utils/ChannelUtils
// Dependencies: [1958, 2022, 1980, 1372, 1074, 5198, 5199, 5200, 5201, 5202, 5203, 5204, 5205, 5206, 5207, 5208, 5209, 5210, 5211, 5212, 5213, 5214, 5215, 5216, 5217, 5218, 5219, 5220, 5221, 5222, 5223, 5224, 5225, 5226, 5229, 5230, 5231, 5232, 5233, 5234, 5235, 5236, 5237, 5238, 5239, 5240, 5241, 5242, 5243, 5244, 5245, 5246, 5247, 5248, 5249, 5250, 5251, 5252, 5253, 5254, 5255, 5256, 5257, 5258, 5259, 5260, 5261, 5262, 5263, 5264, 5265, 5266, 5267, 5268, 5269, 5270, 5271, 5272, 5273, 5274, 5275, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 5197 (utils/ChannelUtils)
import _modDef5198 from "module_5198" /* 5198 */;
import _modDef5199 from "module_5199" /* 5199 */;
import _modDef5200 from "module_5200" /* 5200 */;
import _modDef5201 from "module_5201" /* 5201 */;
import _modDef5202 from "module_5202" /* 5202 */;
import _modDef5203 from "module_5203" /* 5203 */;
import _modDef5204 from "module_5204" /* 5204 */;
import _modDef5205 from "module_5205" /* 5205 */;
import _modDef5206 from "module_5206" /* 5206 */;
import _modDef5207 from "module_5207" /* 5207 */;
import _modDef5208 from "module_5208" /* 5208 */;
import _modDef5209 from "module_5209" /* 5209 */;
import _modDef5210 from "module_5210" /* 5210 */;
import _modDef5211 from "module_5211" /* 5211 */;
import _modDef5212 from "module_5212" /* 5212 */;
import _modDef5213 from "module_5213" /* 5213 */;
import _modDef5214 from "module_5214" /* 5214 */;
import _modDef5215 from "module_5215" /* 5215 */;
import _modDef5216 from "module_5216" /* 5216 */;
import _modDef5217 from "module_5217" /* 5217 */;
import _modDef5218 from "module_5218" /* 5218 */;
import _modDef5219 from "module_5219" /* 5219 */;
import _modDef5220 from "module_5220" /* 5220 */;
import _modDef5221 from "module_5221" /* 5221 */;
import _modDef5222 from "module_5222" /* 5222 */;
import _modDef5223 from "module_5223" /* 5223 */;
import _modDef5224 from "module_5224" /* 5224 */;
import _modDef5225 from "module_5225" /* 5225 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5226 */;
import _modDef5229 from "module_5229" /* 5229 */;
import _modDef5230 from "module_5230" /* 5230 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5231 */;
import _modDef5237 from "module_5237" /* 5237 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import UserStore from "UserStore" /* 1372 */;

const ExperimentalLfgIcon = tmp(5239);
const ChatIcon2 = tmp(5240);
const ThreadLockIcon = tmp(5241);
const ThreadIcon2 = tmp(5242);
const FolderIcon = tmp(5243);
const BookCheckIcon = tmp(5244);
const TextWarningIcon2 = tmp(5245);
const TextSpoilerIcon2 = tmp(5246);
const TextLockIcon2 = tmp(5247);
const TextControllerIcon = tmp(5248);
const TextIcon2 = tmp(5249);
const ImageWarningIcon2 = tmp(5250);
const ForumWarningIcon2 = tmp(5251);
const ForumSpoilerIcon3 = tmp(5252);
const ExperimentalLfgLockIcon = tmp(5253);
const ImageLockIcon = tmp(5254);
const ForumLockIcon2 = tmp(5255);
const ImageIcon2 = tmp(5256);
const ForumIcon2 = tmp(5257);
const GroupIcon = tmp(5258);
const AtIcon = tmp(5259);
const AnnouncementsWarningIcon2 = tmp(5260);
const AnnouncementsSpoilerIcon2 = tmp(5261);
const AnnouncementsLockIcon = tmp(5262);
const AnnouncementsIcon2 = tmp(5263);
const LockIcon3 = tmp(5264);
const StageLockIcon2 = tmp(5265);
const StageIcon2 = tmp(5266);
const VoiceLockIcon3 = tmp(5267);
const VoiceWarningIcon2 = tmp(5268);
const VoiceNormalSpoilerIcon = tmp(5269);
const VoiceNormalIcon2 = tmp(5270);
const HubIcon = tmp(5271);
const AppsWarningIcon = tmp(5272);
const AppsSpoilerIcon2 = tmp(5273);
const AppsLockIcon = tmp(5274);
const AppsIcon2 = tmp(5275);
require = fn;
function getChannelIcon(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [GuildStore, UserStore, GuildMemberStore];
  const result = useShowMemberVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      let tmp97 = _modDef5229;
    } else {
      tmp97 = _modDef5217;
    }
    return tmp97;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD !== type) {
      if (tmp5.ANNOUNCEMENT_THREAD !== type) {
        if (tmp5.PUBLIC_THREAD !== type) {
          if (tmp5.MEDIA_THREAD !== type) {
            if (tmp5.GUILD_CATEGORY === type) {
              return _modDef5200;
            } else if (tmp5.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let tmp79 = _modDef5230;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp79 = _modDef5213;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    _modDef5214;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    tmp82(5223);
                  }
                }
                if (null != channel.linkedLobby) {
                  let tmp82Result2 = tmp82(5232);
                } else {
                  tmp82Result2 = tmp82(5201);
                }
              }
              return tmp79;
            } else if (tmp5.GUILD_FORUM === type) {
              if (isRulesChannel) {
                let tmp66 = _modDef5230;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp66 = importDefault(isMediaChannelResult ? 5222 : 5219);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    _modDef5220;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      let tmp69Result = tmp69(5233);
                    } else {
                      tmp69Result = tmp69(isMediaChannelResult ? 5234 : 5235);
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  let tmp69Result2 = tmp69(5229);
                } else {
                  tmp69Result2 = tmp69(isMediaChannelResult ? 5221 : 5218);
                }
              }
              return tmp66;
            } else if (tmp5.GUILD_MEDIA === type) {
              if (isRulesChannel) {
                let tmp56 = _modDef5230;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp56 = _modDef5222;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    _modDef5220;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp59Result = tmp59(5234);
                  }
                }
                tmp59Result = tmp59(5221);
              }
              return tmp56;
            } else if (tmp5.GROUP_DM === type) {
              return _modDef5203;
            } else if (tmp5.DM === type) {
              return _modDef5204;
            } else if (tmp5.GUILD_ANNOUNCEMENT === type) {
              if (isRulesChannel) {
                let tmp43 = _modDef5230;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp43 = _modDef5215;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    _modDef5216;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp46Result = tmp46(5236);
                  }
                }
                tmp46Result = tmp46(5205);
              }
              return tmp43;
            } else if (tmp5.GUILD_STAGE_VOICE === type) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequiredDefault(channel)) {
                    let tmp32Result = tmp32(5237);
                  } else {
                    tmp32Result = tmp32(5212);
                  }
                  return tmp32Result;
                }
              }
              if (locked) {
                let ignoreTraits13;
                if (ignoreTraits != null) {
                  ignoreTraits13 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits13) {
                  _modDef5237;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp36Result = tmp36(5212);
                }
              }
              tmp36Result = tmp36(5206);
            } else if (tmp5.GUILD_VOICE === type) {
              if (obj.textFocused) {
                let tmp17Result = _modDef5217;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp17Result = tmp17(5237);
                    } else {
                      tmp17Result = tmp17(5209);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    _modDef5237;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp21(5209);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp21(5210);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp21Result4 = tmp21(5211);
                  }
                }
                tmp21Result4 = tmp21(5207);
              }
              return tmp17Result;
            } else if (tmp5.GUILD_DIRECTORY === type) {
              return _modDef5208;
            } else if (tmp5.GUILD_APP === type) {
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  return _modDef5224;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  _modDef5225;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  let tmp10Result = tmp10(5238);
                }
              }
              tmp10Result = tmp10(5202);
            } else {
              if (tmp5.GUILD_STORE !== type) {
                if (tmp5.GUILD_SPACE !== type) {
                  const UNKNOWN = tmp5.UNKNOWN;
                }
              }
              return null;
            }
          }
        }
      }
    }
    const type2 = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type2) {
      let tmp90 = _modDef5198;
    } else {
      if (tmp5.ANNOUNCEMENT_THREAD !== type2) {
        if (tmp5.PUBLIC_THREAD !== type2) {
          tmp90 = null;
        }
      }
      tmp90 = _modDef5199;
    }
    return tmp90;
  }
}
function getChannelIconComponent(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [GuildStore, UserStore, GuildMemberStore];
  const result = useShowMemberVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      let ChatIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
    } else {
      ChatIcon = ChatIcon2.ChatIcon;
    }
    return ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return ThreadLockIcon.ThreadLockIcon;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.MEDIA_THREAD !== type) {
            if (tmp6.GUILD_CATEGORY === type) {
              return FolderIcon.FolderIcon;
            } else if (tmp6.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let TextWarningIcon = BookCheckIcon.BookCheckIcon;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    TextWarningIcon = TextWarningIcon2.TextWarningIcon;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    const TextSpoilerIcon = TextSpoilerIcon2.TextSpoilerIcon;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    const TextLockIcon = TextLockIcon2.TextLockIcon;
                  }
                }
                if (null != channel.linkedLobby) {
                  let TextIcon = TextControllerIcon.TextControllerIcon;
                } else {
                  TextIcon = TextIcon2.TextIcon;
                }
              }
              return TextWarningIcon;
            } else if (tmp6.GUILD_FORUM === type) {
              if (isRulesChannel) {
                let ForumWarningIcon = BookCheckIcon.BookCheckIcon;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    if (isMediaChannelResult) {
                      ForumWarningIcon = ImageWarningIcon2.ImageWarningIcon;
                    } else {
                      ForumWarningIcon = ForumWarningIcon2.ForumWarningIcon;
                    }
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    const ForumSpoilerIcon2 = ForumSpoilerIcon3.ForumSpoilerIcon;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      let ForumLockIcon = ExperimentalLfgLockIcon.ExperimentalLfgLockIcon;
                    } else if (isMediaChannelResult) {
                      ForumLockIcon = ImageLockIcon.ImageLockIcon;
                    } else {
                      ForumLockIcon = ForumLockIcon2.ForumLockIcon;
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  let ForumIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
                } else if (isMediaChannelResult) {
                  ForumIcon = ImageIcon2.ImageIcon;
                } else {
                  ForumIcon = ForumIcon2.ForumIcon;
                }
              }
              return ForumWarningIcon;
            } else if (tmp6.GUILD_MEDIA === type) {
              if (isRulesChannel) {
                let ImageWarningIcon = BookCheckIcon.BookCheckIcon;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    const ForumSpoilerIcon = ForumSpoilerIcon3.ForumSpoilerIcon;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let ImageIcon = ImageLockIcon.ImageLockIcon;
                  }
                }
                ImageIcon = ImageIcon2.ImageIcon;
              }
              return ImageWarningIcon;
            } else if (tmp6.GROUP_DM === type) {
              return GroupIcon.GroupIcon;
            } else if (tmp6.DM === type) {
              return AtIcon.AtIcon;
            } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
              if (isRulesChannel) {
                let AnnouncementsWarningIcon = BookCheckIcon.BookCheckIcon;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    AnnouncementsWarningIcon = AnnouncementsWarningIcon2.AnnouncementsWarningIcon;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    const AnnouncementsSpoilerIcon = AnnouncementsSpoilerIcon2.AnnouncementsSpoilerIcon;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let AnnouncementsIcon = AnnouncementsLockIcon.AnnouncementsLockIcon;
                  }
                }
                AnnouncementsIcon = AnnouncementsIcon2.AnnouncementsIcon;
              }
              return AnnouncementsWarningIcon;
            } else if (tmp6.GUILD_STAGE_VOICE === type) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequiredDefault(channel)) {
                    let StageLockIcon = LockIcon3.LockIcon;
                  } else {
                    StageLockIcon = StageLockIcon2.StageLockIcon;
                  }
                  return StageLockIcon;
                }
              }
              if (locked) {
                let ignoreTraits13;
                if (ignoreTraits != null) {
                  ignoreTraits13 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits13) {
                  const LockIcon2 = LockIcon3.LockIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let StageIcon = StageLockIcon2.StageLockIcon;
                }
              }
              StageIcon = StageIcon2.StageIcon;
            } else if (tmp6.GUILD_VOICE === type) {
              if (obj.textFocused) {
                let VoiceLockIcon = ChatIcon2.ChatIcon;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      VoiceLockIcon = LockIcon3.LockIcon;
                    } else {
                      VoiceLockIcon = VoiceLockIcon3.VoiceLockIcon;
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    const LockIcon = LockIcon3.LockIcon;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    const VoiceLockIcon2 = VoiceLockIcon3.VoiceLockIcon;
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    const VoiceWarningIcon = VoiceWarningIcon2.VoiceWarningIcon;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let VoiceNormalIcon = VoiceNormalSpoilerIcon.VoiceNormalSpoilerIcon;
                  }
                }
                VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
              }
              return VoiceLockIcon;
            } else if (tmp6.GUILD_DIRECTORY === type) {
              return HubIcon.HubIcon;
            } else if (tmp6.GUILD_APP === type) {
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  return AppsWarningIcon.AppsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  const AppsSpoilerIcon = AppsSpoilerIcon2.AppsSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  let AppsIcon = AppsLockIcon.AppsLockIcon;
                }
              }
              AppsIcon = AppsIcon2.AppsIcon;
            }
          }
        }
      }
      return ThreadIcon2.ThreadIcon;
    }
  }
}
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return _modDef5198;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== arg0) {
      if (tmp.PUBLIC_THREAD !== arg0) {
        if (tmp.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5199;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_CATEGORY === type) {
            return _modDef5200;
          } else {
            if (tmp.GUILD_TEXT !== type) {
              if (tmp.GUILD_FORUM !== type) {
                if (tmp.GUILD_MEDIA !== type) {
                  if (tmp.GUILD_APP === type) {
                    return _modDef5202;
                  } else if (tmp.GROUP_DM === type) {
                    return _modDef5203;
                  } else if (tmp.DM === type) {
                    return _modDef5204;
                  } else if (tmp.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5205;
                  } else if (tmp.GUILD_STAGE_VOICE === type) {
                    return _modDef5206;
                  } else if (tmp.GUILD_VOICE === type) {
                    return _modDef5207;
                  } else if (tmp.GUILD_DIRECTORY === type) {
                    return _modDef5208;
                  } else {
                    if (tmp.GUILD_STORE !== type) {
                      if (tmp.GUILD_SPACE !== type) {
                        const UNKNOWN = tmp.UNKNOWN;
                      }
                    }
                    return null;
                  }
                }
              }
            }
            return _modDef5201;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5198;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== type2) {
      if (tmp.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5199;
  }
  return tmp21;
};
export const getChannelIconWithGuild = function getChannelIconWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIcon(channel, { isRulesChannel: rulesChannelId === channel.id });
};
export const getChannelMentionIcon = function getChannelMentionIcon(iconType) {
  switch (iconType) {
    case "voice":
      return _modDef5207;
    case "voice-locked":
      return _modDef5209;
    case "voice-nsfw":
      return _modDef5210;
    case "voice-spoiler":
      return _modDef5211;
    case "stage":
      return _modDef5206;
    case "stage-locked":
      return _modDef5212;
    case "text":
      return _modDef5201;
    case "text-nsfw":
      return _modDef5213;
    case "text-spoiler":
      return _modDef5214;
    case "announcement":
      return _modDef5205;
    case "announcement-nsfw":
      return _modDef5215;
    case "announcement-spoiler":
      return _modDef5216;
    case "thread":
      return _modDef5199;
    case "post":
      let tmp21 = _modDef5217;
      return tmp21;
    case "message":
      tmp21 = _modDef5217;
      return tmp21;
    case "forum":
      return _modDef5218;
    case "forum-nsfw":
      return _modDef5219;
    case "forum-spoiler":
      return _modDef5220;
    case "media":
      return _modDef5221;
    case "media-nsfw":
      return _modDef5222;
    case "locked":
      return _modDef5223;
    case "app":
      return _modDef5202;
    case "app-nsfw":
      return _modDef5224;
    case "app-spoiler":
      return _modDef5225;
    default:
      return null;
  }
};
export { getChannelIcon };
export const getChannelIconComponentWithGuild = function getChannelIconComponentWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIconComponent(channel, { isRulesChannel: rulesChannelId === channel.id });
};
export { getChannelIconComponent };
export const getSimpleChannelIconComponent = function getSimpleChannelIconComponent(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_CATEGORY === type) {
            return FolderIcon.FolderIcon;
          } else if (tmp.GUILD_TEXT === type) {
            return TextIcon2.TextIcon;
          } else if (tmp.GUILD_FORUM === type) {
            return ForumIcon2.ForumIcon;
          } else if (tmp.GUILD_MEDIA === type) {
            return ImageIcon2.ImageIcon;
          } else if (tmp.GROUP_DM === type) {
            return GroupIcon.GroupIcon;
          } else if (tmp.DM === type) {
            return AtIcon.AtIcon;
          } else if (tmp.GUILD_ANNOUNCEMENT === type) {
            return AnnouncementsIcon2.AnnouncementsIcon;
          } else if (tmp.GUILD_STAGE_VOICE === type) {
            return StageIcon2.StageIcon;
          } else if (tmp.GUILD_VOICE === type) {
            return VoiceNormalIcon2.VoiceNormalIcon;
          } else if (tmp.GUILD_DIRECTORY === type) {
            return HubIcon.HubIcon;
          } else if (tmp.GUILD_APP === type) {
            return AppsIcon2.AppsIcon;
          } else {
            if (tmp.GUILD_STORE !== type) {
              if (tmp.GUILD_SPACE !== type) {
                const UNKNOWN = tmp.UNKNOWN;
              }
            }
            return null;
          }
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp25(5240).ChatIcon;
  } else {
    ThreadIcon = tmp25(5242).ThreadIcon;
  }
  return ThreadIcon;
};
