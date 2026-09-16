// Module ID: 16624
// Function ID: 16625
// Name: getIconForChannel
// Dependencies: [1074, 5179, 5186, 5182, 5165, 5173, 5172, 2]
// Exports: getIconForChannel

// Module 16624 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5165 */;
import ImageIcon from "ImageIcon" /* 5172 */;
import ForumIcon from "ForumIcon" /* 5173 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5179 */;
import StageIcon from "StageIcon" /* 5182 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5186 */;
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
