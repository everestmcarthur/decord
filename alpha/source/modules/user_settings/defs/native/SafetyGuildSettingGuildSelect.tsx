// Module ID: 16187
// Function ID: 16188
// Name: SafetyGuildSettingGuildSelect
// Dependencies: [19, 5650, 14960, 16188, 8232, 4723, 16189, 1980, 16190, 1115, 11723, 2]

// Module 16187 (SafetyGuildSettingGuildSelect)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import useDMPermissionsOverrideCount from "useDMPermissionsOverrideCount" /* 16190 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5650 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14960 */;

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(16188);
({ getSelectedGuildId: metroRequire, GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(8232).MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
const SettingBuilders = fn(11723);
const guildSelector = SettingBuilders.createGuildSelector({
  unsearchable: true,
  useSelectedGuildId() {
    const field = UserSettingSearchStore.useField("selected");
    items = [field];
    const effect = noop.useEffect(() => {
      const first = SortedGuildStore.getFlattenedGuildIds()[0];
      let hasItem = items.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = timestampProducer() === React5;
      }
      if (hasItem) {
        React6(first);
      }
    }, items);
    return closure_9().selectedGuildId;
  },
  useDescription() {
    const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
    if (React7().selectedGuildId === React5) {
      if (0 !== dMPermissionsOverrideCount) {
        const intl = tmp(1115).intl;
        const obj2 = { count: dMPermissionsOverrideCount };
        return intl.format(tmp(1115).t.eugFxh, obj2);
      }
    }
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16189, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;
