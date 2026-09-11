// Module ID: 14854
// Function ID: 14855
// Name: AccountWebAuthnViewSetting
// Dependencies: [19, 14712, 1371, 8050, 1074, 4951, 1114, 6669, 504, 11564, 14715, 2]

// Module 14854 (AccountWebAuthnViewSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4951 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6669 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14712 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SettingBuilders = fn(11564);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.y7SXYX);
  },
  parent: fn(8050).MobileUserSettings.ACCOUNT,
  usePreNavigationAction: function useAccountCanUseWebAuthnView() {
    return noop.useCallback(() => {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      if (!flag) {
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.v740sh);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.uggF7o);
        AlertActionCreatorsDefault.show(obj2);
      }
      return flag;
    }, []);
  },
  useTrailing: function useAccountSecurityKeysSettingTrailing() {
    if (!WebAuthnStore.hasFetchedCredentials()) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    }
    const items = [WebAuthnStore];
    return initialize.useStateFromStores(items, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
    });
  },
  unsearchable: true,
  screen: {
    route: fn(1074).UserSettingsSections.WEBAUTHN_VIEW,
    getComponent() {
      return require("UserSettingsWebAuthn").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default route;
