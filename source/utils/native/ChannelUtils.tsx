// Module ID: 5080
// Function ID: 5081
// Name: utils/ChannelUtils
// Dependencies: [1957, 2021, 1979, 1371, 1074, 5081, 5082, 5083, 5084, 5085, 5086, 5087, 5088, 5089, 5090, 5091, 5092, 5093, 5094, 5095, 5096, 5097, 5098, 5099, 5100, 5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109, 5112, 5113, 5114, 5115, 5116, 5117, 5118, 5119, 5120, 5121, 5122, 5123, 5124, 5125, 5126, 5127, 5128, 5129, 5130, 5131, 5132, 5133, 5134, 5135, 5136, 5137, 5138, 5139, 5140, 5141, 5142, 5143, 5144, 5145, 5146, 5147, 5148, 5149, 5150, 5151, 5152, 5153, 5154, 5155, 5156, 5157, 5158, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 5080 (utils/ChannelUtils)
import _modDef5081 from "module_5081" /* 5081 */;
import _modDef5082 from "module_5082" /* 5082 */;
import _modDef5083 from "module_5083" /* 5083 */;
import _modDef5084 from "module_5084" /* 5084 */;
import _modDef5085 from "module_5085" /* 5085 */;
import _modDef5086 from "module_5086" /* 5086 */;
import _modDef5087 from "module_5087" /* 5087 */;
import _modDef5088 from "module_5088" /* 5088 */;
import _modDef5089 from "module_5089" /* 5089 */;
import _modDef5090 from "module_5090" /* 5090 */;
import _modDef5091 from "module_5091" /* 5091 */;
import _modDef5092 from "module_5092" /* 5092 */;
import _modDef5093 from "module_5093" /* 5093 */;
import _modDef5094 from "module_5094" /* 5094 */;
import _modDef5095 from "module_5095" /* 5095 */;
import _modDef5096 from "module_5096" /* 5096 */;
import _modDef5097 from "module_5097" /* 5097 */;
import _modDef5098 from "module_5098" /* 5098 */;
import _modDef5099 from "module_5099" /* 5099 */;
import _modDef5100 from "module_5100" /* 5100 */;
import _modDef5101 from "module_5101" /* 5101 */;
import _modDef5102 from "module_5102" /* 5102 */;
import _modDef5103 from "module_5103" /* 5103 */;
import _modDef5104 from "module_5104" /* 5104 */;
import _modDef5105 from "module_5105" /* 5105 */;
import _modDef5106 from "module_5106" /* 5106 */;
import _modDef5107 from "module_5107" /* 5107 */;
import _modDef5108 from "module_5108" /* 5108 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5109 */;
import _modDef5112 from "module_5112" /* 5112 */;
import _modDef5113 from "module_5113" /* 5113 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5114 */;
import _modDef5120 from "module_5120" /* 5120 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

const ExperimentalLfgIcon = tmp(5122);
const ChatIcon2 = tmp(5123);
const ThreadLockIcon = tmp(5124);
const ThreadIcon2 = tmp(5125);
const FolderIcon = tmp(5126);
const BookCheckIcon = tmp(5127);
const TextWarningIcon2 = tmp(5128);
const TextSpoilerIcon2 = tmp(5129);
const TextLockIcon2 = tmp(5130);
const TextControllerIcon = tmp(5131);
const TextIcon2 = tmp(5132);
const ImageWarningIcon2 = tmp(5133);
const ForumWarningIcon2 = tmp(5134);
const ForumSpoilerIcon3 = tmp(5135);
const ExperimentalLfgLockIcon = tmp(5136);
const ImageLockIcon = tmp(5137);
const ForumLockIcon2 = tmp(5138);
const ImageIcon2 = tmp(5139);
const ForumIcon2 = tmp(5140);
const GroupIcon = tmp(5141);
const AtIcon = tmp(5142);
const AnnouncementsWarningIcon2 = tmp(5143);
const AnnouncementsSpoilerIcon2 = tmp(5144);
const AnnouncementsLockIcon = tmp(5145);
const AnnouncementsIcon2 = tmp(5146);
const LockIcon3 = tmp(5147);
const StageLockIcon2 = tmp(5148);
const StageIcon2 = tmp(5149);
const VoiceLockIcon3 = tmp(5150);
const VoiceWarningIcon2 = tmp(5151);
const VoiceNormalSpoilerIcon = tmp(5152);
const VoiceNormalIcon2 = tmp(5153);
const HubIcon = tmp(5154);
const AppsWarningIcon = tmp(5155);
const AppsSpoilerIcon2 = tmp(5156);
const AppsLockIcon = tmp(5157);
const AppsIcon2 = tmp(5158);
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
      let tmp97 = _modDef5112;
    } else {
      tmp97 = _modDef5100;
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
              return _modDef5083;
            } else if (tmp5.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let tmp79 = _modDef5113;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp79 = _modDef5096;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    _modDef5097;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    tmp82(5106);
                  }
                }
                if (null != channel.linkedLobby) {
                  let tmp82Result2 = tmp82(5115);
                } else {
                  tmp82Result2 = tmp82(5084);
                }
              }
              return tmp79;
            } else if (tmp5.GUILD_FORUM === type) {
              if (isRulesChannel) {
                let tmp66 = _modDef5113;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp66 = importDefault(isMediaChannelResult ? 5105 : 5102);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    _modDef5103;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      let tmp69Result = tmp69(5116);
                    } else {
                      tmp69Result = tmp69(isMediaChannelResult ? 5117 : 5118);
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  let tmp69Result2 = tmp69(5112);
                } else {
                  tmp69Result2 = tmp69(isMediaChannelResult ? 5104 : 5101);
                }
              }
              return tmp66;
            } else if (tmp5.GUILD_MEDIA === type) {
              if (isRulesChannel) {
                let tmp56 = _modDef5113;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp56 = _modDef5105;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    _modDef5103;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp59Result = tmp59(5117);
                  }
                }
                tmp59Result = tmp59(5104);
              }
              return tmp56;
            } else if (tmp5.GROUP_DM === type) {
              return _modDef5086;
            } else if (tmp5.DM === type) {
              return _modDef5087;
            } else if (tmp5.GUILD_ANNOUNCEMENT === type) {
              if (isRulesChannel) {
                let tmp43 = _modDef5113;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp43 = _modDef5098;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    _modDef5099;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp46Result = tmp46(5119);
                  }
                }
                tmp46Result = tmp46(5088);
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
                    let tmp32Result = tmp32(5120);
                  } else {
                    tmp32Result = tmp32(5095);
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
                  _modDef5120;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp36Result = tmp36(5095);
                }
              }
              tmp36Result = tmp36(5089);
            } else if (tmp5.GUILD_VOICE === type) {
              if (obj.textFocused) {
                let tmp17Result = _modDef5100;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp17Result = tmp17(5120);
                    } else {
                      tmp17Result = tmp17(5092);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    _modDef5120;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp21(5092);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp21(5093);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp21Result4 = tmp21(5094);
                  }
                }
                tmp21Result4 = tmp21(5090);
              }
              return tmp17Result;
            } else if (tmp5.GUILD_DIRECTORY === type) {
              return _modDef5091;
            } else if (tmp5.GUILD_APP === type) {
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  return _modDef5107;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  _modDef5108;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  let tmp10Result = tmp10(5121);
                }
              }
              tmp10Result = tmp10(5085);
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
      let tmp90 = _modDef5081;
    } else {
      if (tmp5.ANNOUNCEMENT_THREAD !== type2) {
        if (tmp5.PUBLIC_THREAD !== type2) {
          tmp90 = null;
        }
      }
      tmp90 = _modDef5082;
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
    return _modDef5081;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== arg0) {
      if (tmp.PUBLIC_THREAD !== arg0) {
        if (tmp.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5082;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_CATEGORY === type) {
            return _modDef5083;
          } else {
            if (tmp.GUILD_TEXT !== type) {
              if (tmp.GUILD_FORUM !== type) {
                if (tmp.GUILD_MEDIA !== type) {
                  if (tmp.GUILD_APP === type) {
                    return _modDef5085;
                  } else if (tmp.GROUP_DM === type) {
                    return _modDef5086;
                  } else if (tmp.DM === type) {
                    return _modDef5087;
                  } else if (tmp.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5088;
                  } else if (tmp.GUILD_STAGE_VOICE === type) {
                    return _modDef5089;
                  } else if (tmp.GUILD_VOICE === type) {
                    return _modDef5090;
                  } else if (tmp.GUILD_DIRECTORY === type) {
                    return _modDef5091;
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
            return _modDef5084;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5081;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== type2) {
      if (tmp.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5082;
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
      return _modDef5090;
    case "voice-locked":
      return _modDef5092;
    case "voice-nsfw":
      return _modDef5093;
    case "voice-spoiler":
      return _modDef5094;
    case "stage":
      return _modDef5089;
    case "stage-locked":
      return _modDef5095;
    case "text":
      return _modDef5084;
    case "text-nsfw":
      return _modDef5096;
    case "text-spoiler":
      return _modDef5097;
    case "announcement":
      return _modDef5088;
    case "announcement-nsfw":
      return _modDef5098;
    case "announcement-spoiler":
      return _modDef5099;
    case "thread":
      return _modDef5082;
    case "post":
      let tmp21 = _modDef5100;
      return tmp21;
    case "message":
      tmp21 = _modDef5100;
      return tmp21;
    case "forum":
      return _modDef5101;
    case "forum-nsfw":
      return _modDef5102;
    case "forum-spoiler":
      return _modDef5103;
    case "media":
      return _modDef5104;
    case "media-nsfw":
      return _modDef5105;
    case "locked":
      return _modDef5106;
    case "app":
      return _modDef5085;
    case "app-nsfw":
      return _modDef5107;
    case "app-spoiler":
      return _modDef5108;
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
    let ThreadIcon = tmp25(5123).ChatIcon;
  } else {
    ThreadIcon = tmp25(5125).ThreadIcon;
  }
  return ThreadIcon;
};
