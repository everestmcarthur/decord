// Module ID: 16050
// Function ID: 16051
// Name: ExperimentOverrideActiveSetting
// Dependencies: [4671, 1235, 21, 14852, 504, 16051, 15114, 11723, 15857, 2]

// Module 16050 (ExperimentOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14852 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15114 */;
import DevToolsContent from "DevToolsContent" /* 16051 */;
import ExperimentStore from "ExperimentStore" /* 4671 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11723);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: fn(15857).BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    const items = [ExperimentStore];
    const stateFromStores = initialize.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [ApexExperimentStore];
    const str = stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length);
    return jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const items = [ExperimentStore];
    const stateFromStores = initialize.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [ApexExperimentStore];
    return stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default pressable;
