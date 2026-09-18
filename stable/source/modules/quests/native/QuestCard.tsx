// Module ID: 15093
// Function ID: 15094
// Name: QuestCard
// Dependencies: [5, 32, 19, 17, 1371, 7703, 5444, 1085, 21, 576, 4560, 4412, 4409, 5447, 7709, 11779, 11488, 1477, 11290, 15094, 8880, 7602, 7607, 7728, 504, 11295, 7724, 7699, 11300, 4495, 11047, 4262, 15121, 11491, 11197, 11198, 11202, 5451, 11501, 4527, 15123, 1896, 11780, 7552, 1114, 11772, 11518, 15127, 11281, 11297, 11298, 4982, 10124, 8692, 1115, 8843, 4556, 15128, 5607, 15167, 5587, 4987, 1093, 15153, 5591, 15134, 11775, 15168, 4973, 4975, 15171, 8098, 10186, 15154, 2]

// Module 15093 (QuestCard)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import design_shared from "design/shared" /* 4412 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11197 */;
import AssetUtils from "AssetUtils" /* 11290 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11501 */;
import QuestUtils from "QuestUtils" /* 11772 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15121 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 15127 */;
import VideoQuestModal from "VideoQuestModal" /* 15128 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import QuestStore from "QuestStore" /* 7703 */;

const require = globalThis.__r;

const ColorUtils = tmp(4409);
require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, StyleSheet, View: closure_7 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let createStyles = fn(4560);
let result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const internal = nativeDefault.internal;
  const colors = nativeDefault.colors;
  const semanticColor = internal.resolveSemanticColor(theme, design_shared.isThemeDark(theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const isThemeDarkResult = design_shared.isThemeDark(theme);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(4560);
let result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const isThemeDarkResult = design_shared.isThemeDark(theme);
  const internal = nativeDefault.internal;
  const colors = nativeDefault.colors;
  const semanticColor = internal.resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  let num = 0.5;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return ColorUtils.hexOpacityToRgba(semanticColor, num);
});
createStyles = fn(4560);
let result2 = createStyles.experimental_createToken((theme) => {
  const colors = nativeDefault.colors;
  return design_shared.isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
const PX_16 = nativeDefault.space.PX_16;
createStyles = fn(4560);
let obj = { container: { position: "relative", padding: 0, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: nativeDefault.space.PX_16, overflow: "hidden" }, heroContainer: null, heroImg: null, heroLinearGradientOverlay: null, previewBadge: null, previewBadgeText: null, rewardImgContainer: null, heroFooterContainer: null, heroFooterLeftContainer: null, promotedByRow: null, shrinkableText: null, detailsWrapper: null, detailsContainer: null, questName: null, bodyContainer: null, subtitleRow: null, rewardSubtitleRow: null, orbWithAmountRow: null, detailsTextContainer: null, buttonContainers: null, equalWidthContainer: null };
let obj6 = { position: "relative", padding: 0, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: nativeDefault.space.PX_16, overflow: "hidden" };
obj.heroContainer = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.heroImg = { resizeMode: "cover" };
obj.heroLinearGradientOverlay = StyleSheet.absoluteFillObject;
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm };
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.previewBadge = rect;
obj.previewBadgeText = { textTransform: "uppercase" };
let size = { height: 64, width: 64, marginRight: nativeDefault.space.PX_12 };
obj.rewardImgContainer = size;
obj.heroFooterContainer = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" };
obj.heroFooterLeftContainer = { display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 1 };
let obj7 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
let obj8 = { resizeMode: "cover" };
obj.promotedByRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_4 };
obj.shrinkableText = { flexShrink: 1 };
let obj9 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_4 };
obj.detailsWrapper = { display: "flex", padding: nativeDefault.space.PX_12 };
obj.detailsContainer = { display: "flex", flexDirection: "row" };
let obj10 = { display: "flex", padding: nativeDefault.space.PX_12 };
obj.questName = { marginBottom: nativeDefault.space.PX_4 };
let obj11 = { marginBottom: nativeDefault.space.PX_4 };
obj.bodyContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj12 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.subtitleRow = { flexDirection: "row", alignItems: "center", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.rewardSubtitleRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", flexShrink: 1 };
obj.orbWithAmountRow = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj.detailsTextContainer = { flex: 1, justifyContent: "center" };
let obj13 = { flexDirection: "row", alignItems: "center", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.buttonContainers = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12 };
obj.equalWidthContainer = { flexBasis: 0, flexGrow: 1, flexShrink: 1 };
let closure_16 = createStyles.createStyles(obj);
createStyles = fn(4560);
let closure_17 = createStyles.createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
let obj14 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12 };
size = fn(2);
let result3 = size.fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = noop.memo((questContent) => {
  function trackClick(CLAIM_REWARD) {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_card")) {
      const obj2 = { type: tmp(11202).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: CLAIM_REWARD, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      tmp(11198).captureAdUserAction(obj2);
      const tmpResult = tmp(11198);
    } else {
      const obj3 = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: CLAIM_REWARD, sourceQuestContent };
      closure_6(obj3);
    }
  }
  function showQuestBottomSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15123, dependencyMap.paths), "QuestBottomSheet", { questId: quest.id, questContentPosition, sourceQuestContent });
  }
  ({ onLayout: require, quest } = questContent);
  let QUEST_HOME_MOBILE = questContent.questContent;
  if (undefined === QUEST_HOME_MOBILE) {
    QUEST_HOME_MOBILE = require("QuestTypes").QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: asyncGeneratorStep, sourceQuestContent } = questContent);
  const tmp3 = require;
  const tmp4 = QUEST_HOME_MOBILE;
  noop = require("getQuestLogger").getQuestLogger({ quest, location: first.QUEST_HOME_MOBILE });
  let obj = require("getQuestLogger");
  let obj2 = { quest, location: first.QUEST_HOME_MOBILE };
  closure_6 = require("AnalyticsHooks").useTrackQuestContentClickedWithImpression();
  let obj3 = require("AnalyticsHooks");
  const questTaskDetails = require("hooks/QuestHooks").useQuestTaskDetails(quest);
  let obj4 = require("hooks/QuestHooks");
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp9 = closure_16();
  const shrinkableText = tmp9;
  const diff = quest(tmp4[17])().width - 2 * hasWatchVideoOnMobileTasks;
  UserStore = diff;
  let result = 0.2803030303030303 * diff;
  QuestStore = result;
  let items = [quest, diff, result];
  const memo = noop.useMemo(() => {
    const questAsset = AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
    const obj2 = {};
    const merged = Object.assign(questAsset);
    const obj3 = AssetUtils;
    if (questAsset.isAnimated) {
      const size = { assetUrl: questAsset.url, width: diff, height: result };
      let url = obj3.getScaledFirstFrameImageUrl(size);
      if (url == null) {
        url = questAsset.url;
      }
      obj2.url = url;
      let tmp5 = obj2;
    } else {
      const size1 = { assetUrl: questAsset.url, width: diff, height: result };
      obj2.url = obj3.getScaledImageUrl(size1);
      tmp5 = obj2;
    }
    return tmp5;
  }, items);
  let obj5 = require("hooks/QuestHooks");
  const tmp11 = hasWatchVideoOnMobileTasks;
  const tmp8 = null != enrolledAt;
  const questGameLogotypeAssetUrl = tmp3(tmp4[19]).useQuestGameLogotypeAssetUrl(quest);
  const tmp3Result = tmp3(tmp4[19]);
  ({ gradientEnd, gradientStart, gradientMid } = product());
  const tmp16 = product();
  let items1 = [quest.id];
  let tmp17 = sourceQuestContent(tmp3(tmp4[20]).useRecyclingState(null, items1), 2);
  first = tmp17[0];
  onPress = tmp19;
  let items2 = [tmp17[1]];
  const callback = noop.useCallback(() => {
    closure_11(false);
  }, items2);
  let items3 = [first, quest.id, QUEST_HOME_MOBILE];
  const effect = noop.useEffect(() => {
    if (false === first) {
      const obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + quest.id, , ];
      const obj = MonitoringAgentDefault;
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + AnalyticsTypes.getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj2.tags = items;
      obj.increment(obj2);
    }
  }, items3);
  const tmp3Result40 = tmp3(tmp4[20]);
  const items4 = [UserStore];
  const stateFromStores = tmp3(tmp4[24]).useStateFromStores(items4, () => diff.getCurrentUser());
  const tmp3Result41 = tmp3(tmp4[24]);
  const defaultRewardNameWithArticle = tmp3(tmp4[25]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmp3Result42 = tmp3(tmp4[25]);
  const items5 = [QuestStore];
  const stateFromStoresObject = tmp3(tmp4[24]).useStateFromStoresObject(items5, () => ({ reward: QuestStore.getRewards(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id), isEnrolling: QuestStore.isEnrolling(quest.id), questEnrollmentBlockedUntil: QuestStore.questEnrollmentBlockedUntil }));
  ({ isFetchingRewardCode, isClaimingReward, questEnrollmentBlockedUntil } = stateFromStoresObject);
  const tmp3Result43 = tmp3(tmp4[24]);
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = tmp3(tmp4[16]).useQuestFormattedDate(completedAt, { year: "numeric", month: "long", day: "numeric" });
  const tmp3Result44 = tmp3(tmp4[16]);
  const hasWatchVideoTasksResult = tmp3(tmp4[26]).hasWatchVideoTasks(quest);
  const tmp3Result45 = tmp3(tmp4[26]);
  hasWatchVideoOnMobileTasks = tmp3(tmp4[19]).useHasWatchVideoOnMobileTasks(quest.config);
  const userStatus3 = quest.userStatus;
  let enrolledAt1;
  if (userStatus3 != null) {
    enrolledAt1 = userStatus3.enrolledAt;
  }
  const userStatus4 = quest.userStatus;
  let completedAt1;
  if (userStatus4 != null) {
    completedAt1 = userStatus4.completedAt;
  }
  let tmp92Result10 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (userStatus5 != null) {
    claimedAt = userStatus5.claimedAt;
  }
  closure_16 = tmp35;
  const tmp3Result46 = tmp3(tmp4[19]);
  const isQuestExpiredResult = tmp3(tmp4[27]).isQuestExpired(quest);
  const tmp3Result47 = tmp3(tmp4[27]);
  const isQuestExpiredButWithinThirtyDayLookback = tmp3(tmp4[27]).getIsQuestExpiredButWithinThirtyDayLookback(quest);
  const tmp3Result48 = tmp3(tmp4[27]);
  const tmp3Result49 = tmp3(tmp4[28]);
  const tmp38 = quest(tmp4[29])();
  const isThemeDarkResult = tmp3(tmp4[11]).isThemeDark(tmp38);
  const tmp3Result50 = tmp3(tmp4[11]);
  const result1 = tmp3(tmp4[25]).hasCollectiblesQuestReward(quest.config);
  const tmp3Result51 = tmp3(tmp4[25]);
  let skuId = null;
  if (result1) {
    skuId = null;
    if (tmp92Result10) {
      skuId = tmp3Result49.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = tmp3(tmp4[30]).useFetchCollectiblesProduct(skuId);
  product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const tmp3Result52 = tmp3(tmp4[30]);
  const items6 = [UserStore];
  const currentUserHasVerifiedEmailOrPhone = tmp3(tmp4[24]).useStateFromStores(items6, () => {
    const currentUser = diff.getCurrentUser();
    result = undefined;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const tmp3Result53 = tmp3(tmp4[24]);
  const items7 = [UserStore];
  const currentUserHasVerifiedEmail = tmp3(tmp4[24]).useStateFromStores(items7, () => {
    const currentUser = diff.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const tmp3Result54 = tmp3(tmp4[24]);
  const mobileActivityQuest = tmp3(tmp4[19]).useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const tmp3Result55 = tmp3(tmp4[19]);
  const token = tmp3(tmp4[31]).useToken(tmp10(tmp4[9]).colors.BACKGROUND_BASE_LOWER);
  const tmp3Result56 = tmp3(tmp4[31]);
  const token1 = tmp3(tmp4[31]).useToken(tmp10(tmp4[9]).colors.BACKGROUND_BASE_LOW);
  const tmp3Result57 = tmp3(tmp4[31]);
  let tmp47 = null != questEnrollmentBlockedUntil;
  const token2 = tmp3(tmp4[31]).useToken(tmp10(tmp4[9]).colors.BACKGROUND_BASE_LOWEST);
  if (tmp47) {
    tmp47 = !tmp31;
  }
  if (tmp47) {
    tmp47 = !tmp92Result10;
  }
  if (tmp47) {
    tmp47 = !tmp35;
  }
  const tmp3Result58 = tmp3(tmp4[31]);
  const isQuestAccessSuspended = tmp3(tmp4[16]).useIsQuestAccessSuspended();
  let obj7 = {
    disabled: true,
    onPressDisabled() {
      closure_6({ questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent });
      openQuestAccessSuspendedBottomSheetDefault();
    }
  };
  const tmp3Result59 = tmp3(tmp4[16]);
  const questFormattedDate1 = tmp3(tmp4[16]).useQuestFormattedDate(quest.config.expiresAt, { month: "numeric", day: "numeric" });
  const tmp3Result60 = tmp3(tmp4[16]);
  const getQuestImpressionId = tmp3(tmp4[33]).useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = obj6.useCallback(() => {
    const obj = QuestPlatformUtils;
    obj.openGameLinkDirectly(quest, { content: QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
  }, items8);
  const tmp3Result61 = tmp3(tmp4[33]);
  const primaryCtaCopy = tmp3(tmp4[42]).usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    let obj8 = { buttonColors, confettiColors: null, backgroundColors: null };
    const styles = product.styles;
    let confettiColors;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    obj8.confettiColors = confettiColors;
    const items9 = [tmp10(tmp4[43])(token1), tmp10(tmp4[43])(token), tmp10(tmp4[43])(token2)];
    obj8.backgroundColors = items9;
    product.styles = obj8;
  }
  if (null != claimedAt) {
    let obj9 = { text: null, loading: null, onPress: null };
    let intl4 = tmp3(tmp4[44]).intl;
    obj9.text = intl4.string(tmp3(tmp4[44]).t.vTgCWx);
    obj9.loading = isFetching;
    obj9.onPress = function onPress() {
      trackClick(AnalyticsTypes.QuestContentCTA.SHOW_REWARD);
      QuestUtils.viewReward({ product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition, sourceQuestContent });
    };
    let obj15 = obj9;
  } else {
    if (tmp92Result10) {
      let obj10 = { text: null, loading: null, onPress: null };
      let intl3 = tmp3(tmp4[44]).intl;
      obj10.text = intl3.string(tmp3(tmp4[44]).t.cfY4PE);
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      obj10.loading = isClaimingReward;
      obj10.onPress = function onPress() {
        trackClick(AnalyticsTypes.QuestContentCTA.CLAIM_REWARD);
        result = QuestUtils.handleRewardClaimThenView({ product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition, currentUserHasVerifiedEmailOrPhone, currentUserHasVerifiedEmail, sourceQuestContent });
      };
      let tmp70 = null;
      if (isQuestAccessSuspended) {
        tmp70 = obj7;
      }
      let merged = Object.assign(tmp70);
      obj15 = obj10;
    }
    if (isQuestExpiredResult) {
      let obj11 = { text: null, loading: null, disabled: true, variant: "secondary", onPress: null };
      let intl2 = tmp3(tmp4[44]).intl;
      let obj12 = { expiryDate: questFormattedDate1 };
      obj11.text = intl2.formatToPlainString(tmp3(tmp4[44]).t["6p8BZx"], obj12);
      let tmp68 = isClaimingReward;
      if (!isClaimingReward) {
        tmp68 = isFetchingRewardCode;
      }
      if (!tmp68) {
        tmp68 = isFetching;
      }
      obj11.loading = tmp68;
      obj11.onPress = onPress;
      obj15 = obj11;
    } else {
      if (tmp31) {
        if (hasWatchVideoTasksResult) {
          let obj13 = { text: tmp3(tmp4[46]).getVideoQuestWatchCtaText(questTaskDetails), accessibilityLabel: null, disabled: false, onPress: null };
          const tmp3Result63 = tmp3(tmp4[46]);
          obj13.accessibilityLabel = tmp3(tmp4[46]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
          obj13.onPress = function onPress() {
            logger.log("Navigating to video quest bottom sheet");
            trackClick(AnalyticsTypes.QuestContentCTA.WATCH_VIDEO);
            if (hasWatchVideoOnMobileTasks) {
              const obj = { questId: quest.id, sourceQuestContent };
              tmp5(15127)(obj);
            } else {
              const obj2 = { questId: quest.id, questContentPosition, sourceQuestContent };
              tmp5(4527).openLazy(asyncRequireImpl(15123, dependencyMap.paths), "QuestBottomSheet", obj2);
              const tmp5Result = tmp5(4527);
            }
          };
          let tmp64 = null;
          if (isQuestAccessSuspended) {
            tmp64 = obj7;
          }
          let merged1 = Object.assign(tmp64);
          obj15 = obj13;
          const tmp3Result64 = tmp3(tmp4[46]);
        }
      }
      if (tmp31) {
        if (isMobileActivityQuest) {
          let obj14 = {
            text: primaryCtaCopy,
            icon: tmp3(tmp4[45]).getPrimaryCtaIcon(quest),
            disabled: false,
            onPress() {
                      trackClick(AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
                      callback3();
                    }
          };
          let tmp60 = null;
          if (isQuestAccessSuspended) {
            tmp60 = obj7;
          }
          let merged2 = Object.assign(tmp60);
          obj15 = obj14;
          const tmp3Result65 = tmp3(tmp4[45]);
        }
      }
      if (tmp31) {
        if (!hasWatchVideoTasksResult) {
          if (!isMobileActivityQuest) {
            obj15 = { text: null, variant: "secondary", disabled: false, onPress: null };
            let intl = tmp3(tmp4[44]).intl;
            obj15.text = intl.string(tmp3(tmp4[44]).t.JiosAn);
            obj15.onPress = function onPress() {
              logger.log("Navigating to console connection action sheet");
              trackClick(AnalyticsTypes.QuestContentCTA.VIEW_REQUIREMENTS);
              ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15123, dependencyMap.paths), "QuestBottomSheet", { questId: quest.id, questContentPosition, sourceQuestContent });
            };
          }
        }
      }
      let obj16 = { text: primaryCtaCopy, disabled: false, loading: stateFromStoresObject.isEnrolling, accessibilityLabel: null, icon: null, onPress: null };
      let videoQuestWatchCtaAccessibilityLabel;
      if (hasWatchVideoTasksResult) {
        videoQuestWatchCtaAccessibilityLabel = tmp3(tmp4[46]).getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
        const tmp3Result66 = tmp3(tmp4[46]);
      }
      obj16.accessibilityLabel = videoQuestWatchCtaAccessibilityLabel;
      let primaryCtaIcon;
      if (isMobileActivityQuest) {
        primaryCtaIcon = tmp3(tmp4[45]).getPrimaryCtaIcon(quest);
        const tmp3Result67 = tmp3(tmp4[45]);
      }
      obj16.icon = primaryCtaIcon;
      closure_25 = asyncGeneratorStep(async (arg0, value) => {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                logger.log("Enrolling in quest");
                tmp2(11281);
                let obj4 = { questContent: QUEST_HOME_MOBILE, questContentCTA: null, sourceQuestContent: null };
                if (!isMobileActivityQuest) {
                  if (!hasWatchVideoTasksResult) {
                    let START_QUEST = tmp30(7728).QuestContentCTA.ACCEPT_QUEST;
                  }
                  obj4.questContentCTA = START_QUEST;
                  obj4.sourceQuestContent = sourceQuestContent;
                  obj4 = tmp33(tmp35, obj4);
                  v1 = 1;
                  dependencyMap = 1;
                }
                START_QUEST = tmp30(7728).QuestContentCTA.START_QUEST;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              if (closure_128_14) {
                if (closure_128_15) {
                  const obj = { questId: closure_128_1.id, sourceQuestContent: closure_128_4 };
                  v1(15127)(obj);
                  dependencyMap = 3;
                }
                closure_128_32();
              }
              if (!closure_128_20) {
                closure_128_24();
              }
            }
          } catch (tmp21) {
            dependencyMap = tmp;
            throw tmp21;
          }
        }
      });
      obj16.onPress = function() {
        const self = this;
        const apply = closure_25.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      let tmp56 = null;
      if (isQuestAccessSuspended) {
        tmp56 = obj7;
      }
      let merged3 = Object.assign(tmp56);
      obj15 = obj16;
    }
  }
  const intl5 = tmp3(tmp4[44]).intl;
  let obj17 = { questName: quest.config.messages.questName };
  const tmp3Result62 = tmp3(tmp4[42]);
  const formatToPlainStringResult = intl5.formatToPlainString(tmp3(tmp4[44]).t.EAYZAr, { questName: quest.config.messages.questName });
  const result2 = tmp3(tmp4[25]).hasVirtualCurrencyReward(quest.config);
  const tmp3Result68 = tmp3(tmp4[25]);
  const questOrbMultiplierEligibility = tmp3(tmp4[49]).useQuestOrbMultiplierEligibility();
  const tmp3Result69 = tmp3(tmp4[49]);
  let shouldShowBonusOrbsUX = tmp3(tmp4[16]).useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp78 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp78 = questOrbMultiplierEligibility === tmp3(tmp4[50]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const userStatus6 = quest.userStatus;
  let orbQuantityClaimed;
  if (userStatus6 != null) {
    orbQuantityClaimed = userStatus6.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    orbQuantityClaimed = tmp3(tmp4[25]).getVirtualCurrencyRewardOrbQuantity(quest.config);
    const tmp3Result71 = tmp3(tmp4[25]);
  }
  const tmp3Result70 = tmp3(tmp4[16]);
  const questOrbRewardQuantityForUser = tmp3(tmp4[25]).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
  const tmp3Result72 = tmp3(tmp4[25]);
  const defaultRewardName = tmp3(tmp4[25]).getDefaultRewardName(quest.config, stateFromStores);
  const tmp3Result73 = tmp3(tmp4[25]);
  const fontScale = tmp3(tmp4[51]).useFontScale();
  const tmp3Result74 = tmp3(tmp4[51]);
  const scaledTextLineHeight = tmp3(tmp4[52]).useScaledTextLineHeight("text-md/semibold");
  const tmp3Result75 = tmp3(tmp4[52]);
  const questDescription = tmp3(tmp4[42]).useQuestDescription(quest, sourceQuestContent, tmp5.QUEST_HOME_MOBILE, tmp3(tmp4[53]).GameProfileSources.QuestHome);
  const result3 = 16 * Math.min(fontScale, 1.3);
  const items10 = [null != claimedAt, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle, result3, scaledTextLineHeight, , , ];
  ({ orbWithAmountRow: arr13[8], rewardSubtitleRow: arr13[9], shrinkableText: arr13[10] } = tmp9);
  let tmp87 = isQuestExpiredResult;
  const memo1 = obj6.useMemo(() => {
    let num = 0;
    if (obj.isAndroid()) {
      num = 16 / scaledTextLineHeight;
    }
    result = tmp / 8;
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: shrinkableText.shrinkableText };
    const size = { width: tmp, height: tmp, marginRight: result, marginTop: 0, transform: null };
    const items = [{ translateY: num }];
    size.transform = items;
    if (closure_16) {
      if (result2) {
        const obj3 = { style: tmp6.orbWithAmountRow, children: null };
        const obj4 = { size: "custom", color: "mobile-text-heading-primary", style: size };
        const items1 = [closure_2_12(tmp2(8843).OrbsIcon, obj4), , ];
        const obj5 = { style: null };
        const obj6 = { width: result };
        obj5.style = obj6;
        items1[1] = closure_2_12(React5, obj5);
        const obj7 = {};
        const merged = Object.assign(obj2);
        const intl4 = tmp2(1114).intl;
        let num4 = orbQuantityClaimed;
        if (orbQuantityClaimed == null) {
          num4 = 0;
        }
        const obj8 = { orbAmount: num4 };
        obj7.children = intl4.format(tmp2(1114).t["nLXlh+"], obj8);
        items1[2] = closure_2_12(tmp2(4556).Text, obj7);
        obj3.children = items1;
        let tmp15Result = map1(React5, obj3);
      }
      return tmp15Result;
    }
    if (closure_16) {
      const obj9 = {};
      const merged1 = Object.assign(obj2);
      obj9.children = defaultRewardName;
      tmp15Result = closure_2_12(tmp2(4556).Text, obj9);
    } else if (result2) {
      const obj10 = { style: tmp6.rewardSubtitleRow, children: null };
      const obj11 = {};
      const merged2 = Object.assign(obj2);
      const intl2 = tmp2(1114).intl;
      const obj12 = {
        rewardWithArticleHook() {
            return null;
          }
      };
      obj11.children = intl2.format(tmp2(1114).t["0IUT4Y"], obj12);
      const items2 = [closure_2_12(tmp2(4556).Text, obj11), ];
      const obj13 = { style: tmp6.orbWithAmountRow, children: null };
      const obj14 = { size: "custom", color: "mobile-text-heading-primary", style: size };
      const items3 = [closure_2_12(tmp2(8843).OrbsIcon, obj14), , ];
      const obj15 = { style: null };
      const obj16 = { width: result };
      obj15.style = obj16;
      items3[1] = closure_2_12(React5, obj15);
      const obj17 = {};
      const merged3 = Object.assign(obj2);
      const intl3 = tmp2(1114).intl;
      let num3 = questOrbRewardQuantityForUser;
      if (questOrbRewardQuantityForUser == null) {
        num3 = 0;
      }
      const obj18 = { orbAmount: num3 };
      obj17.children = intl3.format(tmp2(1114).t["nLXlh+"], obj18);
      items3[2] = closure_2_12(tmp2(4556).Text, obj17);
      obj13.children = items3;
      items2[1] = map1(React5, obj13);
      obj10.children = items2;
      tmp15Result = tmp15(tmp16, obj10);
    } else {
      const obj19 = {};
      const merged4 = Object.assign(obj2);
      const intl = tmp2(1114).intl;
      const obj20 = {
        rewardWithArticleHook() {
            return defaultRewardNameWithArticle;
          }
      };
      obj19.children = intl.format(tmp2(1114).t["0IUT4Y"], obj20);
      tmp15Result = closure_2_12(tmp2(4556).Text, obj19);
    }
  }, items10);
  if (isQuestExpiredResult) {
    tmp87 = tmp92Result10;
  }
  if (tmp87) {
    tmp87 = !tmp35;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp87) {
    const intl6 = tmp3(tmp4[44]).intl;
    let obj18 = { date: questFormattedDate };
    formatToPlainStringResult1 = intl6.formatToPlainString(tmp3(tmp4[44]).t["l1jCM/"], obj18);
  }
  const tmp3Result76 = tmp3(tmp4[42]);
  const items11 = [quest.id, sourceQuestContent];
  const ctaLink = tmp3(tmp4[28]).getCtaLink(quest.config);
  const callback2 = obj6.useCallback(() => {
    const obj = { questId: quest.id, initialStep: VideoQuestModal.VideoQuestModalSteps.WATCH_VIDEO, sourceQuestContent };
    openVideoQuestModalDefault(obj);
  }, items11);
  const items12 = [launchMobileActivity];
  const callback3 = obj6.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            result = v3(QUEST_HOME_MOBILE[45]).dismissOverlayScreens();
            c1 = 1;
            v3 = 1;
            const obj5 = { value: launchMobileActivity(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        v3 = tmp;
        throw tmp9;
      }
    }
  }), items12);
  let obj19 = {
    style: null,
    onLayout(arg0) {
      if (require != null) {
        tmp(arg0, quest.id);
      }
    },
    children: null
  };
  const items13 = [tmp9.container, { marginHorizontal: tmp11 - questContent.containerPadding }];
  obj19.style = items13;
  let obj20 = { visible: tmp78, glow: true, children: null };
  const obj21 = { style: null, children: null };
  const items14 = [tmp9.heroContainer, { minHeight: result, backgroundColor: gradientEnd }];
  obj21.style = items14;
  const tmp3Result77 = tmp3(tmp4[28]);
  const items15 = [defaultRewardNameWithArticle(quest(tmp4[60]), { source: { uri: memo.url }, style: tmp9.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName }), , , ];
  const obj23 = { style: tmp9.heroLinearGradientOverlay, start: null, end: null, colors: null };
  const obj22 = { source: { uri: memo.url }, style: tmp9.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName };
  const tmp10Result = quest(tmp4[59]);
  obj23.start = tmp3(tmp4[62]).VerticalGradient.START;
  obj23.end = tmp3(tmp4[62]).VerticalGradient.END;
  const items16 = [gradientStart, gradientMid, gradientEnd];
  obj23.colors = items16;
  items15[1] = defaultRewardNameWithArticle(quest(tmp4[61]), obj23);
  let preview = quest.preview;
  if (preview) {
    const obj24 = { style: tmp9.previewBadge, children: null };
    const obj25 = { variant: "eyebrow", color: "text-overlay-light", style: tmp9.previewBadgeText, children: null };
    const intl7 = tmp3(tmp4[44]).intl;
    obj25.children = intl7.string(tmp3(tmp4[44]).t.SKNnqq);
    obj24.children = tmp92(tmp3(tmp4[56]).Text, obj25);
    preview = tmp92(tmp95, obj24);
  }
  items15[2] = preview;
  const obj26 = { style: tmp9.heroFooterContainer, children: null };
  const obj27 = { style: tmp9.heroFooterLeftContainer, children: null };
  const items17 = [defaultRewardNameWithArticle(quest(tmp4[63]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  const obj28 = { style: tmp9.promotedByRow, children: null };
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  const obj29 = { variant: "text-xs/medium", color: str2, style: tmp9.shrinkableText, children: null };
  const intl8 = tmp3(tmp4[44]).intl;
  obj29.children = intl8.string(tmp3(tmp4[44]).t.VAbKhK);
  const items18 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, obj29), , ];
  const obj30 = { source: quest(tmp4[64]), style: { height: 16, width: 16 }, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
  const intl9 = tmp3(tmp4[44]).intl;
  obj30.accessibilityLabel = intl9.string(tmp3(tmp4[44]).t.OfMjx9);
  items18[1] = defaultRewardNameWithArticle(closure_6, obj30);
  items18[2] = defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "text-xs/medium", color: "text-overlay-light", style: tmp9.shrinkableText, children: quest.config.messages.gamePublisher });
  obj28.children = items18;
  items17[1] = questEnrollmentBlockedUntil(shrinkableText, obj28);
  obj27.children = items17;
  const items19 = [questEnrollmentBlockedUntil(shrinkableText, obj27), ];
  let tmp92Result = !isQuestExpiredResult;
  if (!isQuestExpiredResult) {
    tmp92Result = !tmp35;
  }
  if (tmp92Result) {
    if (isThemeDarkResult) {
      str = "text-default";
    }
    const obj32 = { variant: "text-xs/medium", color: str, style: tmp9.shrinkableText, children: null };
    const intl10 = tmp3(tmp4[44]).intl;
    const obj33 = { expiryDate: questFormattedDate1 };
    obj32.children = intl10.format(tmp3(tmp4[44]).t["7D8r4F"], obj33);
    tmp92Result = tmp92(tmp3(tmp4[56]).Text, obj32);
  }
  items19[1] = tmp92Result;
  obj26.children = items19;
  items15[3] = questEnrollmentBlockedUntil(shrinkableText, obj26);
  obj21.children = items15;
  const items20 = [questEnrollmentBlockedUntil(shrinkableText, obj21), , ];
  const obj34 = { style: tmp9.detailsWrapper, children: null };
  const obj35 = { style: tmp9.detailsContainer, children: null };
  const obj36 = { style: tmp9.rewardImgContainer, children: null };
  if (tmp8) {
    const obj37 = { quest, progress: obj5.useQuestCompletionDetails(quest).completedRatio, size: "sm" };
    let tmp92Result6 = tmp92(tmp10(tmp4[65]), obj37);
  } else {
    let size = { quest, height: 64, width: 64 };
    tmp92Result6 = tmp92(tmp10(tmp4[66]), size);
  }
  obj36.children = tmp92Result6;
  const items21 = [defaultRewardNameWithArticle(shrinkableText, obj36), ];
  const obj38 = { style: tmp9.detailsTextContainer, children: null };
  const items22 = [defaultRewardNameWithArticle(tmp3(tmp4[56]).Text, { variant: "eyebrow", color: "text-brand", style: tmp9.questName, accessibilityRole: "header", children: formatToPlainStringResult }), ];
  const obj40 = { style: tmp9.bodyContainer, children: null };
  const obj41 = { style: tmp9.subtitleRow, children: null };
  const items23 = [memo1, ];
  if (shouldShowBonusOrbsUX) {
    const obj42 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    shouldShowBonusOrbsUX = tmp92(tmp3(tmp4[67]).QuestOrbMultiplierPerkPill, obj42);
  }
  items23[1] = shouldShowBonusOrbsUX;
  obj41.children = items23;
  const items24 = [questEnrollmentBlockedUntil(shrinkableText, obj41), ];
  let tmp92Result7 = null != formatToPlainStringResult1;
  if (tmp92Result7) {
    const obj43 = { variant: "text-sm/medium", color: "text-muted", children: formatToPlainStringResult1 };
    tmp92Result7 = tmp92(tmp3(tmp4[56]).Text, obj43);
  }
  items24[1] = tmp92Result7;
  obj40.children = items24;
  items22[1] = questEnrollmentBlockedUntil(shrinkableText, obj40);
  obj38.children = items22;
  items21[1] = questEnrollmentBlockedUntil(shrinkableText, obj38);
  obj35.children = items21;
  obj34.children = questEnrollmentBlockedUntil(shrinkableText, obj35);
  items20[1] = defaultRewardNameWithArticle(shrinkableText, obj34);
  const obj44 = { direction: "horizontal", align: "center", spacing: quest(tmp4[9]).space.PX_8, style: tmp9.buttonContainers, children: null };
  const obj45 = { children: null };
  if (tmp47) {
    const obj46 = { grow: true, onPress, variant: "secondary", disabled: true, text: null };
    const intl11 = tmp3(tmp4[44]).intl;
    obj46.text = intl11.string(tmp3(tmp4[44]).t.V293qn);
    const items25 = [tmp92(tmp3(tmp4[69]).Button, obj46), ];
    const obj47 = {
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15171, dependencyMap.paths), "QuestEnrollmentBlockedBottomSheet", { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent });
        },
      variant: "tertiary",
      text: null
    };
    const intl12 = tmp3(tmp4[44]).intl;
    obj47.text = intl12.string(tmp3(tmp4[44]).t.vY9GgG);
    items25[1] = tmp92(tmp3(tmp4[69]).Button, obj47);
    obj45.children = items25;
    let tmp105 = obj45;
  } else {
    let tmp92Result8 = "" !== ctaLink && !tmp47 && !isQuestExpiredResult && !tmp35 && !tmp92Result10;
    if (tmp92Result8) {
      const obj48 = { style: tmp9.equalWidthContainer, children: null };
      const obj49 = { grow: true, variant: "secondary", text: tmp3(tmp4[28]).getExternalCtaLabel(quest), onPress: callback1 };
      obj48.children = tmp92(tmp3(tmp4[69]).Button, obj49);
      tmp92Result8 = tmp92(tmp95, obj48);
      const tmp3Result78 = tmp3(tmp4[28]);
    }
    const items26 = [tmp92Result8, ];
    const obj50 = { style: tmp9.equalWidthContainer, children: null };
    const obj51 = { grow: true };
    let merged4 = Object.assign(obj15);
    obj50.children = tmp92(tmp3(tmp4[69]).Button, obj51);
    items26[1] = tmp92(tmp95, obj50);
    obj45.children = items26;
    tmp105 = obj45;
  }
  const items27 = [questEnrollmentBlockedUntil(hasWatchVideoTasksResult, tmp105), , , ];
  let tmp92Result9 = tmp92Result10;
  if (tmp92Result10) {
    tmp92Result9 = hasWatchVideoTasksResult;
  }
  if (tmp92Result9) {
    tmp92Result9 = hasWatchVideoOnMobileTasks;
  }
  if (tmp92Result9) {
    const obj52 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl13 = tmp3(tmp4[44]).intl;
    obj52.accessibilityLabel = intl13.string(tmp3(tmp4[44]).t.YsCuyF);
    obj52.icon = tmp10(tmp4[72]);
    obj52.onPress = callback2;
    tmp92Result9 = tmp92(tmp3(tmp4[71]).IconButton, obj52);
  }
  items27[1] = tmp92Result9;
  if (tmp92Result10) {
    tmp92Result10 = isMobileActivityQuest;
  }
  if (tmp92Result10) {
    const obj53 = { accessibilityLabel: null, icon: null, onPress: null, variant: "secondary" };
    const intl14 = tmp3(tmp4[44]).intl;
    obj53.accessibilityLabel = intl14.string(tmp3(tmp4[44]).t.CkUzLd);
    obj53.icon = tmp10(tmp4[72]);
    obj53.onPress = callback3;
    tmp92Result10 = tmp92(tmp3(tmp4[71]).IconButton, obj53);
  }
  items27[2] = tmp92Result10;
  items27[3] = defaultRewardNameWithArticle(quest(tmp4[73]), { quest, showShareLink: !isQuestExpiredResult, location: first.QUESTS_CARD, sourceQuestContent });
  obj44.children = items27;
  items20[2] = questEnrollmentBlockedUntil(tmp3(tmp4[68]).Stack, obj44);
  obj20.children = items20;
  obj19.children = questEnrollmentBlockedUntil(tmp10Result, obj20);
  return defaultRewardNameWithArticle(tmp3(tmp4[58]).Card, obj19);
});
