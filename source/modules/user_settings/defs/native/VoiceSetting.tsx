// Module ID: 15249
// Function ID: 15250
// Name: route
// Dependencies: [1908, 1074, 504, 1114, 11473, 10010, 15250, 2]

// Module 15249 (route)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import closure_2 from "_detectH265HardwareDecode" /* 1908 */;
import ME from "ME" /* 1074 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
({ InputModes: c3, UserSettingsSections } = ME);
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.K3lovD);
  },
  parent: null,
  IconComponent: require("MicrophoneIcon").MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    const items = [closure_2];
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = tmp(1114).intl;
      let stringResult = intl2.string(tmp(1114).t.Q8gkVL);
    } else {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.cHCEOJ);
    }
    return stringResult;
  },
  screen: createToggle,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  }
};
createToggle = {
  route: UserSettingsSections.VOICE,
  getComponent() {
    return require(15250) /* KrispLogo */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default createToggle;
