// Module ID: 10105
// Function ID: 10106
// Name: isInMentionRaidExperiment
// Dependencies: [10106, 2]
// Exports: isInMentionRaidExperiment, useIsMentionRaidExperimentEnabled

// Module 10105 (isInMentionRaidExperiment)
import set from "set" /* 2 */;
import experiment from "experiment" /* 10106 */;

const result = set.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = experiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(id, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const AutomodMentionRaidLimit = experiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.useExperiment({ guildId: id, location: "988d4e_4" }, { autoTrackExposure }).enabled;
};
