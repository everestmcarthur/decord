// Module ID: 15743
// Function ID: 15744
// Dependencies: [14397, 14845, 11473, 15562, 2]

// Module 15743
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14845 */;
import closure_2 from "checkForNewerBuild" /* 14397 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    const obj = useStaffOrDeveloperSettingPredicate;
    return hasUpdatesConfigured.hasUpdatesConfigured && useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;
