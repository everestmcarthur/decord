// Module ID: 15942
// Function ID: 15943
// Name: SafetyGuildSettingDirectMessages
// Dependencies: [1979, 15936, 8049, 11563, 14879, 15943, 1935, 4950, 1114, 5045, 7068, 15944, 11562, 2]

// Module 15942 (SafetyGuildSettingDirectMessages)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4950 */;
import common_AlertDefault from "common/Alert" /* 5045 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14879 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 15943 */;
import useAllowFriendsFromMutualGuildsOnly from "useAllowFriendsFromMutualGuildsOnly" /* 15944 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(15936);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
let closure_6 = fn(11563).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
const SettingBuilders = fn(11562);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (allowFriendsFromMutualGuildsOnly) {
      let stringResult = string(t.PMsfcH);
    } else {
      stringResult = string(t.RAQUSN);
    }
    return stringResult;
  },
  useDescription() {
    const allowFriendsFromMutualGuildsOnly = useAllowFriendsFromMutualGuildsOnly.useAllowFriendsFromMutualGuildsOnly();
    if (hasOwnProperty().selectedGuildId === closure_6) {
      const intl2 = tmp(1114).intl;
      const string2 = intl2.string;
      let XXGmuB = tmp(1114).t;
      if (allowFriendsFromMutualGuildsOnly) {
        XXGmuB = XXGmuB.XXGmuB;
        let string2Result = string2(XXGmuB);
      } else {
        string2Result = string2(XXGmuB.wbYDfT);
      }
    } else {
      const intl = tmp(1114).intl;
      const string = intl.string;
      const t = tmp(1114).t;
      if (allowFriendsFromMutualGuildsOnly) {
        let stringResult = string(t.F9WY3f);
      } else {
        stringResult = string(t.G7c3Xo);
      }
      return stringResult;
    }
  },
  parent: fn(8049).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let tmp2 = !setting.includes(selectedGuildId);
    if (selectedGuildId === closure_6) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const tmp = closure_4();
    if (tmp === closure_6) {
      _require = !arg0;
      const obj2 = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null };
      const intl = require("util").intl;
      obj2.title = intl.string(require("util").t.Hq4ApA);
      const intl2 = require("util").intl;
      obj2.body = intl2.string(require("util").t.qTCYun);
      const intl3 = require("util").intl;
      obj2.confirmText = intl3.string(require("util").t.p89ACt);
      const intl4 = require("util").intl;
      obj2.cancelText = intl4.string(require("util").t.gm1Vej);
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      obj2.onConfirm = function onConfirm() {
        const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(closure_0);
        const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
        if (closure_0) {
          let guildIds = GuildStore.getGuildIds();
        } else {
          guildIds = [];
        }
        RestrictedGuildIds.updateSetting(guildIds);
      };
      obj2.onCancel = function onCancel() {
        const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
        DefaultGuildsRestrictedV2.updateSetting(closure_0);
      };
      AlertActionCreatorsDefault.show(obj2);
    } else {
      const sanitizedRestrictedGuilds = require("UserSettingsUtils").getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(tmp);
      } else {
        sanitizedRestrictedGuilds.add(tmp);
      }
      let RestrictedGuildIds = require("UserSettings").RestrictedGuildIds;
      const _Array = Array;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      const obj = require("UserSettingsUtils");
    }
  },
  useIsDisabled() {
    let isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
    if (isParentallyControlled) {
      isParentallyControlled = tmp2 === closure_6;
    }
    return isParentallyControlled;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingDirectMessages.tsx");

export default toggle;
