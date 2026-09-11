// Module ID: 17425
// Function ID: 17426
// Name: DmSettingsUpsellActionCreators
// Dependencies: [17426, 510, 4574, 17427, 1896, 17428, 2]

// Module 17425 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 17426 */;
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
        tmp(17428).trackEvent(tmp(17428).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = tmp(17428);
      }
    }
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17427, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(React3, timestamp);
  }
};
