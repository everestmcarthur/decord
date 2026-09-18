// Module ID: 15313
// Function ID: 15314
// Name: DefaultGuildThemePreferenceSetting
// Dependencies: [19, 7976, 1935, 1114, 1187, 11473, 4488, 2]

// Module 15313 (DefaultGuildThemePreferenceSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4488 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11473);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q7mm4g);
  },
  parent: fn(7976).MobileUserSettings.APPEARANCE,
  useValue: fn(1935).DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: function useDefaultGuildThemePreferenceOptions() {
    return noop.useMemo(() => {
      const obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.aN3RNQ);
      obj.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
      const items = [obj, ];
      const obj2 = { label: null, value: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.js8y7t);
      obj2.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
      items[1] = obj2;
      return items;
    }, []);
  },
  usePredicate() {
    return ServerThemeUserExperiment.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;
