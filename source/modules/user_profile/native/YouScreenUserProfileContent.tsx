// Module ID: 16840
// Function ID: 16841
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 1949, 5293, 7635, 8209, 7222, 1954, 21, 16833, 16403, 1115, 8282, 8267, 13094, 8707, 8216, 9209, 11230, 11997, 1943, 7402, 13026, 4989, 10282, 576, 1114, 16841, 16842, 16829, 1484, 8212, 11142, 8268, 504, 8253, 8264, 12975, 16843, 9064, 13099, 13100, 11148, 16844, 13103, 15728, 13028, 11239, 8632, 13109, 16846, 13081, 13114, 13120, 9824, 4310, 7170, 11144, 11184, 9802, 12644, 12646, 2]
// Exports: default

// Module 16840 (YouScreenUserProfileContent)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8267 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8282 */;
import FormDividerDefault from "FormDivider" /* 8632 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8707 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11148 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11239 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13028 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13081 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13094 */;
import UserProfileConnections from "UserProfileConnections" /* 13109 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13114 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13120 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16403 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16833 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 16844 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 16846 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5293 */;
import UserProfileStore from "UserProfileStore" /* 7635 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function YouAvatar(arg0) {
  const callback = noop.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabAvatarPress();
    const result1 = showYouAccountActionSheet.showYouAccountActionSheet();
  }, []);
  const isAndroidResult = PlatformUtils.isAndroid();
  const obj2 = {};
  const tmp3 = map1;
  const merged = Object.assign(arg0);
  obj2.onPress = callback;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.accessibilityElementsHidden = isAndroidResult;
  obj2.accessible = !isAndroidResult;
  return tmp3(UserProfileAvatarDefault, obj2);
}
function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: tmp.profileContent, children: null };
  const items1 = [map1(UserProfileWidgetsBoardEditNoticeDefault, {}), map1(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items })];
  obj.children = items1;
  return closure_1_14(timestampProducer, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  let trackUserProfileAction;
  let first;
  _slicedToArray = undefined;
  const tmp3 = trackUserProfileAction(first[14])();
  trackUserProfileAction = navigateToProfileCustomization(first[17]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const obj = navigateToProfileCustomization(first[17]);
  const obj2 = noop;
  const isDisplayNameStylesFlywheelSettersEnabled = navigateToProfileCustomization(first[18]).useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const obj3 = navigateToProfileCustomization(first[18]);
  const isBadgeManagementEnabled = navigateToProfileCustomization(first[19]).useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const obj4 = navigateToProfileCustomization(first[19]);
  const customTypingIndicatorConfig = navigateToProfileCustomization(first[20]).useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp9 = useIsContentShown(navigateToProfileCustomization(first[21]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  let tmp10 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp10 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp10) {
    tmp10 = !tmp9;
  }
  const items = [];
  if (tmp10) {
    items.push(tmp4(tmp2[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let hasBadges = isProfileLoaded;
  if (isProfileLoaded) {
    hasBadges = isBadgeManagementEnabled;
  }
  if (hasBadges) {
    hasBadges = navigateToProfileCustomization.hasBadges;
  }
  if (hasBadges) {
    items.push(tmp4(tmp2[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  if (isProfileLoaded) {
    isProfileLoaded = canSet;
  }
  if (isProfileLoaded) {
    isProfileLoaded = "profile" === entryPoint;
  }
  if (isProfileLoaded) {
    isProfileLoaded = !tmp9;
  }
  if (isProfileLoaded) {
    items.push(tmp4(tmp2[21]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const obj5 = navigateToProfileCustomization(first[20]);
  const tmp14 = _slicedToArray(navigateToProfileCustomization(first[22]).useSelectedDismissibleContent(items), 2);
  first = tmp14[0];
  _slicedToArray = tmp16;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp14[1]];
  const obj6 = { children: null };
  const callback = obj2.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = you_tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      closure_3(ContentDismissActionType.TAKE_ACTION);
    }
  }, items1);
  const obj7 = { style: tmp3.primaryButtons, secondaryButton: null };
  const tmp4Result = navigateToProfileCustomization(first[22]);
  const obj8 = { ref, variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmpResult = trackUserProfileAction(first[23]);
  obj8.icon = closure_13(navigateToProfileCustomization(first[25]).PencilIcon, { size: "sm", color: trackUserProfileAction(first[26]).colors.WHITE });
  const intl = tmp4(tmp2[27]).intl;
  obj8.text = intl.string(navigateToProfileCustomization(first[27]).t.AAjhgi);
  obj8.onPress = callback;
  obj7.secondaryButton = closure_13(navigateToProfileCustomization(first[24]).Button, obj8);
  const items2 = [closure_13(tmpResult, obj7), , , ];
  const obj9 = { size: "sm", color: trackUserProfileAction(first[26]).colors.WHITE };
  items2[1] = closure_13(trackUserProfileAction(first[28]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] });
  const obj10 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] };
  items2[2] = closure_13(trackUserProfileAction(first[29]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp14[1], onTryItOut: navigateToProfileCustomization });
  const obj11 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp14[1], onTryItOut: navigateToProfileCustomization };
  items2[3] = closure_13(trackUserProfileAction(first[30]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[21]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] });
  obj6.children = items2;
  return closure_14(closure_15, obj6);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const useIsContentShown = fn(1949).useIsContentShown;
let UserProfileSections = fn(8209).UserProfileSections;
const UserProfileThemeTypes = fn(7222).UserProfileThemeTypes;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  user = user.user;
  const navigateToFriends = user.navigateToFriends;
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  let flag = user.animateAvatar;
  ({ style, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let callback4;
  let callback5;
  let segmentedControlState;
  closure_31 = undefined;
  const tmp3 = navigateToFriends(navigateToPremium[14])();
  closure_5 = tmp3;
  const navigation = user(navigateToPremium[31]).useNavigation();
  let obj = user(navigateToPremium[31]);
  const trackUserProfileAction = user(navigateToPremium[17]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[32])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[17]);
  const customStatusActivity = user(navigateToPremium[33]).useCustomStatusActivity();
  const arr = navigateToFriends(navigateToPremium[34])(tmp6);
  let obj3 = user(navigateToPremium[33]);
  let items = [displayProfile];
  const stateFromStores = user(navigateToPremium[35]).useStateFromStores(items, () => displayProfile.getStatus());
  const tmp9 = navigateToFriends(navigateToPremium[36])({ user, displayProfile: tmp6 });
  const primaryColor = tmp9.primaryColor;
  UserProfileSections = tmp10;
  ({ theme, secondaryColor } = tmp9);
  let obj4 = user(navigateToPremium[35]);
  const userProfileColors = user(navigateToPremium[37]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  let obj5 = user(navigateToPremium[37]);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items1);
  const ref = initialTab.useRef(null);
  const enabled = user(navigateToPremium[38]).useVirtualCurrencyMobileEnabled().enabled;
  const obj7 = user(navigateToPremium[38]);
  [obj8, tmp15] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp15;
  const tmp14 = navigateToShop(initialTab.useState(null), 2);
  const shouldShowExpiringTrialOfferCard = user(navigateToPremium[39]).useShouldShowExpiringTrialOfferCard();
  const obj9 = user(navigateToPremium[39]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = user(navigateToPremium[35]).useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj10 = user(navigateToPremium[35]);
  const tmp18 = user(navigateToPremium[40]).useDisplayableBoardWidgets(user.id).length > 0;
  closure_17 = tmp18;
  const obj11 = user(navigateToPremium[40]);
  const profileTabIndices = user(navigateToPremium[41]).useProfileTabIndices(tmp18, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp20 = navigateToShop(initialTab.useState(0), 2);
  const pageWidth = tmp20[0];
  closure_21 = tmp20[1];
  const callback1 = initialTab.useCallback((nativeEvent) => {
    closure_21(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj12 = user(navigateToPremium[41]);
  const pageHeights = user(navigateToPremium[42]).usePageHeights();
  const handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = initialTab.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const obj13 = user(navigateToPremium[42]);
  const profileSectionTabs = user(navigateToPremium[41]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, onTabChange: callback2 });
  const activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  const setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  const restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  const isVisible = tmp26;
  const items4 = [customStatusActivity, tmp15];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  const callback3 = initialTab.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    _undefined(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = initialTab.useEffect(() => {
    setImmediate(() => {
      callback3();
    });
  }, items5);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items6 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj6.useCallback(() => {
    const items = [closure_5.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
    const obj2 = { style: null, children: null };
    const items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj2.style = items1;
    const items2 = [map1(YouExpiringTrialOfferCardDefault, { navigateToPremium, style: items }), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj4 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(13103), obj4);
    }
    items2[1] = tmp3Result;
    let tmp3Result2 = enabled;
    if (enabled) {
      const obj5 = { style: items };
      tmp3Result2 = tmp3(tmp4(15728), obj5);
    }
    items2[2] = tmp3Result2;
    items2[3] = map1(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[4] = map1(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[5] = map1(FormDividerDefault, {});
    items2[6] = map1(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = map1(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = map1(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends, style: items });
    items2[9] = map1(UserProfileNoteDefault, { userId: user.id });
    obj2.children = items2;
    return closure_2_14(timestampProducer, obj2);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    const obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = map1(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = map1;
    } else {
      tmp4 = map1;
      const obj2 = { wishlistId: tmp3, containerWidth: null, isVisible: null };
      let tmp8;
      if (first > 0) {
        tmp8 = first;
      }
      obj2.containerWidth = tmp8;
      obj2.isVisible = isVisible;
      tmp4Result = tmp4(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp4Result, ];
    const obj3 = { userId: user.id, wishlistId: stateFromStores1, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj3.containerWidth = tmp15;
    items[1] = tmp4(UserProfileWishlistSuggestionsGridDefault, obj3);
    obj.children = items;
    return closure_2_14(timestampProducer, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp18, boardTabIndex, wishlistTabIndex, user.id, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = map1(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    });
    const items = [obj];
    if (closure_17) {
      const obj3 = { id: "board", label: null, page: null };
      const intl2 = tmp(1114).intl;
      obj3.label = intl2.string(tmp(1114).t.laViwx);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      obj4.children = tmp3(YouScreenWidgetsBoardContainer, obj5);
      obj3.page = tmp3(tmp4, obj4, boardTabIndex);
      items.push(obj3);
    }
    const obj6 = { id: "wishlist", label: null, page: null };
    const intl3 = tmp(1114).intl;
    obj6.label = intl3.string(util.t["7lZ31J"]);
    const obj2 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    obj6.page = map1(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(wishlistTabIndex, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj6);
    return items;
  }, items8);
  const obj14 = user(navigateToPremium[41]);
  let tmp4Result = user(navigateToPremium[55]);
  segmentedControlState = tmp4Result.useSegmentedControlState({ pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[26]).space.PX_24, items: memo, onPageChange: handleTabChange });
  const obj15 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[26]).space.PX_24, items: memo, onPageChange: handleTabChange };
  const pagerFillHeight = user(navigateToPremium[42]).usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result5 = user(navigateToPremium[42]);
  const pagesHeightStyle = user(navigateToPremium[42]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_31 = obj6.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj6.useEffect(() => {
    closure_31.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result6 = user(navigateToPremium[42]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[31]).useFocusEffect(obj6.useCallback(() => {
    if (undefined !== initialTab) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(initialTab === UserProfileSections.WISHLIST ? UserProfileSections.WISHLIST : UserProfileSections.MAIN);
        ref.current(num, false, true);
        navigation.setParams({ initialTab: "disabled" });
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      if (!navigation.isFocused()) {
        const parent = obj.getParent();
        let isFocusedResult;
        if (parent != null) {
          isFocusedResult = parent.isFocused();
        }
        if (isFocusedResult) {
          const obj2 = { initialTab: UserProfileSections.MAIN };
          obj.setParams(obj2);
        }
      }
    };
  }, items11));
  const obj16 = { style, children: null };
  const obj17 = { style: null, children: null };
  const items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj17.style = items12;
  const items13 = [enabled(stateFromStores1, { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  const obj19 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  const items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  obj19.style = items14;
  items13[1] = enabled(navigateToFriends(navigateToPremium[58]), obj19);
  const obj20 = { style: null, children: null };
  const items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  obj20.style = items15;
  const obj21 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true };
  let pronouns;
  const obj18 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const tmp4Result7 = user(navigateToPremium[31]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj21.pronouns = pronouns;
  obj21.badges = arr;
  obj21.badgeContainerBackground = containerBackground;
  obj21.onPressDisplayName = callback;
  let intl = tmp4(tmp2[27]).intl;
  const obj22 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[59]);
  obj22.status = user(navigateToPremium[60]).getStatusLabel(stateFromStores);
  const tmp4Result8 = user(navigateToPremium[60]);
  let intl2 = tmp4(tmp2[27]).intl;
  obj21.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[27]).t["er+FRD"], obj22) + ", " + intl2.string(user(navigateToPremium[27]).t.C6COaT);
  obj21.themeType = containerBackground.YOU_SCREEN;
  const items16 = [enabled(tmpResult, obj21), enabled(boardTabIndex, { navigateToProfileCustomization, hasBadges: arr.length > 0, isProfileLoaded: null != tmp6 })];
  obj20.children = items16;
  items13[2] = c14(navigation, obj20);
  const obj24 = { style: { flex: 1 }, onLayout: callback1, children: null };
  const obj25 = { style: tmp3.profileTablist, children: null };
  const obj26 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  const obj27 = { children: null };
  obj26.variant = str;
  obj25.children = enabled(user(navigateToPremium[61]).Tabs, obj26);
  const items17 = [enabled(navigation, obj25), ];
  const formatToPlainStringResult = intl.formatToPlainString(user(navigateToPremium[27]).t["er+FRD"], obj22);
  const obj23 = { navigateToProfileCustomization, hasBadges: arr.length > 0, isProfileLoaded: null != tmp6 };
  items17[1] = enabled(navigateToFriends(navigateToPremium[56]).View, { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: enabled(user(navigateToPremium[62]).SegmentedControlPages, { state: segmentedControlState }) });
  obj24.children = items17;
  items13[3] = c14(navigation, obj24);
  obj17.children = items13;
  obj27.children = c14(navigation, obj17);
  obj16.children = enabled(user(navigateToPremium[57]).LayerScope, obj27);
  return enabled(navigateToFriends(navigateToPremium[56]).View, obj16);
};
