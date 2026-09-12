// Module ID: 15831
// Function ID: 15832
// Name: ExperimentOverrideActiveSetting
// Dependencies: [4552, 1236, 21, 14668, 504, 15832, 14931, 11601, 15670, 2]

// Module 15831 (ExperimentOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14668 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14931 */;
import DevToolsContent from "DevToolsContent" /* 15832 */;
import ExperimentStore from "ExperimentStore" /* 4552 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11601);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: fn(15670).BeakerIcon,
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
