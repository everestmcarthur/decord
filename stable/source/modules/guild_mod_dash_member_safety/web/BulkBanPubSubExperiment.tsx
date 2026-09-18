// Module ID: 7322
// Function ID: 7323
// Name: BulkBanPubSubExperiment
// Dependencies: [1433, 2]
// Exports: useBulkBanPubSubExperimentConfig

// Module 7322 (BulkBanPubSubExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-pubsub-bulk-ban-users", kind: "user", defaultConfig: { usePubSub: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { usePubSub: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx");

export default apexExperiment;
export const useBulkBanPubSubExperimentConfig = function useBulkBanPubSubExperimentConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
