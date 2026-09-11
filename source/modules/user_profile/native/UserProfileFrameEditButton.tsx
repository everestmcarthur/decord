// Module ID: 14685
// Function ID: 14686
// Name: UserProfileFrameEditButton
// Dependencies: [32, 19, 17, 7282, 1954, 1085, 21, 576, 4607, 14686, 7462, 1943, 8252, 11139, 1889, 4574, 14687, 1896, 1114, 14673, 5629, 8916, 1178, 13271, 2]
// Exports: default

// Module 14685 (UserProfileFrameEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const COLLECTIBLES_PREVIEW_SIZE = fn(7282).COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4607);
let obj2 = { previewContainer: null, noneIcon: null };
let size = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, paddingVertical: PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.previewContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let userProfileFrame;
  const tmp = closure_11();
  const canViewProfileFramesInCollectiblesShop = user(14686).useCanViewProfileFramesInCollectiblesShop("UserProfileFrameEditButton");
  const obj = user(14686);
  const items = [user(1943).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp5 = userProfileFrame(user(7462).useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp6;
  const obj2 = user(7462);
  const obj4 = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj4.userValue = profileFrame;
  let profileFrame1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj4.guildValue = profileFrame1;
  obj4.guildId = guildId;
  const profilePreviewValue = user(8252).getProfilePreviewValue(obj4);
  const obj3 = user(8252);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = user(11139).useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  if (type === user(1889).CollectiblesItemType.PROFILE_FRAME) {
    const first1 = product.items[0];
  }
  const tmp2Result = user(11139);
  userProfileFrame = user(8252).useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp5[1]];
  if (canViewProfileFramesInCollectiblesShop) {
    let name;
    if (product != null) {
      name = product.name;
    }
    if (name == null) {
      const intl = tmp2(1114).intl;
      name = intl.string(tmp2(1114).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == userProfileFrame) {
        const intl2 = tmp2(1114).intl;
        const obj5 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.ep5D4i, obj5);
      }
    }
    if (fetchCollectiblesProduct.isFetching) {
      const obj6 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
      const intl4 = tmp2(1114).intl;
      obj6.label = intl4.string(tmp2(1114).t.GWrZOd);
      const intl5 = tmp2(1114).intl;
      obj6.buttonText = intl5.string(tmp2(1114).t.MKDeyL);
      obj6.onPress = NOOP;
      obj6.leading = tmp19(tmp2(5629).ActivityIndicator, { animating: true, size: "large" });
      let obj7 = obj6;
    } else {
      obj7 = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
      const intl3 = tmp2(1114).intl;
      obj7.label = intl3.string(tmp2(1114).t.GWrZOd);
      const obj8 = { showNewBadge: tmp5[0] === tmp2(1943).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE };
      obj7.labelTrailing = tmp19(tmp2(14673).UserProfileEditFormLabelBadges, obj8);
      obj7.buttonText = formatToPlainStringResult;
      const obj9 = { text: formatToPlainStringResult };
      obj7.accessibilityValue = obj9;
      obj7.onPress = tmp16;
      if (null != first1) {
        const obj10 = { style: tmp.previewContainer, children: null };
        const obj11 = { profileFrame: first1, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(576).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: guildId(576).colors.BACKGROUND_SURFACE_HIGH };
        obj10.children = tmp19(guildId(8916), obj11);
        let tmp19Result = tmp19(View, obj10);
        const tmp24 = guildId(8916);
      } else {
        const obj12 = { source: guildId(13271), style: tmp.noneIcon };
        tmp19Result = tmp19(tmp2(1178).Icon, obj12);
      }
      obj7.leading = tmp19Result;
    }
    return jsx(tmp2(14673).UserProfileEditFormButton, obj7);
  } else {
    return null;
  }
  const tmp2Result2 = user(8252);
};
