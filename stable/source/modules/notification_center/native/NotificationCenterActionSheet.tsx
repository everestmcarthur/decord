// Module ID: 16410
// Function ID: 16411
// Name: NotificationCenterActionSheet
// Dependencies: [19, 7637, 1074, 21, 504, 16411, 7855, 4527, 7850, 7853, 7182, 7860, 7845, 12215, 7382, 7198, 7149, 1114, 7200, 5090, 12426, 9782, 16412, 11712, 7861, 4523, 12213, 7380, 2]
// Exports: default

// Module 16410 (NotificationCenterActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import showForLaterModal from "showForLaterModal" /* 7860 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7861 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 16411 */;
import noop from "module_19" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7637 */;

require = fn;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let items = [closure_4];
  const stateFromStoresObject = roleFilter(504).useStateFromStoresObject(items, () => ({ everyoneFilter: closure_4.everyoneFilter, roleFilter: closure_4.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = hasForLaterAccess.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    MentionActionCreatorsDefault.setGuildFilter({ roleFilter, everyoneFilter });
  }, items1);
  let obj = roleFilter(504);
  const isForLaterExperimentOn = roleFilter(7855).useIsForLaterExperimentOn("NotificationCenterActionSheet");
  let obj2 = roleFilter(7855);
  hasForLaterAccess = roleFilter(7855).useHasForLaterAccess("NotificationCenterActionSheet");
  const items2 = [hasForLaterAccess];
  closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (hasForLaterAccess) {
      showForLaterModal.showForLaterModal(BOOKMARK);
    } else {
      const items = [tmp(7182).FOR_LATER_ROADBLOCK];
      tmp(7850)(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
      const tmpResult = tmp(7850);
    }
  }, items2);
  const obj3 = roleFilter(7855);
  const canUseScheduledMessages = roleFilter(7845).useCanUseScheduledMessages();
  const callback = hasForLaterAccess.useCallback(() => {
    everyoneFilter(4527).hideActionSheet();
    const obj = everyoneFilter(4527);
    const result = roleFilter(12215).showScheduledMessagesModal();
  }, []);
  const callback1 = hasForLaterAccess.useCallback(() => {
    everyoneFilter(4527).hideActionSheet();
    const obj = everyoneFilter(4527);
    roleFilter(7382).openUserSettings({ screen: constants.NOTIFICATIONS });
  }, []);
  const obj5 = { showGradient: true, header: null, children: null };
  const obj6 = { title: null };
  const intl = roleFilter(1114).intl;
  obj6.title = intl.string(roleFilter(1114).t.HcoRu0);
  obj5.header = closure_6(roleFilter(7149).BottomSheetTitleHeader, obj6);
  const obj7 = { hasIcons: true, children: null };
  const obj8 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter,
    label: null,
    icon: null
  };
  const intl2 = roleFilter(1114).intl;
  obj8.label = intl2.string(roleFilter(1114).t.asInft);
  const obj4 = roleFilter(7845);
  obj8.icon = closure_6(roleFilter(7200).ActionSheetRow.Icon, { IconComponent: roleFilter(5090).AtIcon, source: everyoneFilter(12426) });
  const items3 = [closure_6(roleFilter(7200).ActionSheetSwitchRow, obj8), ];
  const obj10 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter,
    label: null,
    subLabel: null,
    icon: null
  };
  const intl3 = roleFilter(1114).intl;
  obj10.label = intl3.string(roleFilter(1114).t.S9GLtt);
  const intl4 = roleFilter(1114).intl;
  obj10.subLabel = intl4.string(roleFilter(1114).t.jYgZa4);
  const obj9 = { IconComponent: roleFilter(5090).AtIcon, source: everyoneFilter(12426) };
  obj10.icon = closure_6(roleFilter(7200).ActionSheetRow.Icon, { IconComponent: roleFilter(9782).BellIcon, source: everyoneFilter(16412) });
  items3[1] = closure_6(roleFilter(7200).ActionSheetSwitchRow, obj10);
  obj7.children = items3;
  const items4 = [closure_7(roleFilter(7200).ActionSheetRow.Group, obj7), ];
  let tmp10Result = null;
  if (isForLaterExperimentOn) {
    const obj12 = { icon: null, label: null, onPress: null, arrow: true };
    const obj13 = { IconComponent: tmp(11712).BookmarkIcon };
    obj12.icon = tmp10(tmp(7200).ActionSheetRow.Icon, obj13);
    const intl5 = tmp(1114).intl;
    obj12.label = intl5.string(tmp(1114).t["2pAkDA"]);
    obj12.onPress = function onPress() {
      return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    };
    tmp10Result = tmp10(tmp(7200).ActionSheetRow, obj12, "bookmarks");
  }
  const items5 = [tmp10Result, , , ];
  let tmp10Result3 = null;
  if (isForLaterExperimentOn) {
    const obj14 = { icon: null, label: null, onPress: null, arrow: true };
    const obj15 = { IconComponent: tmp(4523).ClockIcon };
    obj14.icon = tmp10(tmp(7200).ActionSheetRow.Icon, obj15);
    const intl6 = tmp(1114).intl;
    obj14.label = intl6.string(tmp(1114).t.aUXxzT);
    obj14.onPress = function onPress() {
      return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    };
    tmp10Result3 = tmp10(tmp(7200).ActionSheetRow, obj14, "reminders");
  }
  items5[1] = tmp10Result3;
  let tmp10Result4 = null;
  if (canUseScheduledMessages) {
    const obj16 = { icon: null, label: null, onPress: null, arrow: true };
    const obj17 = { IconComponent: tmp(12213).CalendarPlusIcon };
    obj16.icon = tmp10(tmp(7200).ActionSheetRow.Icon, obj17);
    const intl7 = tmp(1114).intl;
    obj16.label = intl7.string(tmp(1114).t.SZVs3K);
    obj16.onPress = callback;
    tmp10Result4 = tmp10(tmp(7200).ActionSheetRow, obj16, "scheduled-messages");
  }
  const obj18 = { hasIcons: true, children: null };
  items5[2] = tmp10Result4;
  const obj19 = { icon: null, label: null, onPress: null, arrow: true };
  const obj11 = { IconComponent: roleFilter(9782).BellIcon, source: everyoneFilter(16412) };
  obj19.icon = closure_6(roleFilter(7200).ActionSheetRow.Icon, { IconComponent: roleFilter(7380).SettingsIcon });
  const intl8 = tmp(1114).intl;
  obj19.label = intl8.string(roleFilter(1114).t.h850Ss);
  obj19.onPress = callback1;
  items5[3] = closure_6(roleFilter(7200).ActionSheetRow, obj19, "settings");
  obj18.children = items5;
  items4[1] = closure_7(roleFilter(7200).ActionSheetRow.Group, obj18);
  obj5.children = items4;
  return closure_7(roleFilter(7198).ActionSheet, obj5);
};
