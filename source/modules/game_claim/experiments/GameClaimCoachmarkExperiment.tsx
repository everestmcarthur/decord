// Module ID: 16295
// Function ID: 16296
// Name: GameClaimCoachmarkExperiment
// Dependencies: [4488, 2]
// Exports: useGameClaimCoachmarkEnabled

// Module 16295 (GameClaimCoachmarkExperiment)
import createExperiment from "module_4488" /* 4488 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-02_game_claim_coachmark", label: "Game Claim Coachmark", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
