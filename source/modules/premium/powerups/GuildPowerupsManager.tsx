// Module ID: 17687
// Function ID: 17688
// Name: GuildPowerupsManager
// Dependencies: [1980, 4361, 4543, 4610, 7314, 1983, 4634, 4648, 4650, 4651, 12752, 12756, 16424, 4963, 4649, 12731, 4619, 2]

// Module 17687 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4361 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4543 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4610 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7314 */;

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
        const GameServerExperiment = tmp9(4634).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp9(4648).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp9(4650).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp9(4651).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp9(12752).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = tmp9(4634);
        if (!tmp9Result9.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp9(16424).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp9(4963).isMobile;
          if (isMobile) {
            isMobile = tmp9(4650).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result11 = tmp9(4650);
          }
          if (isMobile) {
            isMobile = tmp9(16424).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result12 = tmp9(16424);
          }
          if (isMobile) {
            isMobile = tmp9(4649).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result13 = tmp9(4649);
          }
          let isMobile2 = tmp9(4963).isMobile;
          if (isMobile2) {
            isMobile2 = tmp9(16424).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = tmp9(16424);
          }
          if (tmp9(4963).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result10 = tmp9(16424);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp9(12731).fetchPowerupCatalogForGuild(guildId);
          const tmp9Result15 = tmp9(12731);
        }
        if (obj8.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp9(12731).fetchGuildBoostEntitlements(guildId);
          const tmp9Result16 = tmp9(12731);
        }
        obj8 = GuildPowerupsStore;
        tmp9Result9 = tmp9(12756);
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
    const guildBoostEntitlements = tmp(12731).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12731);
    const appliedGuildBoostsForGuild = tmp(4619).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4619);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
