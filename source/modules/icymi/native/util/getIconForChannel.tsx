// Module ID: 16528
// Function ID: 16529
// Name: getIconForChannel
// Dependencies: [1074, 5108, 5115, 5111, 5094, 5102, 5101, 2]
// Exports: getIconForChannel

// Module 16528 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5094 */;
import ImageIcon from "ImageIcon" /* 5101 */;
import ForumIcon from "ForumIcon" /* 5102 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5108 */;
import StageIcon from "StageIcon" /* 5111 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5115 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsIcon.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return VoiceNormalIcon.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return StageIcon.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return TextIcon.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return ForumIcon.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return ImageIcon.ImageIcon;
  } else {
    return TextIcon.TextIcon;
  }
};
