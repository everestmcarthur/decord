// Module ID: 15090
// Function ID: 15091
// Name: SettingsClipsScreen
// Dependencies: [19, 8091, 21, 11614, 14802, 2]
// Exports: default

// Module 15090 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 11614 */;
import SettingLayoutDefault from "SettingLayout" /* 14802 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8091).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = noop.useMemo(() => {
    const obj = { settings: null };
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    obj.settings = items;
    const sections = [obj];
    return SettingBuilders.createList({ sections });
  }, []);
  return jsx(SettingLayoutDefault, { node });
};
