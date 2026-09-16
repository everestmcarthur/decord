// Module ID: 17550
// Function ID: 17551
// Name: DmSettingsUpsellActionCreators
// Dependencies: [17551, 510, 4605, 17552, 1897, 17553, 2]

// Module 17550 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 17551 */;
import size from "module_2" /* 2 */;

({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: closure_4 } = DmSettingsUpsellConstants);
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    value = Storage.get(React3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= React4) {
        tmp(17553).trackEvent(tmp(17553).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = tmp(17553);
      }
    }
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17552, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(React3, timestamp);
  }
};
