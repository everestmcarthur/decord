// Module ID: 15325
// Function ID: 15326
// Name: toggle
// Dependencies: [7975, 1114, 11473, 1935, 2]

// Module 15325 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aP91Ud);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.SearchResultExactCountEnabled.useSetting,
  onValueChange: explicitContentFromProto.SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.qx4cha);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aP91Ud);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.SearchResultExactCountEnabled.useSetting,
  onValueChange: explicitContentFromProto.SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.qx4cha);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ExactSearchResultCountsSetting.tsx");

export default toggle;
