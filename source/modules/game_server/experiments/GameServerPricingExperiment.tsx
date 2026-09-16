// Module ID: 12652
// Function ID: 12653
// Name: GameServerPricingExperiment
// Dependencies: [4551, 4550, 2]
// Exports: useIsGameServerPricingEnabled

// Module 12652 (GameServerPricingExperiment)
import GameServerExperiment from "GameServerExperiment" /* 4550 */;
import createExperiment from "module_4551" /* 4551 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-03_game_server_pricing", label: "Game Server Pricing", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = function useIsGameServerPricingEnabled(guildId, useGuildPowerupsChannelListPopout) {
  let enabled = GameServerExperiment.useGameServerEnabled(guildId, useGuildPowerupsChannelListPopout);
  if (enabled) {
    enabled = experiment.useExperiment(obj2, { autoTrackExposure: false }).enabled;
  }
  return enabled;
};
