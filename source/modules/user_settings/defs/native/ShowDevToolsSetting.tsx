// Module ID: 15580
// Function ID: 15581
// Name: pressable
// Dependencies: [15581, 11473, 15578, 14584, 14845, 2]

// Module 15580 (pressable)
import set from "set" /* 2 */;
import navigateToDevTools from "navigateToDevTools" /* 14584 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14845 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15578 */;
import DevToolsScreens from "DevToolsScreens" /* 15581 */;
import createToggle from "createToggle" /* 11473 */;

const pressable = createToggle.createPressable({
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: navigateToDevTools.navigateToDevTools,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(DevToolsScreens.DevToolsScreens), ...Object.values(DevToolsScreens.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    return "Show Dev Tools";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onPress: navigateToDevTools.navigateToDevTools,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms: function getAdditionalSearchTerms() {
    const items = [...Object.values(DevToolsScreens.DevToolsScreens), ...Object.values(DevToolsScreens.PerformanceTestingScreens)];
    return items.map((headerTitle) => headerTitle.headerTitle);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ShowDevToolsSetting.tsx");

export default pressable;
