// Module ID: 15892
// Function ID: 15893
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1074, 11500, 1114, 2070, 15023, 15890, 15893, 2]

// Module 15892 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef2070 from "module_2070" /* 2070 */;
import QuestsIcon from "QuestsIcon" /* 15023 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15890 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2070.XUj46U);
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  screen: {
    route: Constants.UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
    getComponent() {
      return require("SponsoredContentPreferencesScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;
