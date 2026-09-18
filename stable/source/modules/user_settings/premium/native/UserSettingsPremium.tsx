// Module ID: 7413
// Function ID: 7414
// Name: UserSettingsPremium
// Dependencies: [32, 19, 17, 1371, 4223, 4224, 7394, 1895, 7237, 1074, 1373, 21, 4560, 7414, 1611, 7162, 7182, 6994, 4992, 1242, 504, 1483, 1974, 7415, 7417, 573, 7419, 7400, 9373, 7447, 10711, 7446, 13310, 8063, 6990, 6995, 4218, 4233, 13311, 13313, 13350, 13352, 13353, 9368, 13416, 13468, 11440, 1115, 2]
// Exports: default

// Module 7413 (UserSettingsPremium)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7414 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8063 */;
import UserTrialActionCreatorsDefault from "UserTrialActionCreators" /* 13310 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import IAPStore from "IAPStore" /* 7237 */;

const useMountEffectDefault = tmp(4992);
const AnalyticsLocationDefault = tmp(7182);
const BlockedPaymentsCountryDisplayDefault = tmp(11440);
const PremiumSubscriptionDetailsDefault = tmp(13313);
const PremiumBillingInfoDefault = tmp(13350);
const PremiumAccountCreditDefault = tmp(13352);
const PremiumNitroHomeDefault = tmp(13416);
const PremiumMarketingPageDefault = tmp(13468);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_20 = createStyles.createStyles({ root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: _slicedToArray, onClose, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = applicationId);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  let navigation;
  let state;
  let stateFromStores;
  let ref;
  let callback;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let state2;
  let container = closure_20();
  let tmp = importDefault;
  let tmp33Result = dependencyMap;
  useStoreConnectionErrorAlertDefault();
  if (applicationId.isFromTextSection) {
    let items = [AnalyticsLocationDefault.TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, AnalyticsLocationDefault.PREMIUM_MARKETING];
  analyticsLocations = useAnalyticsLocationsDefault(items2).analyticsLocations;
  navigation = applicationId(6994).useSettingNavigationRoute();
  useMountEffectDefault(() => {
    const params = navigation.params;
    let analyticsLocation;
    if (params != null) {
      analyticsLocation = params.analyticsLocation;
    }
    let section;
    if (analyticsLocation != null) {
      section = analyticsLocation.section;
    }
    if (null != section) {
      const obj2 = { source_section: section };
      let obj = obj2;
    } else {
      obj = {};
    }
    const merged = Object.assign(obj);
    AnalyticsUtilsDefault.track(constants.PREMIUM_MARKETING_PAGE_VIEWED, { application_id: applicationId, location_stack: analyticsLocations, activity_session_id, channel_id, guild_id });
  });
  let obj = applicationId(6994);
  const items3 = [premiumTrialOffer];
  let obj2 = applicationId(504);
  [tmp8, tmp9] = applicationId(504).useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  });
  const tmp7 = _slicedToArray(applicationId(504).useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  state = applicationId(1483).useNavigation();
  let obj3 = applicationId(1483);
  const items4 = [state2];
  stateFromStores = applicationId(504).useStateFromStores(items4, () => state2.getState());
  ref = analyticsLocations.useRef(stateFromStores);
  const obj4 = applicationId(504);
  const obj5 = analyticsLocations;
  const items5 = [premiumDiscountOffer];
  const stateFromStores1 = applicationId(504).useStateFromStores(items5, () => {
    const items = [closure_1_18];
    return premiumDiscountOffer.hasFetchedForApplicationIds(items);
  });
  const obj6 = applicationId(504);
  const items6 = [premiumDiscountOffer];
  const stateFromStores2 = applicationId(504).useStateFromStores(items6, () => {
    let forApplication = premiumDiscountOffer.getForApplication(closure_1_18);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], applicationId(1974).areSetsEqual);
  const obj7 = applicationId(504);
  const items7 = [callback];
  let stateFromStores3 = applicationId(504).useStateFromStores(items7, () => callback.isLoadedForPremiumSKUs());
  const obj8 = applicationId(504);
  const items8 = [IAPStore];
  const stateFromStores4 = applicationId(504).useStateFromStores(items8, () => product.getProduct(applicationId(channel_id[23]).ProductIds.PREMIUM_TIER_2_MONTHLY));
  const obj9 = applicationId(504);
  const items9 = [ref];
  const stateFromStores5 = applicationId(504).useStateFromStores(items9, () => {
    const currentUser = ref.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isPremiumWithPremiumGroup();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const obj10 = applicationId(504);
  const isPaymentsBlocked = applicationId(7417).useIsPaymentsBlocked();
  callback = analyticsLocations.useCallback(() => {
    activity_session_id(channel_id[25]).wait(() => activity_session_id(channel_id[26]).init());
    const obj = activity_session_id(channel_id[25]);
    const userEntitlementsForApplication = applicationId(channel_id[27]).fetchUserEntitlementsForApplication(closure_1_18);
    const obj2 = applicationId(channel_id[27]);
    const items = [applicationId(channel_id[23]).ProductIds.PREMIUM_TIER_2_MONTHLY];
    applicationId(channel_id[28]).ensureSkusLoaded(items);
  }, []);
  const items10 = [callback];
  const effect = analyticsLocations.useEffect(() => {
    callback();
  }, items10);
  const items11 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp3 = stateFromStores === constants2.ACTIVE;
    if (tmp3) {
      tmp3 = ref.current === tmp2.BACKGROUND;
    }
    if (tmp3) {
      DispatcherDefault.wait(() => activity_session_id(channel_id[26]).init());
    }
    ref.current = stateFromStores;
  }, items11);
  const obj11 = applicationId(7417);
  premiumTrialOffer = applicationId(7447).usePremiumTrialOffer();
  const obj12 = applicationId(7447);
  premiumDiscountOffer = applicationId(10711).usePremiumDiscountOffer();
  const obj13 = applicationId(10711);
  const premiumTrialOfferPremiumType = applicationId(7446).usePremiumTrialOfferPremiumType();
  const items12 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = UserTrialActionCreatorsDefault.acknowledgeUserTrialOffer(tmp);
    }
    if (null != premiumDiscountOffer) {
      UserOfferActionCreators.acknowledgeUserOffer(undefined, tmp5);
    }
  }, items12);
  let tmp33Result8 = null != tmp8 && stateFromStores3 && tmp9;
  const obj14 = applicationId(7446);
  const hasTier2Premium = applicationId(4218).useHasTier2Premium();
  let tmp26 = hasTier2Premium;
  if (hasTier2Premium) {
    tmp26 = null == premiumFeatureCardOrder;
  }
  let tmp27 = !tmp26;
  if (!tmp26) {
    tmp27 = null == tmp8;
  }
  if (tmp27) {
    tmp27 = null == stateFromStores4;
  }
  if (!tmp27) {
    tmp27 = !stateFromStores3;
  }
  if (!tmp27) {
    tmp27 = !tmp9;
  }
  if (!tmp27) {
    tmp27 = !stateFromStores1;
  }
  state2 = tmp27;
  const items13 = [tmp27];
  const effect3 = obj5.useEffect(() => {
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const error = new Error("Premium settings screen load timed out");
        const obj2 = { tags: null };
        const obj3 = { source: "UserSettingsPremium", iap_product_missing: String(null == product.getProduct(closure_0(7415).ProductIds.PREMIUM_TIER_2_MONTHLY)), has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()), has_fetched_subscriptions: String(premiumTrialOffer.hasFetchedSubscriptions()), has_fetched_entitlements: null };
        const items = [closure_1_18];
        obj3.has_fetched_entitlements = String(premiumDiscountOffer.hasFetchedForApplicationIds(items));
        obj2.tags = obj3;
        const result = closure_0(4233).captureBillingException(error, obj2);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items13);
  const tmp5Result = applicationId(4218);
  const obj15 = { userHasSubscription: tmp33Result8, isNitroHomeSurface: tmp26, isConfirmedNonSubscriber: tmp9 };
  const buyNitroExperiment = applicationId(13311).useBuyNitroExperiment(obj15);
  if (tmp27) {
    if (!buyNitroExperiment.canRenderRedesignUpsellEarly) {
      const obj16 = { style: container.loadingSpinnerContainer, children: <navigation animating size="large" /> };
      return <state style={container.loadingSpinnerContainer}><navigation animating size="large" /></state>;
    }
  }
  if (isPaymentsBlocked) {
    const obj17 = { style: null, children: null };
    container = container.container;
    obj17.style = container;
    tmp = BlockedPaymentsCountryDisplayDefault;
    tmp33Result = tmp33(tmp, {});
    obj17.children = tmp33Result;
    tmp33(stateFromStores, obj17);
  } else {
    const items14 = [container.root, ];
    let num = 0;
    if (tmp5Result4.isAndroid()) {
      num = useSafeAreaInsetsDefault().bottom;
    }
    const obj18 = { style: null, children: null };
    const obj19 = { marginBottom: num };
    items14[1] = obj19;
    obj18.style = items14;
    const obj20 = { value: analyticsLocations, children: null };
    if (buyNitroExperiment.showRedesignUpsell) {
      const obj21 = { onClose, applicationId, initialLoadCompleted: !tmp27, onPaymentSuccess, onPaymentDismiss, initialTier: null };
      if (null == premiumFeatureCardOrder) {
        obj21.initialTier = undefined;
        let tmp33Result6 = tmp33(tmp40, obj21);
      } else if (premiumFeatureCardOrder === tmp5(9368).PremiumFeatureCardOrder.TIER_0_LEADING) {
        let TIER_2 = closure_17.TIER_0;
      } else {
        TIER_2 = closure_17.TIER_2;
      }
    } else {
      if (hasTier2Premium) {
        if (null == premiumFeatureCardOrder) {
          const obj22 = { onClose };
          tmp33Result6 = tmp33(PremiumNitroHomeDefault, obj22);
        }
      }
      let TIER_2_LEADING = premiumFeatureCardOrder;
      if (null != premiumFeatureCardOrder) {
        const obj23 = { applicationId, userHasSubscription: tmp33Result8, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null };
        let tmp33Result7 = tmp33Result8;
        if (tmp33Result8) {
          function handleLearnMorePremiumGuild() {
            const routes = state.getState().routes;
            const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
            UserSettingsModalActionCreatorsDefault.setSection(constants3.GUILD_BOOSTING);
            const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants3.GUILD_BOOSTING });
            if (null != found) {
              arr.navigate(tmp2.GUILD_BOOSTING, undefined, { pop: true });
            } else {
              arr.push(tmp2.GUILD_BOOSTING);
            }
          }
          const obj24 = { style: container.subscriptionHeader, onClickManagePremiumGuild: handleLearnMorePremiumGuild, subscription: tmp8 };
          tmp33Result7 = tmp33(PremiumSubscriptionDetailsDefault, obj24);
        }
        obj23.subscriptionDetails = tmp33Result7;
        if (tmp33Result8) {
          const obj25 = { style: container.billingInfo, subscription: tmp8 };
          tmp33Result8 = tmp33(PremiumBillingInfoDefault, obj25);
        }
        obj23.billingInfo = tmp33Result8;
        if (stateFromStores3) {
          const obj26 = { style: container.accountCredit, currentSubscription: tmp8, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 };
          stateFromStores3 = tmp33(PremiumAccountCreditDefault, obj26);
        }
        obj23.accountCredit = stateFromStores3;
        obj23.onClose = onClose;
        if (TIER_2_LEADING == null) {
          TIER_2_LEADING = tmp5(9368).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
        obj23.premiumFeatureCardOrder = TIER_2_LEADING;
        obj23.entitlements = stateFromStores2;
        obj23.onPaymentSuccess = onPaymentSuccess;
        obj23.onPaymentDismiss = onPaymentDismiss;
        obj23.isFullScreenPresentation = isFullScreenPresentation;
        tmp33Result6 = tmp33(PremiumMarketingPageDefault, obj23);
        const tmpResult = PremiumMarketingPageDefault;
      } else if (premiumTrialOfferPremiumType === closure_17.TIER_0) {
        let TIER_2_LEADING2 = tmp5(9368).PremiumFeatureCardOrder.TIER_0_LEADING;
      } else {
        TIER_2_LEADING2 = premiumFeatureCardOrder;
        if (premiumTrialOfferPremiumType === tmp35.TIER_2) {
          TIER_2_LEADING2 = tmp5(9368).PremiumFeatureCardOrder.TIER_2_LEADING;
        }
      }
    }
    obj20.children = tmp33Result6;
    obj18.children = tmp33(tmp5(7162).AnalyticsLocationProvider, obj20);
    tmp33(state, obj18);
    tmp5Result4 = tmp5(1115);
  }
};
