// Module ID: 14860
// Function ID: 14861
// Name: toggle
// Dependencies: [6595, 7975, 1074, 14827, 504, 4904, 1114, 4994, 14858, 14859, 11473, 2]

// Module 14860 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import setDefault from "set" /* 4904 */;
import componentDidMountDefault from "componentDidMount" /* 4994 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14827 */;
import handleRequestSuccess from "handleRequestSuccess" /* 14858 */;
import closure_3 from "hasConsented" /* 6595 */;
import { Consents } from "ME" /* 1074 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MNKzyg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => closure_3.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      const obj3 = handleRequestSuccess;
      handleRequestSuccess.setConsents(items, []).catch((message) => callback(14859).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = handleRequestSuccess.setConsents(items, []);
    } else {
      let obj = setDefault;
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t["9SNpzv"]);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.gJvDDh);
      const intl3 = getSystemLocale.intl;
      obj[2] = intl3.string(getSystemLocale.t["9g5UGw"]);
      const intl4 = getSystemLocale.intl;
      obj[3] = intl4.string(getSystemLocale.t["+ZLPw9"]);
      obj[4] = componentDidMountDefault.Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return callback(14858).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default createToggle;
