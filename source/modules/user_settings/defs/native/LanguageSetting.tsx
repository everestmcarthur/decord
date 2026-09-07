// Module ID: 15423
// Function ID: 15424
// Name: route
// Dependencies: [2025, 1074, 504, 1114, 11473, 15424, 15426, 2]

// Module 15423 (route)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import closure_2 from "_getSystemLocale" /* 2025 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.IHMsPn);
  },
  parent: null,
  IconComponent: require("LanguageIcon").LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [closure_2];
    _require = _require(504).useStateFromStores(items, () => locale.locale);
    const obj = _require(504);
    const tmp = _require;
    const availableLocales = _require(1114).getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1114).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.LANGUAGE,
  getComponent() {
    return require(15426) /* handleLanguageChange */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default createToggle;
