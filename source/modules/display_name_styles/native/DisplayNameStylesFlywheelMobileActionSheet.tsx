// Module ID: 16976
// Function ID: 16977
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: [19, 17, 1371, 1074, 1954, 21, 4294, 4425, 4509, 504, 4231, 1114, 2786, 7396, 7052, 4394, 1943, 7164, 7137, 7168, 5706, 1115, 5601, 16977, 8842, 4570, 4989, 4574, 576, 2]
// Exports: default

// Module 16976 (DisplayNameStylesFlywheelMobileActionSheet)
import nativeDefault from "native" /* 576 */;
import openUserSettings from "openUserSettings" /* 7396 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ UserSettingsSections: metroRequire, Fonts: closure_7 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4574);
let closure_11 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, imageContainer: null, image: null, title: null, subtitle: null, actions: null };
  const size = { width: "100%", height: 162, alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_24 };
  obj.imageContainer = size;
  obj.image = { width: "100%", height: "100%" };
  const obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.title = { textAlign: "center", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
  const obj3 = { textAlign: "center", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
  obj.subtitle = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  const obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx");

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = noop.useRef(null);
  const enabled = noop.useContext(markAsDismissed(4294).AccessibilityPreferencesContext).reducedMotion.enabled;
  const isThemeDarkResult = markAsDismissed(4425).isThemeDark(ref(4509)());
  const tmp6 = closure_11();
  const obj2 = markAsDismissed(4425);
  const items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = markAsDismissed(504);
  let result = ref(4231).canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const intl = markAsDismissed(1114).intl;
  const string = intl.string;
  const tmp9 = ref(2786);
  if (result) {
    let stringResult = string(tmp9.TyUdka);
  } else {
    stringResult = string(tmp9.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    openUserSettings.openUserSettings({ screen: c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
      markAsDismissed(7052).runAfterInteractions(() => {
        markAsDismissed(7396).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
          closure_1_0(constants.TAKE_ACTION);
          const result = closure_2_0(4394).UNSAFE_markDismissibleContentAsDismissed(closure_2_0(1943).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, { dismissAction: constants.INDIRECT_ACTION });
        });
      });
    });
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj5 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  const obj6 = { style: tmp6.content, children: null };
  const items4 = [
    closure_9(markAsDismissed(7168).ActionSheetHeaderBar, {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }),
  ,
  ,
  ,

  ];
  const obj8 = { style: tmp6.imageContainer, children: null };
  let tmp14Result = enabled;
  if (enabled) {
    tmp14Result = tmp14(tmp2(5706).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp14Result, ];
  if (enabled) {
    items5[1] = !enabled;
    obj8.children = items5;
    items4[1] = tmp15(tmp16, obj8);
    const obj9 = { variant: "display-md", style: tmp6.title, color: null, children: null };
    let str = "text-overlay-dark";
    let str2 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str2 = "text-overlay-light";
    }
    obj9.color = str2;
    const intl2 = tmp2(1114).intl;
    obj9.children = intl2.string(tmp4(2786).Uzms61);
    items4[2] = tmp14(tmp2(4570).Text, obj9);
    const obj10 = { variant: "text-lg/medium", style: tmp6.subtitle, color: null, children: null };
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj11 = { bottom: true, children: null };
    obj10.color = str;
    obj10.children = stringResult;
    items4[3] = tmp14(tmp2(4570).Text, obj10);
    const obj12 = { style: tmp6.actions, children: null };
    const obj13 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1114).intl;
    obj13.text = intl3.string(tmp2(1114).t["4P5I8V"]);
    obj13.onPress = callback;
    const items6 = [tmp14(tmp2(4989).Button, obj13), ];
    const obj14 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1114).intl;
    obj14.text = intl4.string(tmp2(1114).t.TulDPl);
    obj14.onPress = callback1;
    items6[1] = tmp14(tmp2(4989).Button, obj14);
    obj12.children = items6;
    items4[4] = tmp15(tmp16, obj12);
    obj6.children = items4;
    obj11.children = tmp15(tmp16, obj6);
    obj5.children = tmp14(tmp2(7137).SafeAreaPaddingView, obj11);
    return tmp14(tmp2(7164).BottomSheet, obj5);
  } else {
    if (tmp2Result.isIOS()) {
      const obj15 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj16 = { uri: tmp4(16977) };
      obj15.source = obj16;
      obj15.style = tmp6.image;
      obj15.enableAnimation = !enabled;
      let tmp14Result2 = tmp14(tmp4(5601), obj15);
      const tmp4Result = tmp4(5601);
    } else {
      const obj17 = { url: tmp4(16977), style: tmp6.image, autoplay: true };
      tmp14Result2 = tmp14(tmp2(8842).APNGPlayer, obj17);
    }
    tmp2Result = tmp2(1115);
  }
};
