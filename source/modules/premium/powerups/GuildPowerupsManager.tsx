// Module ID: 17457
// Function ID: 17458
// Name: GuildPowerupsManager
// Dependencies: [1979, 4245, 4428, 4496, 7192, 1982, 4520, 4534, 4536, 4537, 12604, 12608, 16238, 4848, 4535, 12597, 12583, 4505, 2]

// Module 17457 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12597 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4245 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4428 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4496 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7192 */;

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
        const GameServerExperiment = tmp10(4520).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp10(4534).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp10(4536).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp10(4537).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(12604).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(4520);
        if (!tmp10Result9.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(16238).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4848).isMobile;
          if (isMobile) {
            isMobile = tmp10(4536).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result11 = tmp10(4536);
          }
          if (isMobile) {
            isMobile = tmp10(16238).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result12 = tmp10(16238);
          }
          if (isMobile) {
            isMobile = tmp10(4535).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result13 = tmp10(4535);
          }
          let showCoachmark = tmp10(4848).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(16238).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result14 = tmp10(16238);
          }
          if (showCoachmark) {
            showCoachmark = BoostToUnlockMobileCoachmarkExperimentDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
          }
          if (tmp10(4848).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result10 = tmp10(16238);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(12583).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result15 = tmp10(12583);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(12583).fetchGuildBoostEntitlements(guildId);
          const tmp10Result16 = tmp10(12583);
        }
        obj9 = GuildPowerupsStore;
        tmp10Result9 = tmp10(12608);
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
    const guildBoostEntitlements = tmp(12583).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12583);
    const appliedGuildBoostsForGuild = tmp(4505).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4505);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
