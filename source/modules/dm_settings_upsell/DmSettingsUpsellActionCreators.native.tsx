// Module ID: 17344
// Function ID: 17345
// Dependencies: [17345, 510, 4527, 17346, 1896, 17347, 2]

// Module 17344
import set from "set" /* 2 */;
import Storage3 from "Storage" /* 510 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import DM_SETTINGS_UPSELL_LAST_SHOWN_KEY from "DM_SETTINGS_UPSELL_LAST_SHOWN_KEY" /* 17345 */;

({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: c4 } = DM_SETTINGS_UPSELL_LAST_SHOWN_KEY);
let result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    const value = Storage.get(closure_3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= closure_4) {
        tmp(17347).trackEvent(tmp(17347).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = tmp(17347);
      }
    }
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(17346, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(closure_3, timestamp);
  }
};
