// Module ID: 7902
// Function ID: 7903
// Name: PremiumUpsellActionSheet
// Dependencies: [32, 19, 17, 4597, 1183, 1185, 4426, 1371, 1373, 1074, 4652, 7903, 7897, 21, 4605, 576, 4306, 4262, 7904, 5229, 5184, 7905, 7906, 1114, 5742, 4299, 2024, 7908, 7909, 4572, 7901, 7910, 7911, 13367, 13368, 12281, 12290, 13371, 1093, 504, 9428, 7252, 4601, 1115, 8879, 5637, 5037, 7214, 9383, 10035, 10036, 9391, 1242, 10037, 4470, 7249, 13372, 5025, 8104, 2]
// Exports: default

// Module 7902 (PremiumUpsellActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PremiumUtils from "PremiumUtils" /* 4262 */;
import ChatInputUtils from "ChatInputUtils" /* 4470 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import LinearGradientDefault from "LinearGradient" /* 5037 */;
import FastImageDefault from "FastImage" /* 5637 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 7901 */;
import showForLaterModal from "showForLaterModal" /* 7910 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7911 */;
import APNGPlayer from "APNGPlayer" /* 8879 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9428 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4426 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function AlwaysCompressImagesSwitch(isKestrelTreatment) {
  const tmp = closure_25();
  const items = [UnsyncedUserSettingsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const callback = noop.useCallback((dataSavingMode) => {
    const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ dataSavingMode });
  }, []);
  let tmp6 = null;
  if (_slicedToArray(noop.useState(!stateFromStores), 1)[0]) {
    tmp6 = null;
    if (!isKestrelTreatment.isKestrelTreatment) {
      const obj2 = { style: tmp.compressionContainer, children: null };
      const obj3 = { start: true, end: true, label: null, value: null, onValueChange: null, subLabel: null };
      const intl = tmp2(1114).intl;
      obj3.label = intl.string(tmp2(1114).t.ix8XIj);
      obj3.value = stateFromStores;
      obj3.onValueChange = callback;
      const obj4 = { style: tmp.compressionHint, variant: "text-xs/normal", children: null };
      const intl2 = tmp2(1114).intl;
      obj4.children = intl2.string(tmp2(1114).t["wC0+Ph"]);
      obj3.subLabel = __initData2(tmp2(4601).Text, obj4);
      obj2.children = __initData2(tmp2(7252).TableSwitchRow, obj3);
      tmp6 = __initData2(View, obj2);
    }
  }
  return tmp6;
}
function PremiumUpsellImage(arg0) {
  ({ image, style, useReducedMotion } = arg0);
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        const obj2 = { url: image.uri, style, autoplay: true };
        let tmp5 = __initData2(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  tmp5 = __initData2(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
}
function PremiumUpsellHero(arg0) {
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    let tmp13 = __initData2(View, obj2);
  } else {
    tmp13 = null;
    if (null != pageConfig.image) {
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: null };
        const obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: null };
        const obj5 = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        obj5.style = items;
        obj5.useReducedMotion = useReducedMotion;
        obj4.children = __initData2(PremiumUpsellImage, obj5);
        obj3.children = __initData2(LinearGradientDefault, obj4);
        let tmp3 = __initData2(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        obj.style = items1;
        obj.useReducedMotion = useReducedMotion;
        tmp3 = __initData2(PremiumUpsellImage, obj);
      }
    }
  }
  return tmp13;
}
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: closure_11, PremiumTypes: closure_12, PremiumUpsellTypes: map1 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, HelpdeskArticles: closure_16, ThemeTypes: closure_17 } = Constants);
const ApplicationStreamFPS = fn(4652).ApplicationStreamFPS;
const SavedMessagesConstants = fn(7903);
({ SAVED_BOOKMARKS_MAX: closure_19, SAVED_REMINDERS_MAX: closure_20 } = SavedMessagesConstants);
const premiumMax = fn(7897).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { hero: { alignSelf: "center", marginTop: nativeDefault.space.PX_16 }, image: { width: 240, height: 144 }, text: { alignSelf: "center", textAlign: "center" }, betaTag: { marginLeft: 0 }, description: null, textContainer: null, buttonContainer: null, compressionContainer: null, compressionHint: null, imageGradientBackgroundContainer: null, imageGradientBackground: null, imageInGradientBackground: null };
let obj3 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj2.description = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.textContainer = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
let obj6 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.compressionContainer = { marginTop: nativeDefault.space.PX_24 };
obj2.compressionHint = { marginTop: 2 };
obj2.imageGradientBackgroundContainer = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj7 = { marginTop: nativeDefault.space.PX_24 };
obj2.imageGradientBackground = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
let obj8 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj2.imageInGradientBackground = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_25 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(onDismiss) {
  ({ featureName, legacyProps } = onDismiss);
  ({ subfeatureName, analyticsLocations } = onDismiss);
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  let analyticsLocations2;
  let useTier0UpsellContent;
  let onViewAllPerks;
  noop = undefined;
  const tmp = closure_25();
  const tmp2 = legacyProps;
  const tmp3 = useTier0UpsellContent;
  const items = [UserStore];
  const stateFromStores = legacyProps(useTier0UpsellContent[39]).useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations2 = analyticsLocations2(useTier0UpsellContent[47])(analyticsLocations).analyticsLocations;
  let obj = legacyProps(useTier0UpsellContent[39]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    initialUpsellKey = tmp2(tmp3[49]).getUpsellType(featureName);
    const tmp2Result = tmp2(tmp3[49]);
  }
  const premiumUpsellConfig = legacyProps(useTier0UpsellContent[48]).usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  let obj2 = legacyProps(useTier0UpsellContent[48]);
  const tmp6 = analyticsLocations;
  const items1 = [ThemeStore];
  const stateFromStores1 = tmp2(tmp3[39]).useStateFromStores(items1, () => theme.theme);
  const tmp2Result14 = tmp2(tmp3[39]);
  const items2 = [SelectedGuildStore];
  const stateFromStores2 = tmp2(tmp3[39]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp12 = useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2;
  const tmp2Result15 = tmp2(tmp3[39]);
  const token = tmp2(tmp3[16]).useToken(tmp5(tmp3[15]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const tmp2Result16 = tmp2(tmp3[16]);
  let str = "dark";
  const token1 = tmp2(tmp3[16]).useToken(tmp5(tmp3[15]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants4.LIGHT) {
    str = "light";
  }
  const tmp2Result17 = tmp2(tmp3[16]);
  const premiumTypeDisplayName = tmp2(tmp3[17]).getPremiumTypeDisplayName(tmp12);
  let kestrelConfig;
  if (featureName === tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    kestrelConfig = tmp2(tmp3[19]).getKestrelConfig({ location: "native.PremiumUpsellActionSheet" });
    const tmp2Result19 = tmp2(tmp3[19]);
  }
  let effectiveKestrelLimit;
  if (null != kestrelConfig) {
    const tmp2Result20 = tmp2(tmp3[19]);
    effectiveKestrelLimit = tmp2Result20.getEffectiveKestrelLimit(kestrelConfig, tmp2(tmp3[20]).maxFileSize(stateFromStores2));
    const tmp2Result21 = tmp2(tmp3[20]);
  }
  const tmp18 = subfeatureName === tmp2(tmp3[21]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  closure_129_0 = tmp18;
  if (subfeatureName === tmp2(tmp3[21]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const forLaterLimit = tmp2(tmp3[22]).getForLaterLimit("native.PremiumUpsellActionSheet", tmp18);
    const tmp2Result22 = tmp2(tmp3[22]);
  }
  const tmp20 = tmp18 ? closure_20 : closure_19;
  const obj3 = {};
  const obj4 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = tmp2(tmp3[23]).intl;
  obj4.title = intl.string(tmp2(tmp3[23]).t.jGDYF0);
  const intl2 = tmp2(tmp3[23]).intl;
  obj4.description = intl2.formatToPlainString(tmp2(tmp3[23]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj4.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj4.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  const tmp2Result18 = tmp2(tmp3[17]);
  obj4.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl3 = tmp2(tmp3[23]).intl;
  obj6.title = intl3.string(tmp2(tmp3[23]).t.zY5PPb);
  const intl4 = tmp2(tmp3[23]).intl;
  obj6.description = intl4.formatToPlainString(tmp2(tmp3[23]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj6.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj6.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const obj5 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj6.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl5 = tmp2(tmp3[23]).intl;
  obj8.title = intl5.string(tmp2(tmp3[23]).t.Eukdgl);
  const intl6 = tmp2(tmp3[23]).intl;
  obj8.description = intl6.string(tmp2(tmp3[23]).t.sMmd7s);
  obj8.analyticsPage = constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  obj8.upsellType = constants.STICKERS_EVERYWHERE_UPSELL;
  obj8.illustration = closure_22(tmp2(tmp3[24]).StickersSpotIllustration, { width: 188, height: 106, accessible: false });
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: null, showBetaBadge: null, isKestrelRaisedCap: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl7 = tmp2(tmp3[23]).intl;
  obj9.title = intl7.string(tmp2(tmp3[23]).t["G+pngo"]);
  let enabled;
  if (kestrelConfig != null) {
    enabled = kestrelConfig.enabled;
  }
  obj9.showBetaBadge = true === enabled && true !== kestrelConfig.isGA;
  let enabled1;
  if (kestrelConfig != null) {
    enabled1 = kestrelConfig.enabled;
  }
  obj9.isKestrelRaisedCap = true === enabled1;
  const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj10 = { guildId: stateFromStores2, maxSize: effectiveKestrelLimit, hideLearnMore: null, onClick: null };
  let isGA;
  if (kestrelConfig != null) {
    isGA = kestrelConfig.isGA;
  }
  const tmp2Result23 = tmp2(tmp3[20]);
  obj10.hideLearnMore = true === isGA;
  obj10.onClick = function onClick() {
    const obj = analyticsLocations2(useTier0UpsellContent[25]);
    obj.openURL(analyticsLocations2(useTier0UpsellContent[26]).getArticleURL(constants.NITRO_FAQ));
  };
  obj9.description = closure_22(closure_23, { children: tmp2(tmp3[20]).fileUploadLimitRoadblockDescription(obj10) });
  obj9.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
  obj9.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
  const obj11 = { children: tmp2(tmp3[20]).fileUploadLimitRoadblockDescription(obj10) };
  obj9.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj9;
  const obj13 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl8 = tmp2(tmp3[23]).intl;
  obj13.title = intl8.string(tmp2(tmp3[23]).t.SI7R9I);
  const intl9 = tmp2(tmp3[23]).intl;
  obj13.description = intl9.formatToPlainString(tmp2(tmp3[23]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj13.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj13.upsellType = constants.ANIMATED_EMOJI_UPSELL;
  const obj12 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj13.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj13;
  const obj15 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = tmp2(tmp3[23]).intl;
  obj15.title = intl10.string(tmp2(tmp3[23]).t.p0I2Bk);
  const intl11 = tmp2(tmp3[23]).intl;
  obj15.description = intl11.string(tmp2(tmp3[23]).t.jBqF2k);
  obj15.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
  obj15.upsellType = constants.CLIENT_THEMES_UPSELL;
  obj15.image = analyticsLocations2(tmp3[27]);
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.CLIENT_THEMES] = obj15;
  const obj16 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = tmp2(tmp3[23]).intl;
  obj16.title = intl12.string(tmp2(tmp3[23]).t.TYFwcy);
  const intl13 = tmp2(tmp3[23]).intl;
  obj16.description = intl13.string(tmp2(tmp3[23]).t.HDt8ip);
  obj16.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
  obj16.upsellType = constants.APP_ICON_UPSELL;
  obj16.image = analyticsLocations2(tmp3[28]);
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.APP_ICONS] = obj16;
  if (null == forLaterLimit) {
    const intl15 = tmp2(tmp3[23]).intl;
    let stringResult = intl15.string(tmp2(tmp3[23]).t.YXk6N7);
  } else {
    const intl14 = tmp2(tmp3[23]).intl;
    const t = tmp2(tmp3[23]).t;
    const obj17 = { premiumMax: tmp20 };
    stringResult = intl14.formatToPlainString(tmp18 ? t["cpj9o/"] : t.Oxm3Sq, obj17);
  }
  const obj18 = { title: stringResult, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  if (null == forLaterLimit) {
    const intl17 = tmp2(tmp3[23]).intl;
    let stringResult1 = intl17.string(tmp2(tmp3[23]).t["m/HzW8"]);
  } else {
    const intl16 = tmp2(tmp3[23]).intl;
    const t2 = tmp2(tmp3[23]).t;
    const obj19 = { children: null };
    const obj20 = {
      max: forLaterLimit,
      premiumMax: tmp20,
      onClick() {
          ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
          const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
          showForLaterModal.showForLaterModal(legacyProps ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
        }
    };
    obj19.children = intl16.format(tmp18 ? t2.NRF0Wh : t2.o5OLyw, obj20);
    stringResult1 = tmp23(tmp26, obj19);
  }
  obj18.description = stringResult1;
  obj18.analyticsPage = constants3.PREMIUM_UPSELL_FOR_LATER;
  obj18.upsellType = constants.FOR_LATER_MODAL_UPSELL;
  obj18.image = analyticsLocations2(tmp18 ? tmp3[33] : tmp3[34]);
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.SAVED_MESSAGES] = obj18;
  const obj21 = { title: null, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl18 = tmp2(tmp3[23]).intl;
  obj21.title = intl18.formatToPlainString(tmp2(tmp3[23]).t.GNoaxo, { premiumMax });
  const obj23 = { children: null };
  const intl19 = tmp2(tmp3[23]).intl;
  obj23.children = intl19.format(tmp2(tmp3[23]).t["1kFyto"], {
    premiumMax,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[29]).hideActionSheet(legacyProps(useTier0UpsellContent[30]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[29]);
      const result = legacyProps(useTier0UpsellContent[35]).showScheduledMessagesModal();
    }
  });
  obj21.description = closure_22(closure_23, obj23);
  obj21.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj21.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj21.image = analyticsLocations2(tmp3[36]);
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj21;
  const obj25 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, imageGradientBackground: null };
  const intl20 = tmp2(tmp3[23]).intl;
  obj25.title = intl20.string(tmp2(tmp3[23]).t.ETZQx5);
  const intl21 = tmp2(tmp3[23]).intl;
  obj25.description = intl21.formatToPlainString(tmp2(tmp3[23]).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj25.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj25.upsellType = constants.STREAM_QUALITY_UPSELL;
  obj25.image = analyticsLocations2(tmp3[37]);
  const obj27 = { colors: null, start: tmp2(tmp3[38]).HorizontalGradient.START, end: tmp2(tmp3[38]).HorizontalGradient.END };
  const items3 = [token, token1];
  obj27.colors = items3;
  obj25.imageGradientBackground = obj27;
  obj3[tmp2(tmp3[18]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj25;
  noop = tmp30;
  const obj14 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj22 = { premiumMax };
  const obj24 = {
    premiumMax,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[29]).hideActionSheet(legacyProps(useTier0UpsellContent[30]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[29]);
      const result = legacyProps(useTier0UpsellContent[35]).showScheduledMessagesModal();
    }
  };
  const obj26 = { fps: ApplicationStreamFPS.FPS_60 };
  const items4 = [AccessibilityStore];
  const stateFromStores3 = tmp2(tmp3[39]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result24 = tmp2(tmp3[39]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2(tmp3[50]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2(tmp3[51]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
    const tmp2Result26 = tmp2(tmp3[51]);
  }
  const items5 = [obj3[featureName], analyticsLocations2, useTier0UpsellContent, legacyProps];
  const effect = noop.useEffect(() => {
    let analyticsProperties;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj2 = {};
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj2.type = upsellType;
    obj2.location = location;
    obj2.location_stack = analyticsLocations2;
    const obj = AnalyticsUtilsDefault;
    obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? closure_2_11.TIER_0 : closure_2_11.TIER_2);
    obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
  }, items5);
  const tmp34 = analyticsLocations2(tmp3[53])(useTier0UpsellContent, onViewAllPerks, obj3[featureName].analyticsPage, undefined, tmp6);
  const loading = tmp34.loading;
  [][0] = onViewAllPerks;
  let tmp23Result4 = null;
  if (null != obj3[featureName]) {
    const obj28 = { startExpanded: true, onDismiss: onDismiss.onDismiss, children: null };
    const obj29 = { pageConfig: tmp30, styles: tmp, useReducedMotion: stateFromStores3 };
    const items6 = [tmp23(PremiumUpsellHero, obj29), , , ];
    const obj30 = { style: tmp.textContainer, children: null };
    let tmp23Result = null;
    if (true === tmp30.showBetaBadge) {
      const obj31 = { size: tmp2(tmp3[56]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      tmp23Result = tmp23(tmp5(tmp3[56]), obj31);
      const tmp5Result = tmp5(tmp3[56]);
    }
    const items7 = [tmp23Result, , ];
    const obj32 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp30.title };
    items7[1] = tmp23(tmp2(tmp3[42]).Text, obj32);
    const obj33 = { style: null, variant: "text-sm/normal", children: null };
    const items8 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    obj33.style = items8;
    obj33.children = tmp30.description;
    items7[2] = tmp23(tmp2(tmp3[42]).Text, obj33);
    obj30.children = items7;
    items6[1] = closure_24(View, obj30);
    let tmp23Result3 = null;
    if (featureName === tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
      const obj34 = { isKestrelTreatment: true === tmp30.isKestrelRaisedCap };
      tmp23Result3 = tmp23(AlwaysCompressImagesSwitch, obj34);
    }
    items6[2] = tmp23Result3;
    const obj35 = { style: tmp.buttonContainer, children: null };
    const obj36 = { loading, onPress: null, text: null, icon: null, variant: null };
    let onPress = null;
    if (!loading) {
      onPress = tmp34.onPress;
    }
    obj36.onPress = onPress;
    const intl22 = tmp2(tmp3[23]).intl;
    const string = intl22.string;
    const t3 = tmp2(tmp3[23]).t;
    if (useTier0UpsellContent) {
      let stringResult2 = string(t3.cM8bbx);
    } else {
      stringResult2 = string(t3["8x0jKT"]);
    }
    obj36.text = stringResult2;
    obj36.icon = tmp5(tmp3[58]);
    let str3 = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str4 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str4 = "experimental_premium-basic";
      }
      str3 = str4;
    }
    const obj37 = { children: null };
    obj36.variant = str3;
    const items9 = [tmp23(tmp2(tmp3[57]).Button, obj36), ];
    const obj38 = { variant: "secondary", text: null, onPress: null };
    const intl23 = tmp2(tmp3[23]).intl;
    obj38.text = intl23.string(tmp2(tmp3[23]).t.PcTCB7);
    obj38.onPress = tmp35;
    items9[1] = tmp23(tmp2(tmp3[57]).Button, obj38);
    obj35.children = items9;
    items6[3] = closure_24(View, obj35);
    obj37.children = items6;
    obj28.children = closure_24(View, obj37);
    tmp23Result4 = tmp23(tmp2(tmp3[55]).ActionSheet, obj28);
  }
  return tmp23Result4;
};
