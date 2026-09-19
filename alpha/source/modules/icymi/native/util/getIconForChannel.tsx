// Module ID: 16827
// Function ID: 16828
// Name: getIconForChannel
// Dependencies: [1074, 5305, 5312, 5308, 5291, 5299, 5298, 2]
// Exports: getIconForChannel

// Module 16827 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5291 */;
import ImageIcon from "ImageIcon" /* 5298 */;
import ForumIcon from "ForumIcon" /* 5299 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5305 */;
import StageIcon from "StageIcon" /* 5308 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5312 */;
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
