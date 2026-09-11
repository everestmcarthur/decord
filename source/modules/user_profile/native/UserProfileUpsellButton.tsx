// Module ID: 14647
// Function ID: 14648
// Name: UserProfileUpsellButton
// Dependencies: [19, 1074, 1373, 21, 4606, 7235, 7519, 1242, 5026, 9404, 1114, 8753, 2]
// Exports: default

// Module 14647 (UserProfileUpsellButton)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9404 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Constants = fn(1074);
({ AnalyticsPages: closure_4, UpsellTypes: hasOwnProperty, AnalyticsSections: metroRequire, AnalyticEvents: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7235)().analyticsLocations;
  const tmp = closure_10();
  let label = analyticsObject(7519).useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = noop.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(constants4.PREMIUM_UPSELL_VIEWED, obj2);
  }, items);
  let obj2 = {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  };
  if (label == null) {
    label = analyticsObject.label;
  }
  if (label == null) {
    const intl = tmp3(1114).intl;
    label = intl.string(tmp3(1114).t.pj0XBN);
  }
  obj2.text = label;
  obj2.icon = jsx(analyticsObject(8753).NitroWheelIcon, { color: "white", size: "sm", style: tmp.nitroWheel });
  return jsx(analyticsObject(5026).Button, {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  });
};
