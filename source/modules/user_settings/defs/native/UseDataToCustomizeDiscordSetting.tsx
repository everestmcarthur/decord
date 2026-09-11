// Module ID: 14912
// Function ID: 14913
// Name: UseDataToCustomizeDiscordSetting
// Dependencies: [6666, 8049, 1074, 14879, 504, 4950, 1114, 5045, 14910, 14911, 11562, 2]

// Module 14912 (UseDataToCustomizeDiscordSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4950 */;
import common_AlertDefault from "common/Alert" /* 5045 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14879 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14910 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 14911 */;
import ConsentStore from "ConsentStore" /* 6666 */;

require = fn;
const Consents = fn(1074).Consents;
const SettingBuilders = fn(11562);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8049).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [ConsentStore];
    return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      ConsentActionCreators.setConsents(items, []).catch((error) => showDataPrivacyRateLimitAlert.showDataPrivacyRateLimitAlert(error.message));
      const setConsentsResult = ConsentActionCreators.setConsents(items, []);
    } else {
      const obj2 = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["9SNpzv"]);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.gJvDDh);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t["9g5UGw"]);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t["+ZLPw9"]);
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      obj2.onConfirm = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return ConsentActionCreators.setConsents([], items);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default toggle;
