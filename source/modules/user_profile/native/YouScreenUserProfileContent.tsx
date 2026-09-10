// Module ID: 16897
// Function ID: 16898
// Name: YouScreenUserProfileContent
// Dependencies: [32, 19, 17, 1949, 5329, 7672, 8246, 7260, 1954, 14666, 21, 16890, 16452, 1115, 8319, 8304, 13134, 8744, 13135, 8253, 9246, 11270, 12037, 1943, 7440, 13066, 5025, 10320, 576, 1114, 16898, 16899, 16886, 1484, 8249, 11182, 8305, 504, 8290, 8301, 13015, 16900, 9101, 13145, 13146, 13147, 11188, 16901, 13150, 15777, 13068, 11279, 8669, 13156, 16903, 13121, 13161, 13167, 9862, 4341, 7208, 11184, 11224, 9840, 12684, 12686, 2]
// Exports: default

// Module 16897 (YouScreenUserProfileContent)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8304 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8319 */;
import FormDividerDefault from "FormDivider" /* 8669 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8744 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11188 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11279 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13068 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13121 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13134 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13135 */;
import UserProfileConnections from "UserProfileConnections" /* 13156 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13161 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13167 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16452 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16890 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 16901 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 16903 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5329 */;
import UserProfileStore from "UserProfileStore" /* 7672 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function YouAvatar(arg0) {
  const callback = noop.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabAvatarPress();
    const result1 = showYouAccountActionSheet.showYouAccountActionSheet();
  }, []);
  const isAndroidResult = PlatformUtils.isAndroid();
  const obj2 = {};
  const tmp3 = closure_1_14;
  const merged = Object.assign(arg0);
  obj2.onPress = callback;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.accessibilityElementsHidden = isAndroidResult;
  obj2.accessible = !isAndroidResult;
  return tmp3(UserProfileAvatarDefault, obj2);
}
function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: UserProfileSharedStylesDefault().profileContent, children: null };
  const items1 = [closure_1_14(UserProfileWidgetsBoardEditNoticeDefault, {}), closure_1_14(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items })];
  obj.children = items1;
  return __initData(timestampProducer, obj);
}
function YouScreenActivityTabContainer(user) {
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: null, children: closure_1_14(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = UserProfileSharedStylesDefault());
  obj.style = items1;
  return closure_1_14(timestampProducer, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  let trackUserProfileAction;
  let first;
  _slicedToArray = undefined;
  const tmp3 = trackUserProfileAction(first[15])();
  trackUserProfileAction = navigateToProfileCustomization(first[19]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const obj = navigateToProfileCustomization(first[19]);
  const isDisplayNameStylesFlywheelSettersEnabled = navigateToProfileCustomization(first[20]).useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const obj3 = navigateToProfileCustomization(first[20]);
  const isBadgeManagementEnabled = navigateToProfileCustomization(first[21]).useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const obj4 = navigateToProfileCustomization(first[21]);
  const customTypingIndicatorConfig = navigateToProfileCustomization(first[22]).useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp9 = useIsContentShown(navigateToProfileCustomization(first[23]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  let tmp10 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp10 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp10) {
    tmp10 = !tmp9;
  }
  const items = [];
  if (tmp10) {
    items.push(tmp4(tmp2[23]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let hasBadges = isProfileLoaded;
  if (isProfileLoaded) {
    hasBadges = isBadgeManagementEnabled;
  }
  if (hasBadges) {
    hasBadges = navigateToProfileCustomization.hasBadges;
  }
  if (hasBadges) {
    items.push(tmp4(tmp2[23]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
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
    items.push(tmp4(tmp2[23]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const obj5 = navigateToProfileCustomization(first[22]);
  const tmp14 = _slicedToArray(navigateToProfileCustomization(first[24]).useSelectedDismissibleContent(items), 2);
  first = tmp14[0];
  _slicedToArray = tmp16;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp14[1]];
  const items2 = [navigateToProfileCustomization];
  const callback = obj2.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = you_tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      closure_3(ContentDismissActionType.TAKE_ACTION);
    }
  }, items1);
  const obj6 = { children: null };
  const callback1 = obj2.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items2);
  const obj7 = { style: tmp3.primaryButtons, secondaryButton: null };
  const tmp4Result = navigateToProfileCustomization(first[24]);
  const obj8 = { ref, variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmpResult = trackUserProfileAction(first[25]);
  obj8.icon = closure_14(navigateToProfileCustomization(first[27]).PencilIcon, { size: "sm", color: trackUserProfileAction(first[28]).colors.WHITE });
  const intl = tmp4(tmp2[29]).intl;
  obj8.text = intl.string(navigateToProfileCustomization(first[29]).t.AAjhgi);
  obj8.onPress = callback;
  obj7.secondaryButton = closure_14(navigateToProfileCustomization(first[26]).Button, obj8);
  const items3 = [closure_14(tmpResult, obj7), , , ];
  const obj9 = { size: "sm", color: trackUserProfileAction(first[28]).colors.WHITE };
  items3[1] = closure_14(trackUserProfileAction(first[30]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[23]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] });
  const obj10 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[23]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] };
  items3[2] = closure_14(trackUserProfileAction(first[31]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[23]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp14[1], onTryItOut: callback1 });
  const obj11 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[23]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp14[1], onTryItOut: callback1 };
  items3[3] = closure_14(trackUserProfileAction(first[32]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[23]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] });
  obj6.children = items3;
  return closure_15(closure_16, obj6);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const useIsContentShown = fn(1949).useIsContentShown;
let UserProfileSections = fn(8246).UserProfileSections;
const UserProfileThemeTypes = fn(7260).UserProfileThemeTypes;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let closure_13 = fn(14666).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
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
  closure_33 = undefined;
  const tmp3 = navigateToFriends(navigateToPremium[15])();
  closure_5 = tmp3;
  const navigation = user(navigateToPremium[33]).useNavigation();
  let obj = user(navigateToPremium[33]);
  const trackUserProfileAction = user(navigateToPremium[19]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[34])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[19]);
  const customStatusActivity = user(navigateToPremium[35]).useCustomStatusActivity();
  const arr = navigateToFriends(navigateToPremium[36])(tmp6);
  let obj3 = user(navigateToPremium[35]);
  let items = [displayProfile];
  const stateFromStores = user(navigateToPremium[37]).useStateFromStores(items, () => displayProfile.getStatus());
  const tmp9 = navigateToFriends(navigateToPremium[38])({ user, displayProfile: tmp6 });
  const primaryColor = tmp9.primaryColor;
  UserProfileSections = tmp10;
  ({ theme, secondaryColor } = tmp9);
  let obj4 = user(navigateToPremium[37]);
  const userProfileColors = user(navigateToPremium[39]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  let obj5 = user(navigateToPremium[39]);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items1);
  const ref = initialTab.useRef(null);
  const enabled = user(navigateToPremium[40]).useVirtualCurrencyMobileEnabled().enabled;
  let obj7 = user(navigateToPremium[40]);
  [obj8, tmp15] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp15;
  const tmp14 = navigateToShop(initialTab.useState(null), 2);
  const shouldShowExpiringTrialOfferCard = user(navigateToPremium[41]).useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[41]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = user(navigateToPremium[37]).useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj10 = user(navigateToPremium[37]);
  const tmp18 = user(navigateToPremium[42]).useDisplayableBoardWidgets(user.id).length > 0;
  closure_17 = tmp18;
  const obj11 = user(navigateToPremium[42]);
  const isRecentActivityMobileEnabled = user(navigateToPremium[43]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  const obj12 = user(navigateToPremium[43]);
  const profileTabIndices = user(navigateToPremium[44]).useProfileTabIndices(tmp18, isRecentActivityMobileEnabled, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const activityTabIndex = profileTabIndices.activityTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp21 = navigateToShop(initialTab.useState(0), 2);
  const pageWidth = tmp21[0];
  closure_23 = tmp21[1];
  const callback1 = initialTab.useCallback((nativeEvent) => {
    closure_23(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj13 = user(navigateToPremium[44]);
  const pageHeights = user(navigateToPremium[45]).usePageHeights();
  const handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = initialTab.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const obj14 = user(navigateToPremium[45]);
  const profileSectionTabs = user(navigateToPremium[44]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  const activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  const setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  const restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  const isVisible = tmp27;
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
    const items2 = [closure_2_14(YouExpiringTrialOfferCardDefault, { navigateToPremium, style: items }), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj4 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(13150), obj4);
    }
    items2[1] = tmp3Result;
    let tmp3Result2 = enabled;
    if (enabled) {
      const obj5 = { style: items };
      tmp3Result2 = tmp3(tmp4(15777), obj5);
    }
    items2[2] = tmp3Result2;
    items2[3] = closure_2_14(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[4] = closure_2_14(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[5] = closure_2_14(FormDividerDefault, {});
    items2[6] = closure_2_14(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = closure_2_14(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = closure_2_14(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends, style: items });
    items2[9] = closure_2_14(UserProfileNoteDefault, { userId: user.id });
    obj2.children = items2;
    return __initData(timestampProducer, obj2);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    const obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = closure_2_14(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = closure_2_14;
    } else {
      tmp4 = closure_2_14;
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
    return __initData(timestampProducer, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp18, isRecentActivityMobileEnabled, boardTabIndex, activityTabIndex, wishlistTabIndex, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = closure_2_14(hasOwnProperty, {
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
    if (isRecentActivityMobileEnabled) {
      const obj6 = { id: "activity", label: null, page: null };
      const intl3 = tmp(1114).intl;
      obj6.label = intl3.string(tmp(1114).t.chq59f);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj8 = { user, containerBackground, containerBorderColor };
      obj7.children = tmp3(YouScreenActivityTabContainer, obj8);
      obj6.page = tmp3(tmp4, obj7, activityTabIndex);
      items.push(obj6);
    }
    const obj9 = { id: "wishlist", label: null, page: null };
    const intl4 = tmp(1114).intl;
    obj9.label = intl4.string(util.t["7lZ31J"]);
    const obj2 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    obj9.page = closure_2_14(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(wishlistTabIndex, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj9);
    return items;
  }, items8);
  const obj15 = user(navigateToPremium[44]);
  let tmp4Result = user(navigateToPremium[58]);
  segmentedControlState = tmp4Result.useSegmentedControlState({ pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[28]).space.PX_24, items: memo, onPageChange: handleTabChange });
  const obj16 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[28]).space.PX_24, items: memo, onPageChange: handleTabChange };
  const pagerFillHeight = user(navigateToPremium[45]).usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result5 = user(navigateToPremium[45]);
  const pagesHeightStyle = user(navigateToPremium[45]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_33 = obj6.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj6.useEffect(() => {
    closure_33.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result6 = user(navigateToPremium[45]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[33]).useFocusEffect(obj6.useCallback(() => {
    if (undefined !== initialTab) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(initialTab === UserProfileSections.WISHLIST ? UserProfileSections.WISHLIST : UserProfileSections.MAIN);
        ref.current(num, false, true);
        navigation.setParams({ initialTab: "Array" });
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
  const obj17 = { style, children: null };
  const obj18 = { style: null, children: null };
  const items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj18.style = items12;
  const items13 = [c14(closure_17, { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  const obj20 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  const items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  obj20.style = items14;
  items13[1] = c14(navigateToFriends(navigateToPremium[61]), obj20);
  const obj21 = { style: null, children: null };
  const items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  obj21.style = items15;
  const obj22 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true };
  let pronouns;
  const obj19 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const tmp4Result7 = user(navigateToPremium[33]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj22.pronouns = pronouns;
  obj22.badges = arr;
  obj22.badgeContainerBackground = containerBackground;
  obj22.onPressDisplayName = callback;
  let intl = tmp4(tmp2[29]).intl;
  const obj23 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[62]);
  obj23.status = user(navigateToPremium[63]).getStatusLabel(stateFromStores);
  const tmp4Result8 = user(navigateToPremium[63]);
  let intl2 = tmp4(tmp2[29]).intl;
  obj22.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[29]).t["er+FRD"], obj23) + ", " + intl2.string(user(navigateToPremium[29]).t.C6COaT);
  obj22.themeType = containerBackground.YOU_SCREEN;
  const items16 = [c14(tmpResult, obj22), c14(activityTabIndex, { navigateToProfileCustomization, hasBadges: arr.length > 0, isProfileLoaded: null != tmp6 })];
  obj21.children = items16;
  items13[2] = shouldShowExpiringTrialOfferCard(navigation, obj21);
  const obj25 = { style: { flex: 1 }, onLayout: callback1, children: null };
  const obj26 = { style: tmp3.profileTablist, children: null };
  const obj27 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  const obj28 = { children: null };
  obj27.variant = str;
  obj26.children = c14(user(navigateToPremium[64]).Tabs, obj27);
  const items17 = [c14(navigation, obj26), ];
  const formatToPlainStringResult = intl.formatToPlainString(user(navigateToPremium[29]).t["er+FRD"], obj23);
  const obj24 = { navigateToProfileCustomization, hasBadges: arr.length > 0, isProfileLoaded: null != tmp6 };
  items17[1] = c14(navigateToFriends(navigateToPremium[59]).View, { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: c14(user(navigateToPremium[65]).SegmentedControlPages, { state: segmentedControlState }) });
  obj25.children = items17;
  items13[3] = shouldShowExpiringTrialOfferCard(navigation, obj25);
  obj18.children = items13;
  obj28.children = shouldShowExpiringTrialOfferCard(navigation, obj18);
  obj17.children = c14(user(navigateToPremium[60]).LayerScope, obj28);
  return c14(navigateToFriends(navigateToPremium[59]).View, obj17);
};
