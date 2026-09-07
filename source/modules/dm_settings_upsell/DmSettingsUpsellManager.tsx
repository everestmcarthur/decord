// Module ID: 17343
// Function ID: 17344
// Name: handleDmSettingsUpsellShow
// Dependencies: [1074, 7118, 17344, 1272, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 17343 (handleDmSettingsUpsellShow)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import sendRequest from "sendRequest" /* 1272 */;
import initializeDefault from "initialize" /* 7118 */;
import _modDef17344 from "module_17344" /* 17344 */;

const Endpoints = ME.Endpoints;
initializeDefault;
class DmSettingsUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { DM_SETTINGS_UPSELL_SHOW: applyArgumentsResult.handleDmSettingsUpsellShow };
    return applyArgumentsResult;
  }
}
DmSettingsUpsellManager.prototype["handleDmSettingsUpsellShow"] = function handleDmSettingsUpsellShow(guildId) {
  const result = _modDef17344.openDmSettingsUpsellModal(guildId.guildId);
};
const dmSettingsUpsellManager = new DmSettingsUpsellManager();
let result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default dmSettingsUpsellManager;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = sendRequest.HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};
