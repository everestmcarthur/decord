// Module ID: 17582
// Function ID: 17583
// Name: GuildPowerupsManager
// Dependencies: [1980, 4276, 4459, 4526, 7228, 1983, 4550, 4564, 4566, 4567, 12652, 12656, 16297, 4879, 4565, 12645, 12631, 4535, 2]

// Module 17582 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12645 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4276 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4459 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4526 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

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
        const GameServerExperiment = tmp10(4550).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp10(4564).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp10(4566).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp10(4567).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(12652).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(4550);
        if (!tmp10Result9.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(16297).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4879).isMobile;
          if (isMobile) {
            isMobile = tmp10(4566).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result11 = tmp10(4566);
          }
          if (isMobile) {
            isMobile = tmp10(16297).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result12 = tmp10(16297);
          }
          if (isMobile) {
            isMobile = tmp10(4565).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result13 = tmp10(4565);
          }
          let showCoachmark = tmp10(4879).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(16297).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result14 = tmp10(16297);
          }
          if (showCoachmark) {
            showCoachmark = BoostToUnlockMobileCoachmarkExperimentDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
          }
          if (tmp10(4879).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result10 = tmp10(16297);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(12631).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result15 = tmp10(12631);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(12631).fetchGuildBoostEntitlements(guildId);
          const tmp10Result16 = tmp10(12631);
        }
        obj9 = GuildPowerupsStore;
        tmp10Result9 = tmp10(12656);
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
    const guildBoostEntitlements = tmp(12631).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12631);
    const appliedGuildBoostsForGuild = tmp(4535).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4535);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
