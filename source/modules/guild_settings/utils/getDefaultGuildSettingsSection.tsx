// Module ID: 9075
// Function ID: 9076
// Name: getDefaultGuildSettingsSection
// Dependencies: [1074, 2]
// Exports: getDefaultGuildSettingsSection

// Module 9075 (getDefaultGuildSettingsSection)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const GuildSettingsSections = ME.GuildSettingsSections;
const result = set.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
