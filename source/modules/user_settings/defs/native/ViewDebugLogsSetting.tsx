// Module ID: 15626
// Function ID: 15627
// Name: ViewDebugLogsSetting
// Dependencies: [19, 17, 21, 4574, 7273, 4810, 11018, 7271, 7223, 1114, 15627, 15629, 4570, 15632, 1115, 11056, 15633, 11564, 13899, 1935, 2]

// Module 15626 (ViewDebugLogsSetting)
import _mod17 from "module_17" /* 17 */;
import _mod19 from "module_19" /* 19 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import ClockIcon from "ClockIcon" /* 4570 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7223 */;
import ActionSheet from "ActionSheet" /* 7271 */;
import ActionSheetRow from "ActionSheetRow" /* 7273 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11018 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 13899 */;
import WrenchIcon from "WrenchIcon" /* 15627 */;
import UserSettingsDebugLogsDefault from "UserSettingsDebugLogs" /* 15629 */;
import UserSettingsStartupTimingsDefault from "UserSettingsStartupTimings" /* 15632 */;
import UserSettingsPushNotificationLogsDefault from "UserSettingsPushNotificationLogs" /* 15633 */;
import jsxProd from "jsxProd" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return closure_5(title(7273).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ViewDebugLogsActionSheet);
      ModalActionCreatorsDefault.pushLazy(Promise.resolve({
        default() {
          return closure_2_5(ModalStackNavigatorDefault, { title, render, screenKey });
        }
      }));
    }
  });
}
function ViewDebugLogsActionSheet() {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.BUOCPi);
  obj.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { icon: hasOwnProperty(WrenchIcon.WrenchIcon, {}), title: null, screenKey: "debugLogs", render: null };
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.XpPGhL);
  obj3.render = function render() {
    return closure_1_5(UserSettingsDebugLogsDefault, {});
  };
  const items = [hasOwnProperty(ViewDebugLogsActionSheetRow, obj3), , ];
  const obj4 = { icon: hasOwnProperty(ClockIcon.ClockIcon, {}), title: null, screenKey: "startupTiming", render: null };
  const intl3 = util.intl;
  obj4.title = intl3.string(util.t.b0nJvk);
  obj4.render = function render() {
    return closure_1_5(Suspense, { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) });
  };
  items[1] = hasOwnProperty(ViewDebugLogsActionSheetRow, obj4);
  let tmpResult = null;
  if (obj5.isAndroid()) {
    const obj6 = { icon: tmp(tmp2(11056).ChannelNotificationIcon, {}), title: null, screenKey: "pushNotificationLogs", render: null };
    const intl4 = tmp2(1114).intl;
    obj6.title = intl4.string(tmp2(1114).t.Ljj0ps);
    obj6.render = function render() {
      return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
    };
    tmpResult = tmp(ViewDebugLogsActionSheetRow, obj6);
  }
  items[2] = tmpResult;
  obj.children = timestampProducer(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: items });
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
const Suspense = _mod19.Suspense;
const Keyboard = _mod17.Keyboard;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: UserSettings.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: ViewDebugLogsActionSheet }), ViewDebugLogsActionSheet);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
