// Module ID: 17623
// Function ID: 17624
// Name: GuildPowerupsManager
// Dependencies: [1980, 4278, 4461, 4528, 7232, 1983, 4552, 4566, 4568, 4569, 12661, 12665, 16327, 4881, 4567, 12640, 4537, 2]

// Module 17623 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4528 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7232 */;

require = fn;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_4, applyArgumentsResult.handleSelectedGuildChange);
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
    if (!obj11.isFavoritesGuildId(guildId)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = tmp9(4552).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp9(4566).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp9(4568).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp9(4569).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp9(12661).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = tmp9(4552);
        if (!tmp9Result9.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp9(16327).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp9(4881).isMobile;
          if (isMobile) {
            isMobile = tmp9(4568).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result11 = tmp9(4568);
          }
          if (isMobile) {
            isMobile = tmp9(16327).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result12 = tmp9(16327);
          }
          if (isMobile) {
            isMobile = tmp9(4567).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result13 = tmp9(4567);
          }
          let isMobile2 = tmp9(4881).isMobile;
          if (isMobile2) {
            isMobile2 = tmp9(16327).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = tmp9(16327);
          }
          if (tmp9(4881).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result10 = tmp9(16327);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp9(12640).fetchPowerupCatalogForGuild(guildId);
          const tmp9Result15 = tmp9(12640);
        }
        if (obj8.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp9(12640).fetchGuildBoostEntitlements(guildId);
          const tmp9Result16 = tmp9(12640);
        }
        obj8 = GuildPowerupsStore;
        tmp9Result9 = tmp9(12665);
      }
    }
    obj11 = FavoritesUtils;
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
    const guildBoostEntitlements = tmp(12640).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12640);
    const appliedGuildBoostsForGuild = tmp(4537).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4537);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
