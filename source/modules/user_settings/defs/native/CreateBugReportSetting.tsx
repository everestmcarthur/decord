// Module ID: 15781
// Function ID: 15782
// Name: CreateBugReportSetting
// Dependencies: [1347, 1348, 10246, 504, 1115, 11500, 1114, 15595, 15770, 2]

// Module 15781 (CreateBugReportSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1348 */;
import BugReportManagerDefault from "BugReportManager" /* 10246 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;

require = fn;
const SettingBuilders = fn(11500);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aIkGJD);
  },
  parent: null,
  IconComponent: fn(15595).WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = DeveloperOptionsActionCreators.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      BugReportManagerDefault.initialize();
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      BugReportManagerDefault.terminate(true);
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [DeveloperOptionsStore];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: fn(15770).useBugReporterExperimentSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;
