// Module ID: 8870
// Function ID: 8871
// Name: ProfileEffectSampleV2
// Dependencies: [17, 8869, 21, 4605, 576, 5637, 8871, 8872, 2]
// Exports: default

// Module 8870 (ProfileEffectSampleV2)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5637 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8869 */;
import _modDef8871 from "module_8871" /* 8871 */;
import ProfileEffectDefault from "ProfileEffect" /* 8872 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4605 */;
import size_mod from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" }, profileBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, sampleProfileImage: { aspectRatio: CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO }, profileBorder: null };
let size = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj.profileBorder = size;
let closure_5 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default function ProfileEffectSample(hideBackground) {
  let flag = hideBackground.hideBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  const items = [tmp.profileContainer, ];
  let profileBackground = !flag;
  if (!flag) {
    profileBackground = tmp.profileBackground;
  }
  const obj = { style: items, children: null };
  items[1] = profileBackground;
  const obj2 = { style: null, source: null, accessible: false, resizeMode: "cover" };
  const items1 = [tmp.sampleProfileImage];
  obj2.style = items1;
  const obj3 = { uri: _modDef8871 };
  obj2.source = obj3;
  const items2 = [React3(FastImageDefault, obj2), , ];
  let tmp4Result = !flag;
  if (!flag) {
    const obj4 = { style: tmp.profileBorder };
    tmp4Result = tmp4(tmp3, obj4);
  }
  items2[1] = tmp4Result;
  items2[2] = React3(ProfileEffectDefault, { skuId: hideBackground.item.skuId, bannerAdjustment: 0, useThumbnail: true });
  obj.children = items2;
  return React4(View, obj);
};
