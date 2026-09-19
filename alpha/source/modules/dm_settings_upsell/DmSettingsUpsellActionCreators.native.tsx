// Module ID: 17752
// Function ID: 17753
// Name: DmSettingsUpsellActionCreators
// Dependencies: [17753, 510, 4723, 17754, 1980, 17755, 2]

// Module 17752 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 17753 */;
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
        tmp(17755).trackEvent(tmp(17755).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = tmp(17755);
      }
    }
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17754, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(React3, timestamp);
  }
};
