// Module ID: 14744
// Function ID: 14745
// Name: AccountAgeGroupSetting
// Dependencies: [17, 7989, 1074, 21, 4574, 576, 14745, 14746, 14747, 1943, 5619, 11500, 1114, 14748, 14711, 14749, 2]

// Module 14744 (AccountAgeGroupSetting)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import TableRow from "TableRow" /* 5619 */;
import SettingsConstants from "SettingsConstants" /* 7989 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14711 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 14745 */;
import TinyBroncoAccountStatusVisibility from "TinyBroncoAccountStatusVisibility" /* 14746 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14747 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4574 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14748 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: { marginLeft: 0, marginRight: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    const tmp = closure_6();
    const ageGroupValueLabel = useAgeGroupPresentation.useAgeGroupValueLabel();
    const shouldShowTinyBroncoAccountStatus = TinyBroncoAccountStatusVisibility.useShouldShowTinyBroncoAccountStatus();
    const obj3 = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowTinyBroncoAccountStatus;
    if (shouldShowTinyBroncoAccountStatus) {
      const obj4 = { dismissibleContent: tmp2(1943).DismissibleContent.TINY_BRONCO_SETTINGS, containerStyle: tmp.badge, noGradient: true };
      tmp8 = React4(DismissiblePremiumNewBadgeDefault, obj4);
    }
    const items = [tmp8, React4(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj3.children = items;
    return hasOwnProperty(View, obj3);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null
};
obj3.usePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, TinyBroncoAccountStatusVisibility.useShouldShowTinyBroncoAccountStatus);
obj3.usePredicate = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled;
obj3.screen = {
  route: Constants.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require("SettingsAgeGroupScreen").default;
  }
};
const route = SettingBuilders.createRoute(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
