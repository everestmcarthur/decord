// Module ID: 16565
// Function ID: 16566
// Name: getIconForChannel
// Dependencies: [1074, 5146, 5153, 5149, 5132, 5140, 5139, 2]
// Exports: getIconForChannel

// Module 16565 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5132 */;
import ImageIcon from "ImageIcon" /* 5139 */;
import ForumIcon from "ForumIcon" /* 5140 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5146 */;
import StageIcon from "StageIcon" /* 5149 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5153 */;
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
