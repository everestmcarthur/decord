// Module ID: 16654
// Function ID: 16655
// Name: getIconForChannel
// Dependencies: [1074, 5181, 5188, 5184, 5167, 5175, 5174, 2]
// Exports: getIconForChannel

// Module 16654 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5167 */;
import ImageIcon from "ImageIcon" /* 5174 */;
import ForumIcon from "ForumIcon" /* 5175 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5181 */;
import StageIcon from "StageIcon" /* 5184 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5188 */;
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
