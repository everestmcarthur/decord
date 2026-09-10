// Module ID: 16405
// Function ID: 16406
// Name: YouAccountActionSheet
// Dependencies: [19, 17, 12443, 1183, 1385, 7734, 4419, 1371, 1074, 12444, 21, 4574, 576, 5625, 14138, 14135, 14136, 14137, 1935, 10123, 4541, 5699, 1114, 5702, 9802, 504, 15208, 11978, 9390, 15299, 1229, 16406, 11352, 15301, 4418, 1178, 15984, 16408, 1242, 7196, 12447, 5137, 4570, 10122, 5701, 7214, 9091, 16413, 1896, 16403, 11142, 4275, 10912, 5621, 11145, 10927, 8790, 11152, 7103, 5640, 7211, 7163, 4987, 16414, 15776, 2]

// Module 16405 (YouAccountActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1229 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import useToken from "useToken" /* 4275 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import Text_Text from "Text/Text" /* 4570 */;
import Pressables from "Pressables" /* 5137 */;
import Card from "Card" /* 5621 */;
import useDesignToggleDefault from "useDesignToggle" /* 5640 */;
import TableRadioGroup from "TableRadioGroup" /* 5699 */;
import TableRadioRow from "TableRadioRow" /* 5702 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7163 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7196 */;
import ActionSheet from "ActionSheet" /* 7211 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9390 */;
import getChannelA11yLabel from "getChannelA11yLabel" /* 9802 */;
import FocusModeUtils from "FocusModeUtils" /* 10122 */;
import setUserStatusDefault from "setUserStatus" /* 10123 */;
import useGameMentionsAsPlainText from "useGameMentionsAsPlainText" /* 10912 */;
import userSettingToActivity from "userSettingToActivity" /* 11142 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11145 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 11152 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11352 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 11978 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12447 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 15208 */;
import ThemeLightIcon from "ThemeLightIcon" /* 15299 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 15301 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 16406 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 16408 */;
import noop from "module_19" /* 19 */;
import MultiAccountStore from "MultiAccountStore" /* 12443 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserRecord from "UserRecord" /* 1385 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7734 */;
import StreamerModeStore from "StreamerModeStore" /* 4419 */;
import UserStore from "UserStore" /* 1371 */;

const Stack_Stack = tmp(4987);
const TableRowGroup = currentLocale(5701);
const TableSwitchRow = currentLocale(7214);
const BellSlashIcon = currentLocale(9091);
require = fn;
function YouStatusRadioGroup() {
  const memo = noop.useMemo(() => {
    const obj = { icon: closure_1_19(setting(5625).TableRowIcon, { source: closure_1(14138), variant: "text-status-online" }), value: constants.ONLINE };
    const items = [obj, , , ];
    const obj3 = { icon: null, value: null };
    const obj2 = { source: closure_1(14138), variant: "text-status-online" };
    obj3.icon = closure_1_19(setting(5625).TableRowIcon, { source: closure_1(14135), variant: "text-status-idle" });
    obj3.value = constants.IDLE;
    items[1] = obj3;
    const obj5 = { icon: null, value: null };
    const obj4 = { source: closure_1(14135), variant: "text-status-idle" };
    obj5.icon = closure_1_19(setting(5625).TableRowIcon, { source: closure_1(14136), variant: "text-status-dnd" });
    obj5.value = constants.DND;
    items[2] = obj5;
    const obj7 = { icon: null, value: null };
    const obj6 = { source: closure_1(14136), variant: "text-status-dnd" };
    obj7.icon = closure_1_19(setting(5625).TableRowIcon, { source: closure_1(14137), variant: "text-status-offline" });
    obj7.value = constants.INVISIBLE;
    items[3] = obj7;
    return items;
  }, []);
  const StatusSetting = setting(1935).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(1935).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  let items = [setting];
  const callback = noop.useCallback((nextStatus) => {
    setUserStatusDefault({ prevStatus: setting, nextStatus });
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let intl = setting(1114).intl;
  obj.title = intl.string(setting(1114).t["0DPAZH"]);
  obj.onChange = callback;
  obj.defaultValue = setting;
  obj.children = memo.map((value) => {
    const obj = {};
    const merged = Object.assign(value);
    obj.label = getChannelA11yLabel.getStatusLabel(value.value);
    let formatToPlainStringResult;
    if (value.value === setting) {
      if (null != closure_1) {
        if ("0" !== tmp6) {
          const intl = tmp2(1114).intl;
          const obj3 = { endTime: null };
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(tmp6));
          obj3.endTime = date.toLocaleString(tmp2(1114).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t.BWD8fs, obj3);
        }
      }
    }
    obj.subLabel = formatToPlainStringResult;
    return closure_2_19(TableRadioRow.TableRadioRow, obj, value.value);
  });
  return closure_19(setting(5699).TableRadioGroup, obj);
}
function ThemeRadioGroup() {
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  let obj2 = { children: null };
  const callback = noop.useCallback((arg0) => {
    const result = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
    CustomThemeMobileActionCreators.resetCustomTheme();
    UserSettingsActionCreatorsDefault.updateTheme(arg0);
  }, []);
  const obj3 = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.Ksh3ik);
  obj3.onChange = callback;
  obj3.defaultValue = stateFromStores;
  const obj4 = { icon: closure_1_19(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  obj4.label = ClientThemesUtils.getThemeName(constants3.LIGHT);
  obj4.value = constants3.LIGHT;
  const items1 = [closure_1_19(TableRadioRow.TableRadioRow, obj4), , , ];
  const obj6 = { icon: closure_1_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: null, value: null };
  obj6.label = ClientThemesUtils.getThemeName(constants3.DARK);
  obj6.value = constants3.DARK;
  items1[1] = closure_1_19(TableRadioRow.TableRadioRow, obj6);
  const obj8 = { icon: closure_1_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  obj8.label = ClientThemesUtils.getThemeName(constants3.DARKER);
  obj8.value = constants3.DARKER;
  items1[2] = closure_1_19(TableRadioRow.TableRadioRow, obj8);
  const obj10 = { icon: closure_1_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
  obj10.label = ClientThemesUtils.getThemeName(constants3.MIDNIGHT);
  obj10.value = constants3.MIDNIGHT;
  items1[3] = closure_1_19(TableRadioRow.TableRadioRow, obj10);
  obj3.children = items1;
  obj2.children = closure_1_20(TableRadioGroup.TableRadioGroup, obj3);
  return closure_1_19(hasOwnProperty, obj2);
}
function YouAccountRadioGroup() {
  const tmp = closure_21();
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = stateFromStores(504);
  const multiAccountUsers = stateFromStores(15984).useMultiAccountUsers().multiAccountUsers;
  closure_129_0 = multiAccountUsers;
  let obj2 = stateFromStores(15984);
  const items1 = [StreamerModeStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  closure_129_1 = stateFromStores1;
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = noop.useMemo(() => stateFromStores.map((id) => {
    const obj = new UserRecord(id);
    let combined = null;
    if (!closure_1_1) {
      combined = null;
      if (!obj.hasUniqueUsername()) {
        const _HermesInternal = HermesInternal;
        combined = "#" + obj.discriminator;
      }
    }
    let str2 = "always";
    if (closure_1_1) {
      str2 = "never";
    }
    const obj3 = { label: multiAccountUsers(4418).getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
    const obj4 = { user: obj, guildId: "Array", size: stateFromStores(1178).AvatarSizes.REFRESH_MEDIUM_32 };
    obj3.icon = closure_2_19(stateFromStores(1178).Avatar, obj4);
    return obj3;
  }), items2);
  const items3 = [multiAccountUsers, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  let tmp8 = null;
  if (null != stateFromStores) {
    let obj4 = { style: tmp.account, children: null };
    let obj5 = { style: tmp.manage, children: null };
    const obj6 = {
      onPress() {
          return multiAccountUsers(16408)();
        },
      children: null
    };
    const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl = tmp2(1114).intl;
    obj7.children = intl.string(tmp2(1114).t.HxrBOZ);
    obj6.children = closure_19(tmp2(4570).Text, obj7);
    obj5.children = closure_19(tmp2(5137).PressableOpacity, obj6);
    const items4 = [closure_19(closure_5, obj5), ];
    const obj8 = { title: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    const intl2 = tmp2(1114).intl;
    obj8.title = intl2.string(tmp2(1114).t.oMNyYN);
    obj8.onChange = tmp7;
    obj8.defaultValue = stateFromStores.id;
    obj8.children = memo.map((value) => {
      const merged = Object.assign(value);
      return closure_1_19(stateFromStores(5702).TableRadioRow, {}, value.value);
    });
    items4[1] = closure_19(tmp2(5699).TableRadioGroup, obj8);
    obj4.children = items4;
    tmp8 = closure_20(closure_5, obj4);
  }
  return tmp8;
}
function FocusModeSetting() {
  let currentLocale = require;
  let toLocaleStringResult = dependencyMap;
  const tmp = closure_21();
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    let obj2 = { accessibilityLabel: null, accessibilityHint: null, icon: null, onValueChange: null, value: null, label: null, subLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.wCxBOc);
    const intl2 = util.intl;
    obj2.accessibilityHint = intl2.string(util.t.wCxBOc);
    let obj3 = { style: tmp.leadingIcon };
    obj2.icon = closure_1_19(BellSlashIcon.BellSlashIcon, obj3);
    obj2.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        const obj3 = {
          onSelect(quiet_mode_enabled, arg1) {
              closure_1_0(10122).setFocusMode(quiet_mode_enabled, arg1);
              const obj = closure_1_0(10122);
              closure_1_1(4541).hideActionSheet();
              const obj2 = closure_1_1(4541);
              const result = closure_1_0(16403).showYouAccountActionSheet();
            }
        };
        require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[47], paths.paths), "FocusModeOptionsActionSheet", obj3);
        let obj2 = require("ActionSheetActionCreators");
      } else {
        require("FocusModeUtils").setFocusMode(false);
        let obj = require("FocusModeUtils");
      }
    };
    obj2.value = focusModeEnabled;
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.wCxBOc);
    if (null == setting) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.i0nsoY);
      const obj4 = { hasIcons: true, children: null };
      obj2.subLabel = stringResult;
      obj2 = tmp5(TableSwitchRow.TableSwitchRow, obj2);
      obj4.children = obj2;
      tmp5(TableRowGroup.TableRowGroup, obj4);
    }
    const intl5 = util.intl;
    const obj5 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = util.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    obj5.endTime = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(util.t.BWD8fs, obj5);
  }
}
function CustomStatus() {
  const tmp = closure_21();
  const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
  let state;
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let tmp8 = null != state;
  if (tmp8) {
    tmp8 = "" !== customStatusActivity.state;
  }
  if (!tmp8) {
    let emoji1;
    if (customStatusActivity != null) {
      emoji1 = customStatusActivity.emoji;
    }
    tmp8 = null != emoji1;
  }
  let state1;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = useGameMentionsAsPlainText.useGameMentionsAsPlainText(state1);
  const tmp2Result = useGameMentionsAsPlainText;
  const token1 = useToken.useToken(tmp5(576).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmp2Result3 = useToken;
  const token2 = useToken.useToken(tmp5(576).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let obj3 = { shadow: "none", border: "none", style: tmp.customStatusRow, children: null };
  const obj4 = { style: tmp.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = tmp2(1114).intl;
  const string = intl.string;
  const t = tmp2(1114).t;
  if (tmp8) {
    let stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  obj4.accessibilityLabel = stringResult;
  let formatToPlainStringResult;
  if (tmp8) {
    const intl2 = tmp2(1114).intl;
    const emoji = customStatusActivity.emoji;
    let str2;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    const obj5 = { emoji: str2, status: gameMentionsAsPlainText };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.GE7QzY, obj5);
  }
  obj4.accessibilityHint = formatToPlainStringResult;
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
    obj3.analyticsLocations = items;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
  };
  let emoji2;
  if (customStatusActivity != null) {
    emoji2 = customStatusActivity.emoji;
  }
  if (null != emoji2) {
    const obj6 = { emoji: customStatusActivity.emoji, size: token };
    let tmp14Result = tmp14(tmp5(10927), obj6);
  } else {
    const obj7 = { size: "md", style: tmp.leadingIcon };
    tmp14Result = tmp14(tmp2(8790).ReactionIcon, obj7);
  }
  let items = [tmp14Result, ];
  const obj8 = { variant: token1, color: token2, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp8) {
    const intl3 = tmp2(1114).intl;
    gameMentionsAsPlainText = intl3.string(tmp2(1114).t["/UonHN"]);
  }
  obj8.children = gameMentionsAsPlainText;
  items[1] = closure_1_19(Text_Text.Text, obj8);
  obj4.children = items;
  const items1 = [closure_1_20(Pressables.PressableOpacity, obj4), ];
  let tmp14Result2 = null;
  if (null != customStatusActivity) {
    const obj9 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          removeCustomStatusDefault();
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      children: null
    };
    const intl4 = tmp2(1114).intl;
    obj9.accessibilityLabel = intl4.string(tmp2(1114).t.wfYTHe);
    obj9.style = tmp.customStatusRemoveButton;
    const obj10 = { style: tmp.trailingIcon, source: tmp5(7103) };
    obj9.children = tmp14(timestampProducer, obj10);
    tmp14Result2 = tmp14(tmp2(5137).PressableOpacity, obj9);
  }
  const tmp2Result4 = useToken;
  items1[1] = tmp14Result2;
  obj3.children = items1;
  return closure_1_19(TableRowGroup.TableRowGroup, { hasIcons: false, children: closure_1_20(Card.Card, obj3) });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12443).MultiAccountTokenStatus;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = Constants);
let closure_18 = fn(12444).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4574);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: null, customStatusRow: null, customStatusEditButton: null, customStatusRemoveButton: null, customStatusText: null };
let size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = size;
obj.customStatusRow = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj3 = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusEditButton = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj4 = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusRemoveButton = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusText = { flexShrink: 1 };
let closure_21 = createStyles.createStyles(obj);
let obj5 = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default noop.memo((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  const items = [MultiAccountStore];
  const stateFromStores = initialize.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  const obj3 = { startExpanded: stateFromStores, header: null, showGradient: true, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t["3Uj+2p"]);
  } else if (stateFromStores) {
    stringResult = string(t["ldCE/p"]);
  } else {
    stringResult = string(t["qP/i6k"]);
  }
  obj3.header = closure_1_19(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult });
  let tmp7Result = tmp5;
  if (tmp5) {
    tmp7Result = tmp7(ThemeRadioGroup, {});
  }
  const items2 = [tmp7Result, closure_1_19(YouStatusRadioGroup, {}), closure_1_19(FocusModeSetting, {}), closure_1_19(CustomStatus, {}), , , ];
  let tmp7Result4 = !flag;
  if (!flag) {
    tmp7Result4 = stateFromStores;
  }
  if (tmp7Result4) {
    tmp7Result4 = tmp7(YouAccountRadioGroup, {});
  }
  items2[4] = tmp7Result4;
  let tmp7Result5 = !flag;
  if (!flag) {
    tmp7Result5 = stateFromStores1;
  }
  if (tmp7Result5) {
    tmp7Result5 = tmp7(tmp4(16414), {});
  }
  items2[5] = tmp7Result5;
  let tmp7Result6 = !flag;
  if (!flag) {
    tmp7Result6 = stateFromStores1;
  }
  if (tmp7Result6) {
    tmp7Result6 = tmp7(tmp4(15776), { title: "Developer Tools", embedded: true });
  }
  items2[6] = tmp7Result6;
  obj3.children = closure_1_20(Stack_Stack.Stack, { spacing: 24, children: items2 });
  return closure_1_19(ActionSheet.ActionSheet, obj3);
});
