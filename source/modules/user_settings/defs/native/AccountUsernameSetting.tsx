// Module ID: 14756
// Function ID: 14757
// Name: AccountUsernameSetting
// Dependencies: [19, 1371, 8049, 1074, 21, 504, 4451, 11965, 4602, 11562, 1114, 14757, 2]

// Module 14756 (AccountUsernameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4451 */;
import Text_Text from "Text/Text" /* 4602 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 11965 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11562);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IEpCBQ);
  },
  parent: fn(8049).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" }));
  },
  useDescription: function useAccountUsernameSettingDescription() {
    const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first = nick[0];
      }
    }
    let tmp5 = null;
    if (null != first) {
      const obj2 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
      tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
    }
    return tmp5;
  },
  screen: {
    route: fn(1074).UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;
