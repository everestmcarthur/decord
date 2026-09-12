// Module ID: 15967
// Function ID: 15968
// Name: DefultGuildsRestrictedSetting
// Dependencies: [1935, 2]
// Exports: useDefaultGuildsRestricted

// Module 15967 (DefultGuildsRestrictedSetting)
import UserSettings from "UserSettings" /* 1935 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = UserSettings.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
    const tmp3 = setting || setting;
  }
  return setting1;
};
