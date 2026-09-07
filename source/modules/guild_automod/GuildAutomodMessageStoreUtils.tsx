// Module ID: 13766
// Function ID: 13767
// Name: isNotAutomodEmbed
// Dependencies: [1095, 2]
// Exports: isNotAutomodEmbed

// Module 13766 (isNotAutomodEmbed)
import set from "set" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1095 */;

const result = set.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStoreUtils.tsx");

export const isNotAutomodEmbed = function isNotAutomodEmbed(type) {
  type = type.type;
  return type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && type !== MessageEmbedTypes.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
};
