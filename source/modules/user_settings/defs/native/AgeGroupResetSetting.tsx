// Module ID: 14815
// Function ID: 14816
// Name: AgeGroupResetSetting
// Dependencies: [8050, 21, 11564, 1114, 2946, 14816, 4953, 14812, 2]

// Module 14815 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import _modDef2946 from "module_2946" /* 2946 */;
import useAlertStore from "useAlertStore" /* 4953 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14812 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14816 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2946["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2946.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
