// Module ID: 10191
// Function ID: 10192
// Name: guild_automod/ExperimentUtils
// Dependencies: [10192, 2]
// Exports: isInMentionRaidExperiment, useIsMentionRaidExperimentEnabled

// Module 10191 (guild_automod/ExperimentUtils)
import AutomodExperiment from "AutomodExperiment" /* 10192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(id, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.useExperiment({ guildId: id, location: "988d4e_4" }, { autoTrackExposure }).enabled;
};
