// Module ID: 16007
// Function ID: 16008
// Name: SponsoredContentPreferencesSetting
// Dependencies: [1074, 11622, 1115, 2071, 15118, 16005, 16008, 2]

// Module 16007 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2071 from "module_2071" /* 2071 */;
import QuestsIcon from "QuestsIcon" /* 15118 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16005 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2071.XUj46U);
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
