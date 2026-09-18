// Module ID: 13064
// Function ID: 13065
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 8783, 1979, 4209, 1371, 8161, 7621, 8184, 7208, 1074, 7151, 1954, 21, 8242, 504, 4527, 11154, 1896, 11121, 11117, 8191, 7162, 9048, 4404, 8098, 13065, 1114, 12624, 13066, 4499, 8243, 4712, 7190, 4258, 11157, 9213, 13000, 4975, 10255, 576, 9514, 13068, 8680, 8231, 8244, 1611, 13067, 13069, 13070, 7311, 11155, 8170, 13071, 8228, 8239, 8782, 13072, 9038, 13073, 13074, 13075, 13076, 12631, 13077, 13002, 13082, 11212, 7185, 13052, 13083, 13055, 13088, 13094, 9798, 8257, 8245, 13100, 4296, 13101, 13121, 13122, 13127, 13128, 7156, 12618, 12620, 13133, 2]

// Module 13064 (UserProfileContent)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8242 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8680 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9048 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9514 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11212 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12624 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12631 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13002 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13071 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 13076 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13077 */;
import UserProfileConnections from "UserProfileConnections" /* 13083 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13088 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13094 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 13122 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WishlistStore from "WishlistStore" /* 8783 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8161 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[15])();
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = user(channelId[16]).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const items2 = [channelId, guildId, user];
  let tmp7 = null;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11154, dependencyMap.paths), "UserProfileCustomStatusActionSheet", { user, guildId, channelId }, "stack");
  }, items2);
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[20])();
      }
    }
  }
  const ref = noop.useRef(tmp7);
  let labelResult;
  if (null != ref.current) {
    const current = ref.current;
    labelResult = current.label();
  }
  const obj2 = { ref: bubbleRef, customStatusActivity, hasCustomProfileTheme, editEnabled: null, onPressTruncatedStatus: null, style: null, emojiOnlyStyle: null, placeholderText: null, prompt: null };
  const obj = user(channelId[16]);
  const tmp10 = closure_19;
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  obj2.editEnabled = stateFromStores;
  let tmp12;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  obj2.onPressTruncatedStatus = tmp12;
  const items3 = [, ];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  obj2.style = items3;
  obj2.emojiOnlyStyle = tmp3.emojiOnlyCustomStatusBubble;
  obj2.placeholderText = labelResult;
  obj2.prompt = ref.current;
  return tmp10(guildId(channelId[21]), obj2);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
  }
  const trackUserProfileAction = user(newestAnalyticsLocation[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[23])().newestAnalyticsLocation;
  const obj = user(newestAnalyticsLocation[22]);
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[25]).useName(user);
  const obj3 = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(newestAnalyticsLocation[27]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[28]).intl;
  obj3.accessibilityLabel = intl.string(user(newestAnalyticsLocation[28]).t.cvSt1J);
  obj3.onPress = function onPress() {
    UserProfileAlertUtils.confirmRemoveFriend({ userDisplayName, onConfirm: handleConfirm });
  };
  return closure_19(user(newestAnalyticsLocation[26]).IconButton, obj3);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13066, dependencyMap.paths), "UserProfileGameFriendActionSheet", { user, guildId, channelId }, "stack");
  }, items);
  const obj = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(channelId[31]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[28]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[28]).t.cvSt1J);
  obj.onPress = callback;
  return closure_19(user(channelId[26]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = global);
    closure_0 = undefined;
    trackUserProfileAction = undefined;
    tmp2 = closure_2;
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = global);
    tmp = trackUserProfileAction;
    obj = trackUserProfileAction(closure_2[25]);
    userTag = obj.useUserTag(user);
    closure_0 = userTag;
    tmp4 = trackUserProfileAction(closure_2[32])(displayProfile);
    obj2 = trackUserProfileAction(closure_2[33]);
    guildId = undefined;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    name = obj2.useName(guildId, channelId, user);
    tmp7 = name;
    if (null != displayNameOverride) {
      num = 0;
      tmp7 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp7 = displayNameOverride;
      }
    }
    tmp8 = closure_0;
    obj3 = closure_0(tmp2[22]);
    trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
    items = [, ];
    items[0] = trackUserProfileAction;
    items[1] = userTag;
    callback = closure_4.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      ClipboardUtils.copy(userTag);
      const result = ToastUtils.presentUsernameCopied();
    }, items);
    tmp10 = jsx;
    obj1 = { user, guildId: null, displayName: null, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, pendingDisplayNameStyles: null };
    guildId1 = undefined;
    tmpResult = tmp(tmp2[36]);
    if (displayProfile != null) {
      guildId1 = displayProfile.guildId;
    }
    obj1.guildId = guildId1;
    obj1.displayName = tmp7;
    if (pronounsOverride == null) {
      pronouns = undefined;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      pronounsOverride = pronouns;
    }
    obj1.pronouns = pronounsOverride;
    if (badgesOverride == null) {
      badgesOverride = tmp4;
    }
    obj1.badges = badgesOverride;
    obj1.style = style;
    obj1.badgeContainerBackground = badgeContainerBackground;
    tmp14 = undefined;
    if (!isPreviewingChanges) {
      tmp14 = callback;
    }
    obj1.onPressDisplayName = tmp14;
    intl = tmp8(tmp2[28]).intl;
    obj1.displayNameAccessibilityHint = intl.string(tmp8(tmp2[28]).t.y5MwJy);
    tmp15 = undefined;
    if (!isPreviewingChanges) {
      tmp15 = callback;
    }
    obj1.onPressUserTag = tmp15;
    fn = undefined;
    if (!isPreviewingChanges) {
      fn = () => {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        ToastUtils.presentUserPronouns();
      };
    }
    obj1.onPressPronouns = fn;
    obj1.showBadgeToastOnPress = !isPreviewingChanges;
    obj1.pendingDisplayNameStyles = pendingDisplayNameStyles;
    return tmp10(tmpResult, obj1);
  }
}
function EditSection(guildId) {
  guildId = guildId.guildId;
  let trackUserProfileAction;
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8242)();
  trackUserProfileAction = guildId(8191).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = guildId(8191);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9213)();
  closure_3 = trackUserProfileAction(9213)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const obj2 = guildId(504);
  const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmp7 = trackUserProfileAction(13000);
  obj4.icon = closure_19(guildId(10255).PencilIcon, { size: "sm", color: trackUserProfileAction(576).colors.WHITE });
  if (null != stateFromStores) {
    const intl2 = tmp4(1114).intl;
    let stringResult = intl2.string(tmp4(1114).t.HmFaFB);
  } else {
    const intl = tmp4(1114).intl;
    stringResult = intl.string(tmp4(1114).t.s5vZlQ);
  }
  obj4.text = stringResult;
  obj4.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  obj3.primaryButton = closure_19(guildId(4975).Button, obj4);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp(576).colors.WHITE };
    obj6.icon = tmp6(tmp4(10255).PencilIcon, obj7);
    const intl3 = tmp4(1114).intl;
    obj6.text = intl3.string(tmp4(1114).t["PKQB/H"]);
    obj6.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = tmp6(tmp4(4975).Button, obj6);
  }
  obj3.secondaryButton = tmp6Result;
  return closure_19(tmp7, obj3);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [tmp3.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp3.profileContent, children: null };
  if (isCurrentUser) {
    isCurrentUser = closure_1_19(tmp(13068), {});
  }
  const items1 = [isCurrentUser, closure_1_19(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items })];
  obj.children = items1;
  return closure_1_20(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8184).UserProfileSections;
const Constants = fn(7208);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = Constants);
const RelationshipTypes = fn(1074).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default noop.memo(function UserProfileContent(user) {
  user = user.user;
  const channel = user.channel;
  const displayProfile = user.displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  let isCurrentUser;
  let userProfileGameFriendApplicationIds;
  let guild_id;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  closure_17 = undefined;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  closure_22 = undefined;
  closure_23 = undefined;
  let boardTabIndex;
  let wishlistTabIndex;
  c26 = undefined;
  let handlePageContentSize;
  let markAsDismissed;
  setActiveProfileTabSection = undefined;
  let restoreActiveIndex;
  let isVisible;
  let isVisible2;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let obj8;
  ({ disableMessage, disableStatus, location: _location, initialSection, scrollPosition } = user);
  const tmp3 = channel(displayProfile[15])();
  closure_7 = tmp3;
  const tmp4 = channel(displayProfile[45])(closure_17);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(displayProfile[46])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(displayProfile[46])({ scrollPosition, bannerHeight: tmp4 });
  const trackUserProfileAction = user(displayProfile[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(displayProfile[22]);
  let items = [isCurrentUser];
  const stateFromStores = user(displayProfile[16]).useStateFromStores(items, () => isCurrentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  isCurrentUser = tmp9;
  let obj2 = user(displayProfile[16]);
  let items1 = [stateFromStores];
  const stateFromStoresObject = user(displayProfile[16]).useStateFromStoresObject(items1, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result = user(displayProfile[16]);
  const incomingGameRelationshipsForUser = user(displayProfile[48]).useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result19 = user(displayProfile[48]);
  const isGameFriends = user(displayProfile[49]).useIsGameFriends(user.id);
  const tmp6Result20 = user(displayProfile[49]);
  userProfileGameFriendApplicationIds = user(displayProfile[50]).useUserProfileGameFriendApplicationIds({ userId: user.id });
  if (null != displayProfile) {
    const guildId = displayProfile.guildId;
    guild_id = guildId;
  } else if (channel != null) {
    guild_id = channel.guild_id;
  }
  let obj3 = { userId: user.id };
  const tmp6Result21 = user(displayProfile[50]);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  name = channel(displayProfile[33]).useName(guild_id, id1, user);
  let items2 = [guild_id, user];
  const memo = isPreviewingChanges.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const obj = {};
        const items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items2);
  const tmpResult = channel(displayProfile[33]);
  const subscribeGuildMembers = user(displayProfile[51]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(displayProfile[52])(user.id);
  const tmp6Result22 = user(displayProfile[51]);
  const items3 = [userProfileGameFriendApplicationIds];
  const stateFromStoresObject1 = user(displayProfile[16]).useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result23 = user(displayProfile[16]);
  const pendingAvatarSrc = user(displayProfile[53]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp20 = channel(displayProfile[32])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp20;
  const items4 = [tmp20, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = isPreviewingChanges.useMemo(() => PendingBadgeSettings.applyPendingBadgeSettingsToProfileBadges(closure_17, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items4);
  let obj5 = { user, displayProfile, pendingThemeColors: null };
  let tmp23;
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result24 = user(displayProfile[53]);
  if (isPreviewingChanges) {
    tmp23 = pendingThemeColors;
  }
  obj5.pendingThemeColors = tmp23;
  const tmpResult1Result = channel(displayProfile[55])(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp25;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult5 = channel(displayProfile[55]);
  const userProfileColors = user(displayProfile[56]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result25 = user(displayProfile[56]);
  const ref1 = isPreviewingChanges.useRef(null);
  const ref = isPreviewingChanges.useRef(null);
  const items5 = [guild_id];
  stateFromStores1 = user(displayProfile[16]).useStateFromStores(items5, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result26 = user(displayProfile[16]);
  const fetchWishlist = user(displayProfile[57]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result27 = user(displayProfile[57]);
  const items6 = [closure_7];
  const items7 = [stateFromStores1];
  stateFromStores2 = user(displayProfile[16]).useStateFromStores(items6, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items7);
  const items8 = [stateFromStores2, id === user.id];
  let tmp32 = tmp9;
  if (id !== user.id) {
    let tmp33 = null != stateFromStores2;
    if (tmp33) {
      tmp33 = arr11.length > 0;
    }
    tmp32 = tmp33;
  }
  closure_22 = tmp32;
  const tmp6Result28 = user(displayProfile[16]);
  const tmp34 = user(displayProfile[59]).useDisplayableBoardWidgets(user.id).length > 0;
  closure_23 = tmp34;
  const tmp6Result29 = user(displayProfile[59]);
  const profileTabIndices = user(displayProfile[60]).useProfileTabIndices(tmp34, tmp32);
  boardTabIndex = profileTabIndices.boardTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result30 = user(displayProfile[60]);
  [tmp37, c26] = showUserProfileActionSheet(isPreviewingChanges.useState(0), 2);
  const callback = obj9.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp36 = showUserProfileActionSheet(isPreviewingChanges.useState(0), 2);
  const pageHeights = user(displayProfile[61]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result31 = user(displayProfile[61]);
  const wishlistViewerCoachmark = user(displayProfile[62]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp32 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items9 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj9.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items9);
  const tmp6Result32 = user(displayProfile[62]);
  const profileSectionTabs = user(displayProfile[60]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp43;
  isVisible2 = tmp44;
  const items10 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items10);
  const items11 = [navigateToShop];
  callback3 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items11);
  const items12 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guild_id, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj9.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        const items = [closure_7.card, ];
        const obj2 = { backgroundColor: containerBackground };
        items[1] = obj2;
        const obj3 = { style: null, children: null };
        const items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = closure_7);
        obj3.style = items1;
        let _private;
        if (displayProfile != null) {
          _private = tmp40.private;
        }
        if (_private) {
          const obj = { username: name, containerBackground };
          _private = closure_2_19(UserProfilePrivateInfoBannerDefault, obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = tmp.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: tmp.id, iconSize: 16 };
          isProvisional = closure_2_19(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = tmp.id === tmp35.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = closure_2_19(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user: tmp, currentUser: tmp35, guildId: guild_id, style: items };
        items2[3] = closure_2_19(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: tmp.id, applicationIds: tmp22 };
          tmp18Result = tmp18(tmp19(13082), obj7);
        }
        items2[4] = tmp18Result;
        const obj9 = { userId: tmp.id, displayProfile, pendingBio: null };
        let tmp26;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        obj9.pendingBio = tmp26;
        items2[5] = closure_2_19(UserProfileAboutMeCardDefault, obj9);
        let tmp18Result4 = null != tmp21;
        if (tmp18Result4) {
          const obj10 = { userId: tmp.id, guildId: tmp21 };
          tmp18Result4 = tmp18(tmp19(7185), obj10);
        }
        items2[6] = tmp18Result4;
        guild_id = undefined;
        if (channel != null) {
          guild_id = tmp28.guild_id;
        }
        let tmp18Result5 = null != guild_id;
        if (tmp18Result5) {
          const obj11 = { user: tmp, currentUser: tmp35, guildId: null, channelId: null, showUserProfile: null };
          ({ guild_id: obj8.guildId, id: obj8.channelId } = tmp28);
          obj11.showUserProfile = showUserProfileActionSheet;
          tmp18Result5 = tmp18(tmp19(13052), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: tmp.id };
        items2[8] = closure_2_19(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: tmp.id };
        items2[9] = closure_2_19(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !tmp25;
        if (!isPreviewingChanges) {
          const obj25 = { userId: tmp.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(13055), obj25);
        }
        items2[10] = tmp18Result6;
        obj3.children = items2;
        return closure_2_20(timestampProducer, obj3);
      }
    }
    return null;
  }, items12);
  const items13 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, id === user.id];
  callback5 = obj9.useCallback(() => {
    const obj = { style: closure_7.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = closure_2_19(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = closure_2_19;
    } else {
      const obj2 = { wishlistId: tmp3, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = closure_2_19;
      tmp10 = closure_2_19(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_10;
    if (closure_10) {
      const obj3 = { userId: user.id, wishlistId: tmp3, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
    }
    items[1] = tmp9Result;
    obj.children = items;
    return closure_2_20(timestampProducer, obj);
  }, items13);
  const items14 = [handlePageContentSize, callback4, callback5, tmp34, tmp32, boardTabIndex, wishlistTabIndex, user.id, activeProfileTabSection === name.WIDGETS, id === user.id, containerBackground];
  const memo2 = obj9.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = closure_2_19(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    });
    const items = [obj];
    if (closure_23) {
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
      const obj5 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      obj4.children = tmp3(UserProfileWidgetsBoardContainer, obj5);
      obj3.page = tmp3(tmp4, obj4, boardTabIndex);
      items.push(obj3);
    }
    if (closure_22) {
      const obj6 = { id: "wishlist", label: null, page: null };
      const intl3 = tmp(1114).intl;
      obj6.label = intl3.string(tmp(1114).t["7lZ31J"]);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(wishlistTabIndex, arg0, arg1);
          },
        children: callback5()
      };
      obj6.page = tmp3(tmp4, obj7, wishlistTabIndex);
      items.push(obj6);
    }
    return items;
  }, items14);
  const tmp6Result33 = user(displayProfile[60]);
  const tmp6Result34 = user(displayProfile[75]);
  segmentedControlState = tmp6Result34.useSegmentedControlState({ pageWidth: tmp37, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[41]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj7 = { pageWidth: tmp37, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[41]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(displayProfile[61]).usePagerFillHeight();
  const items15 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items15);
  const tmp6Result35 = user(displayProfile[61]);
  const items16 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(displayProfile[61]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj8 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp96);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp96).OpenableUserProfileAvatar;
      }
      let obj10 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      let tmp58;
      if (isPreviewingChanges) {
        tmp58 = pendingBanner;
      }
      obj10.pendingBanner = tmp58;
      let tmp59;
      if (isPreviewingChanges) {
        tmp59 = pendingAvatarSrc;
      }
      obj10.pendingAvatarSrc = tmp59;
      let tmp60;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp60 = pendingAccentColor;
        }
      }
      obj10.pendingAccentColor = tmp60;
      let tmp61;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp61 = pendingThemeColors;
        }
      }
      obj10.pendingThemeColors = tmp61;
      obj10.disableInteraction = isPreviewingChanges;
      obj10.bannerAnimatedStyle = bannerAnimatedStyle;
      obj10.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj10.blurAnimatedProps = blurAnimatedProps;
      obj10.showBlur = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp56Result;
      if (true === _private) {
        let obj11 = { primaryColor };
        tmp56Result = tmp56(tmp(tmp2[78]), obj11);
      }
      obj10.privateBanner = tmp56Result;
      const items17 = [containerBackground(tmp(tmp2[77]), obj10), , ];
      let tmp54Result = !isPreviewingChanges;
      if (!isPreviewingChanges) {
        const items18 = [tmp3.bannerButtons, , ];
        let _private1;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj12 = { style: null, children: null };
        items18[1] = _private1;
        items18[2] = bannerAnimatedStyle;
        obj12.style = items18;
        let tmp66 = null;
        if (null != stateFromStores) {
          tmp66 = null;
          if (user.id !== stateFromStores.id) {
            tmp66 = null;
            if (!user.bot) {
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                let obj13 = { user };
                let tmp56Result6 = tmp56(closure_23, obj13);
              } else {
                tmp56Result6 = null;
                if (isGameFriends) {
                  const obj14 = { user };
                  tmp56Result6 = tmp56(boardTabIndex, obj14);
                }
              }
            }
          }
        }
        const items19 = [tmp66, ];
        const obj15 = { user, currentUser: stateFromStores, displayProfile, channel };
        items19[1] = tmp56(tmp(tmp2[80]), obj15);
        obj12.children = items19;
        tmp54Result = tmp54(tmp(tmp2[79]).View, obj12);
      }
      items17[1] = tmp54Result;
      const obj16 = { style: contentAnimatedStyle, children: null };
      const obj17 = { user, guildId: guild_id, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp72;
      if (isPreviewingChanges) {
        tmp72 = pendingAvatarSrc;
      }
      obj17.pendingAvatarSrc = tmp72;
      let tmp73;
      if (isPreviewingChanges) {
        tmp73 = pendingAvatarDecoration;
      }
      obj17.pendingAvatarDecoration = tmp73;
      obj17.backgroundColor = avatarBackground;
      const obj18 = { backgroundColor: statusBackground };
      obj17.statusStyle = obj18;
      const items20 = [containerBackground(OpenableUserProfileAvatar, obj17), ];
      const items21 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp17) {
          num2 = pendingBadgeDisplayOrder;
        }
      } else {
        num2 = 0;
      }
      const obj19 = { style: null, children: null };
      const obj20 = { paddingTop: num2, paddingBottom: channel(displayProfile[47])().bottom + pendingBio };
      items21[1] = obj20;
      obj19.style = items21;
      const obj21 = { customStatusActivity: tmp17, user, guildId: guild_id, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      let id2;
      if (channel != null) {
        id2 = channel.id;
      }
      obj21.channelId = id2;
      obj21.hasCustomProfileTheme = tmp25;
      obj21.showUserProfileActionSheet = showUserProfileActionSheet;
      obj21.isPreviewingChanges = isPreviewingChanges;
      obj21.bubbleRef = ref;
      const items22 = [containerBackground(closure_22, obj21), , ];
      let tmp54Result2 = null;
      if (null != stateFromStores) {
        const obj22 = { style: null, children: null };
        const items23 = [, ];
        ({ primaryInfo: arr27[0], profileContent: arr27[1] } = tmp3);
        obj22.style = items23;
        const obj23 = { user, channelId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null };
        let id3;
        if (channel != null) {
          id3 = channel.id;
        }
        obj23.channelId = id3;
        obj23.displayProfile = displayProfile;
        let tmp81;
        if (isPreviewingChanges) {
          tmp81 = pendingGlobalName;
        }
        obj23.displayNameOverride = tmp81;
        let tmp82;
        if (isPreviewingChanges) {
          tmp82 = pendingPronouns;
        }
        obj23.pronounsOverride = tmp82;
        let tmp83;
        if (isPreviewingChanges) {
          tmp83 = memo1;
        }
        obj23.badgesOverride = tmp83;
        let tmp84;
        if (isPreviewingChanges) {
          tmp84 = pendingDisplayNameStyles;
        }
        obj23.pendingDisplayNameStyles = tmp84;
        obj23.badgeContainerBackground = containerBackground;
        obj23.isPreviewingChanges = isPreviewingChanges;
        const items24 = [tmp56(wishlistTabIndex, obj23), , , , , , ];
        let tmp56Result7 = user.id !== stateFromStores.id;
        if (tmp56Result7) {
          const obj24 = { user, guildId: guild_id };
          tmp56Result7 = tmp56(tmp(tmp2[81]), obj24);
        }
        items24[1] = tmp56Result7;
        let tmp56Result8 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        if (tmp56Result8) {
          let obj25 = { user, channelId: null, guildId: null, applicationId: null, style: null, showUserProfile: null };
          let id4;
          if (channel != null) {
            id4 = channel.id;
          }
          obj25.channelId = id4;
          obj25.guildId = guild_id;
          obj25.applicationId = originApplicationId;
          obj25.style = obj8;
          obj25.showUserProfile = showUserProfileActionSheet;
          tmp56Result8 = tmp56(tmp(tmp2[82]), obj25);
          const tmpResult7 = tmp(tmp2[82]);
        }
        items24[2] = tmp56Result8;
        items24[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guild_id;
          obj.style = obj8;
          obj.showUserProfile = showUserProfileActionSheet;
          return closure_2_19(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj26 = { user, style: obj8 };
        items24[4] = tmp56(tmp(tmp2[83]), obj26);
        let tmp56Result9 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp56Result9) {
          const obj27 = { guildId: guild_id };
          tmp56Result9 = tmp56(c26, obj27);
        }
        items24[5] = tmp56Result9;
        let tmp56Result10 = user.id !== stateFromStores.id;
        if (tmp56Result10) {
          const obj28 = { user, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp86.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj28.disableCalls = disableCalls;
          obj28.disableMessage = disableMessage;
          obj28.location = _location;
          obj28.hasCustomProfileTheme = tmp25;
          obj28.style = tmp3.primaryButtons;
          tmp56Result10 = tmp56(tmp(tmp2[84]), obj28);
          const tmpResult8 = tmp(tmp2[84]);
        }
        items24[6] = tmp56Result10;
        obj22.children = items24;
        tmp54Result2 = tmp54(tmp74, obj22);
        tmp86 = pendingBadgeHiddenBadges;
      }
      items22[1] = tmp54Result2;
      if (!tmp32) {
        if (!tmp34) {
          let callback4Result = callback4();
        }
        const obj29 = { children: null };
        items22[2] = callback4Result;
        obj19.children = items22;
        items20[1] = tmp54(tmp74, obj19);
        obj16.children = items20;
        items17[2] = tmp54(tmp(tmp2[79]).View, obj16);
        obj29.children = items17;
        return tmp54(tmp55, obj29);
      }
      const obj30 = { onLayout: callback, children: null };
      const obj31 = { style: tmp3.profileTablist, children: null };
      const obj32 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp25) {
        str = "gradient-background";
      }
      const obj33 = { children: null };
      obj32.variant = str;
      const items25 = [containerBackground(tmp6(tmp2[86]).Tabs, obj32), ];
      const obj34 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr18.length * 100}%`;
      obj34.style = rect;
      items25[1] = containerBackground(navigateToShop, obj34);
      obj31.children = items25;
      const items26 = [stateFromStores1(navigateToShop, obj31), , ];
      const obj35 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
      const obj36 = { state: segmentedControlState };
      obj35.children = containerBackground(tmp6(tmp2[87]).SegmentedControlPages, obj36);
      items26[1] = containerBackground(tmp(tmp2[79]).View, obj35);
      const obj37 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp53 };
      items26[2] = containerBackground(tmp(tmp2[88]), obj37);
      obj33.children = items26;
      obj30.children = stateFromStores1(tmp6(tmp2[85]).LayerScope, obj33);
      callback4Result = tmp56(tmp74, obj30);
      tmp55 = stateFromStores2;
      const tmpResult6 = tmp(tmp2[77]);
    }
  }
  return null;
});
export { PrimaryInfo };
