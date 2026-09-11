// Module ID: 7487
// Function ID: 7488
// Name: UserSettingsPremium
// Dependencies: [32, 19, 17, 1371, 4269, 4270, 7468, 1895, 7311, 1074, 1373, 21, 4607, 7488, 1611, 7236, 7256, 7068, 5044, 1242, 504, 1483, 1974, 7489, 7491, 573, 7493, 7474, 9460, 7521, 10797, 7520, 13407, 8138, 7064, 7069, 4264, 4279, 13408, 13445, 13447, 13448, 9455, 13514, 11531, 1115, 2]
// Exports: default

// Module 7487 (UserSettingsPremium)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useMountEffectDefault from "useMountEffect" /* 5044 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7064 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7069 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7236 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7488 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8138 */;
import UserTrialActionCreatorsDefault from "UserTrialActionCreators" /* 13407 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4269 */;
import SubscriptionStore from "SubscriptionStore" /* 4270 */;
import EntitlementStore from "EntitlementStore" /* 7468 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import IAPStore from "IAPStore" /* 7311 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_20 = createStyles.createStyles({ root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: _slicedToArray, onClose, premiumFeatureCardOrder, isFullScreenPresentation } = applicationId);
  ({ isFromTextSection, onPaymentSuccess, onPaymentDismiss } = applicationId);
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
  const tmp = closure_20();
  useStoreConnectionErrorAlertDefault();
  if (isFromTextSection) {
    let items = [tmp2(7256).TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, tmp2(7256).PREMIUM_MARKETING];
  analyticsLocations = useAnalyticsLocationsDefault(items2).analyticsLocations;
  navigation = applicationId(7068).useSettingNavigationRoute();
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
  let obj = applicationId(7068);
  const items3 = [premiumTrialOffer];
  let obj2 = applicationId(504);
  [tmp9, tmp10] = applicationId(504).useStateFromStoresArray(items3, () => {
    const items = [premiumTrialOffer.getPremiumTypeSubscription(), premiumTrialOffer.hasFetchedSubscriptions()];
    return items;
  });
  const tmp8 = _slicedToArray(applicationId(504).useStateFromStoresArray(items3, () => {
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
  const isPaymentsBlocked = applicationId(7491).useIsPaymentsBlocked();
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
  const obj11 = applicationId(7491);
  premiumTrialOffer = applicationId(7521).usePremiumTrialOffer();
  const obj12 = applicationId(7521);
  premiumDiscountOffer = applicationId(10797).usePremiumDiscountOffer();
  const obj13 = applicationId(10797);
  const premiumTrialOfferPremiumType = applicationId(7520).usePremiumTrialOfferPremiumType();
  const items12 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = UserTrialActionCreatorsDefault.acknowledgeUserTrialOffer(tmp);
    }
    if (null != premiumDiscountOffer) {
      UserOfferActionCreators.acknowledgeUserOffer(undefined, tmp5);
    }
  }, items12);
  let tmp30Result6 = null != tmp9 && stateFromStores3 && tmp10;
  const obj14 = applicationId(7520);
  const hasTier2Premium = applicationId(4264).useHasTier2Premium();
  let tmp27 = hasTier2Premium;
  if (hasTier2Premium) {
    tmp27 = null == premiumFeatureCardOrder;
  }
  let tmp28 = !tmp27;
  if (!tmp27) {
    tmp28 = null == tmp9;
  }
  if (tmp28) {
    tmp28 = null == stateFromStores4;
  }
  if (!tmp28) {
    tmp28 = !stateFromStores3;
  }
  if (!tmp28) {
    tmp28 = !tmp10;
  }
  if (!tmp28) {
    tmp28 = !stateFromStores1;
  }
  state2 = tmp28;
  const items13 = [tmp28];
  const effect3 = obj5.useEffect(() => {
    if (closure_12) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const error = new Error("Premium settings screen load timed out");
        const obj2 = { tags: null };
        const obj3 = { source: "UserSettingsPremium", iap_product_missing: String(null == product.getProduct(closure_0(7489).ProductIds.PREMIUM_TIER_2_MONTHLY)), has_fetched_subscription_plans: String(loadedForPremiumSKUs.isLoadedForPremiumSKUs()), has_fetched_subscriptions: String(premiumTrialOffer.hasFetchedSubscriptions()), has_fetched_entitlements: null };
        const items = [closure_1_18];
        obj3.has_fetched_entitlements = String(premiumDiscountOffer.hasFetchedForApplicationIds(items));
        obj2.tags = obj3;
        const result = closure_0(4279).captureBillingException(error, obj2);
      }, 10000);
      return () => clearTimeout(closure_0);
    }
  }, items13);
  if (tmp28) {
    const obj15 = { style: tmp.loadingSpinnerContainer, children: tmp30(navigation, { animating: true, size: "large" }) };
    let tmp30Result = tmp30(state, obj15);
  } else if (isPaymentsBlocked) {
    const obj16 = { style: tmp.container, children: tmp30(tmp2(11531), {}) };
    tmp30Result = tmp30(stateFromStores, obj16);
  } else {
    const items14 = [tmp.root, ];
    let num = 0;
    if (tmp6Result2.isAndroid()) {
      num = useSafeAreaInsetsDefault().bottom;
    }
    const obj17 = { style: null, children: null };
    const obj18 = { marginBottom: num };
    items14[1] = obj18;
    obj17.style = items14;
    const obj19 = { value: analyticsLocations, children: null };
    if (hasTier2Premium) {
      if (null == premiumFeatureCardOrder) {
        const obj20 = { onClose };
        let tmp30Result4 = tmp30(tmp2(13448), obj20);
      }
      obj19.children = tmp30Result4;
      obj17.children = tmp30(tmp32, obj19);
      tmp30Result = tmp30(tmp31, obj17);
    }
    let TIER_2_LEADING = premiumFeatureCardOrder;
    if (null != premiumFeatureCardOrder) {
      const obj21 = { applicationId, userHasSubscription: tmp30Result6, subscriptionDetails: null, billingInfo: null, accountCredit: null, onClose: null, premiumFeatureCardOrder: null, entitlements: null, onPaymentSuccess: null, onPaymentDismiss: null, isFullScreenPresentation: null };
      let tmp30Result5 = tmp30Result6;
      if (tmp30Result6) {
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
        const obj22 = { style: tmp.subscriptionHeader, onClickManagePremiumGuild: handleLearnMorePremiumGuild, subscription: tmp9 };
        tmp30Result5 = tmp30(tmp2(13408), obj22);
      }
      obj21.subscriptionDetails = tmp30Result5;
      if (tmp30Result6) {
        const obj23 = { style: tmp.billingInfo, subscription: tmp9 };
        tmp30Result6 = tmp30(tmp2(13445), obj23);
      }
      obj21.billingInfo = tmp30Result6;
      if (stateFromStores3) {
        const obj24 = { style: tmp.accountCredit, currentSubscription: tmp9, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 };
        stateFromStores3 = tmp30(tmp2(13447), obj24);
      }
      obj21.accountCredit = stateFromStores3;
      obj21.onClose = onClose;
      if (TIER_2_LEADING == null) {
        TIER_2_LEADING = tmp6(9455).PremiumFeatureCardOrder.TIER_2_LEADING;
      }
      obj21.premiumFeatureCardOrder = TIER_2_LEADING;
      obj21.entitlements = stateFromStores2;
      obj21.onPaymentSuccess = onPaymentSuccess;
      obj21.onPaymentDismiss = onPaymentDismiss;
      obj21.isFullScreenPresentation = isFullScreenPresentation;
      tmp30Result4 = tmp30(tmp2(13514), obj21);
      const tmp2Result = tmp2(13514);
    } else if (premiumTrialOfferPremiumType === TIER_0.TIER_0) {
      premiumFeatureCardOrder = tmp6(9455).PremiumFeatureCardOrder.TIER_0_LEADING;
    } else if (premiumTrialOfferPremiumType === tmp33.TIER_2) {
      premiumFeatureCardOrder = tmp6(9455).PremiumFeatureCardOrder.TIER_2_LEADING;
    }
    tmp31 = state;
    tmp6Result2 = tmp6(1115);
  }
  return tmp30Result;
};
