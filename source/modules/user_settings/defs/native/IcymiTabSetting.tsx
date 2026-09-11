// Module ID: 15597
// Function ID: 15598
// Name: IcymiTabSetting
// Dependencies: [8050, 8443, 8440, 8439, 15598, 11564, 1114, 2]

// Module 15597 (IcymiTabSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8439 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8440 */;
import useLabFeatureDefault from "useLabFeature" /* 8443 */;
import LabFeatureActions from "LabFeatureActions" /* 15598 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D4clKq);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: function useICYMISettingValue() {
    return useLabFeatureDefault(ICYMIExperiment.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    ICYMIActionCreatorsDefault.itemInteracted(str, "icymi_tab_toggle", "press");
    ICYMIActionCreatorsDefault.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmpResult = ICYMIActionCreatorsDefault;
    LabFeatureActions.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, { enabled });
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
