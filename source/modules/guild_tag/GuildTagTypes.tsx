// Module ID: 9077
// Function ID: 9078
// Name: toServerGuildProfile
// Dependencies: [2]
// Exports: toServerGuildProfile

// Module 9077 (toServerGuildProfile)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_tag/GuildTagTypes.tsx");

export const toServerGuildProfile = function toServerGuildProfile(profile) {
  return { tag: profile.tag };
};
