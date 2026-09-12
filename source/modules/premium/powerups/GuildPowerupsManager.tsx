// Module ID: 17486
// Function ID: 17487
// Name: GuildPowerupsManager
// Dependencies: [1979, 4275, 4458, 4525, 7221, 1982, 4549, 4563, 4565, 4566, 12638, 12642, 16262, 4877, 4564, 12631, 12617, 4534, 2]

// Module 17486 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12631 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4525 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_5, applyArgumentsResult.handleSelectedGuildChange);
    obj1 = { GUILD_POWERUP_ENTITLEMENTS_CREATE: null, GUILD_POWERUP_ENTITLEMENTS_DELETE: null, GUILD_APPLIED_BOOSTS_UPDATE: null };
    handleEntitlementUpdate = applyArgumentsResult.handleEntitlementUpdate;
    obj1.GUILD_POWERUP_ENTITLEMENTS_CREATE = handleEntitlementUpdate.bind(applyArgumentsResult);
    handleEntitlementUpdate2 = applyArgumentsResult.handleEntitlementUpdate;
    obj1.GUILD_POWERUP_ENTITLEMENTS_DELETE = handleEntitlementUpdate2.bind(applyArgumentsResult);
    handleAppliedBoostUpdate = applyArgumentsResult.handleAppliedBoostUpdate;
    obj1.GUILD_APPLIED_BOOSTS_UPDATE = handleAppliedBoostUpdate.bind(applyArgumentsResult);
    applyArgumentsResult.actions = obj1;
    return applyArgumentsResult;
  }
}
const prototype = GuildPowerupsManager.prototype;
prototype["handleSelectedGuildChange"] = function handleSelectedGuildChange() {
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    if (!obj12.isFavoritesGuildId(guildId)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = tmp10(4549).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp10(4563).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp10(4565).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp10(4566).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(12638).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(4549);
        if (!tmp10Result9.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(16262).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4877).isMobile;
          if (isMobile) {
            isMobile = tmp10(4565).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result11 = tmp10(4565);
          }
          if (isMobile) {
            isMobile = tmp10(16262).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result12 = tmp10(16262);
          }
          if (isMobile) {
            isMobile = tmp10(4564).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result13 = tmp10(4564);
          }
          let showCoachmark = tmp10(4877).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(16262).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result14 = tmp10(16262);
          }
          if (showCoachmark) {
            showCoachmark = BoostToUnlockMobileCoachmarkExperimentDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
          }
          if (tmp10(4877).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result10 = tmp10(16262);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(12617).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result15 = tmp10(12617);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(12617).fetchGuildBoostEntitlements(guildId);
          const tmp10Result16 = tmp10(12617);
        }
        obj9 = GuildPowerupsStore;
        tmp10Result9 = tmp10(12642);
      }
    }
    obj12 = FavoritesUtils;
  }
};
prototype["handleEntitlementUpdate"] = function handleEntitlementUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["handleAppliedBoostUpdate"] = function handleAppliedBoostUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["refreshGuildPowerups"] = function refreshGuildPowerups(guildId) {
  if (true === obj.getHasAllocateBoostPermission(PermissionStore, GuildStore.getGuild(guildId))) {
    const guildBoostEntitlements = tmp(12617).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12617);
    const appliedGuildBoostsForGuild = tmp(4534).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4534);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
