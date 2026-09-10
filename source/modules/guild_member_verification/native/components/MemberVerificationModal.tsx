// Module ID: 5621
// Function ID: 5622
// Name: MemberVerificationModal
// Dependencies: [19, 17, 2021, 5622, 5623, 21, 4341, 1178, 4605, 576, 1611, 4540, 5624, 5626, 504, 4429, 573, 5577, 5627, 5628, 5632, 5645, 5646, 5173, 1114, 7141, 2]
// Exports: default

// Module 5621 (MemberVerificationModal)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4341 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4429 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5622 */;

const ReanimatedRexport = ReanimatedRexport2;

const MemberVerificationAlertActionCreators = tmp3(5577);
require = fn;
const View = fn(17).View;
const MemberVerificationFormConstants = fn(5623);
({ SCROLL_EVENT_TIMER_MS: closure_7, useBannerHeight: closure_8 } = MemberVerificationFormConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(fn(1178).Icon);
const createStyles = fn(4605);
let obj = { flex: { flex: 1 }, flexLoading: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scrollContainer: null, closeButtonContainer: null, closeIconContainer: null, closeIconOverBanner: null, closeIconAfterBanner: null, headerSeparator: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.closeButtonContainer = { position: "absolute", right: 0 };
obj.closeIconContainer = { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.closeIconOverBanner = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
let obj5 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj.closeIconAfterBanner = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.headerSeparator = { marginHorizontal: 16, marginVertical: 12 };
let closure_12 = createStyles.createStyles(obj);
const __initData = { code: "function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}" };
const __initData2 = { code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,theme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,theme==='dark'?1:0],'clamp')};}" };
const __initData3 = { code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let top;
  closure_4 = undefined;
  closure_5 = undefined;
  let stateFromStores;
  let memo1;
  closure_8 = undefined;
  let tmp = closure_12();
  const rect = onClose(top[10])();
  top = rect.top;
  const sharedValue = guildId(top[6]).useSharedValue(0);
  let obj = guildId(top[6]);
  class A {
    constructor(arg0) {
      return closure_3.set(guildId.contentOffset.y);
    }
  }
  A.__closure = { scrollTop: sharedValue };
  A.__workletHash = 16447800091731;
  A.__initData = __initData;
  let obj2 = guildId(top[6]);
  const tmp7 = onClose(top[11])();
  closure_4 = tmp7;
  const tmp8 = closure_8();
  closure_5 = tmp8;
  const animatedScrollHandler = guildId(top[6]).useAnimatedScrollHandler(A);
  class M {
    constructor() {
      obj = closure_0(closure_2[6]);
      value = closure_3.get();
      items = [0];
      items[1] = closure_5 - top;
      num = 0;
      if ("dark" === closure_4) {
        num = 1;
      }
      obj1 = { opacity: null };
      items1 = [1];
      items1[1] = num;
      obj1.opacity = obj.interpolate(value, items, items1, "clamp");
      return obj1;
    }
  }
  const obj3 = guildId(top[6]);
  M.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp8, safeAreaTop: top, theme: tmp7 };
  M.__workletHash = 9776820170891;
  M.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(M);
  const obj4 = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp8, safeAreaTop: top, theme: tmp7 };
  class C {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[6]);
      items = [0];
      items[1] = closure_5 - top;
      obj.opacity = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
      return obj;
    }
  }
  const obj5 = guildId(top[6]);
  C.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp8, safeAreaTop: top };
  C.__workletHash = 4275816745587;
  C.__initData = __initData3;
  const animatedStyle1 = obj5.useAnimatedStyle(C);
  const obj6 = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp8, safeAreaTop: top };
  const setInitialVerificationEffect = guildId(top[12]).useSetInitialVerificationEffect(guildId);
  const tmp12 = onClose(top[13])(guildId);
  const obj7 = guildId(top[12]);
  let items = [stateFromStores];
  let items1 = [guildId];
  stateFromStores = guildId(top[14]).useStateFromStores(items, () => MemberVerificationFormStore.get(guildId), items1);
  let formFields;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  let formFields1;
  const memo = sharedValue.useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        flag = formFields.some((field_type) => field_type.field_type !== guildId(top[15]).VerificationFormFieldTypes.TERMS);
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items2);
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  const items3 = [formFields1];
  memo1 = obj9.useMemo(() => {
    let formFields;
    if (stateFromStores != null) {
      formFields = stateFromStores.formFields;
    }
    if (formFields == null) {
      formFields = [];
    }
    closure_0 = Object.values(MemberVerificationTypes.VerificationFormFieldTypes);
    return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
  }, items3);
  closure_8 = obj9.useRef(onClose);
  const effect = obj9.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo1];
  const effect1 = obj9.useEffect(() => {
    if (memo1) {
      DispatcherDefault.wait(() => {
        const current = ref.current;
        if (current != null) {
          current();
        }
        const result = guildId(top[17]).openMemberVerificationUpdateAlert();
      });
    }
  }, items4);
  if (null != tmp12) {
    if (null != setInitialVerificationEffect) {
      if (!memo1) {
        const obj10 = { style: tmp.flex, children: null };
        const obj11 = { style: tmp.scrollContainer, contentContainerStyle: null, scrollEventThrottle: null, keyboardShouldPersistTaps: "handled", onScroll: null, children: null };
        const obj12 = { paddingBottom: rect.bottom };
        obj11.contentContainerStyle = obj12;
        obj11.scrollEventThrottle = memo1;
        obj11.onScroll = animatedScrollHandler;
        const obj13 = { guild: tmp12, scrollTop: sharedValue, hasManualFormFields: memo };
        const items5 = [closure_9(tmp2(tmp3[20]), obj13), , ];
        const obj14 = { style: tmp.headerSeparator };
        items5[1] = closure_9(tmp2(tmp3[21]), obj14);
        const obj15 = {
          guild: tmp12,
          onSuccess(application_status) {
                  const tmp = guildId;
                  const tmp2 = null != GuildMemberStore.getSelfMember(guildId);
                  if (!tmp5) {
                    const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(tmp);
                    const tmp3Result = MemberVerificationAlertActionCreators;
                  }
                },
          onClose
        };
        class A {
          constructor(arg0) {
            return closure_3.set(guildId.contentOffset.y);
          }
        }
        obj11.children = items5;
        const items6 = [closure_10(tmp2(tmp3[6]).ScrollView, obj11), ];
        const obj16 = { style: null, children: null };
        const items7 = [tmp.closeButtonContainer, ];
        const obj17 = { top };
        items7[1] = obj17;
        obj16.style = items7;
        const obj18 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
        class M {
          constructor() {
            obj = closure_0(closure_2[6]);
            value = closure_3.get();
            items = [0];
            items[1] = closure_5 - top;
            num = 0;
            if ("dark" === closure_4) {
              num = 1;
            }
            obj1 = { opacity: null };
            items1 = [1];
            items1[1] = num;
            obj1.opacity = obj.interpolate(value, items, items1, "clamp");
            return obj1;
          }
        }
        obj18.accessibilityLabel = tmp25(tmp4(tmp3[24]).t.cpT0Cq);
        obj18.style = tmp.closeIconContainer;
        obj18.onPress = function onPress() {
          let tmp;
          if (onClose != null) {
            tmp = onClose();
          }
          return tmp;
        };
        const obj19 = { source: tmp2(tmp3[25]), style: null };
        const items8 = [tmp.closeIconOverBanner, animatedStyle];
        obj19.style = items8;
        const items9 = [closure_9(closure_11, obj19), ];
        const obj20 = { source: tmp2(tmp3[25]), style: null };
        class C {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[6]);
            items = [0];
            items[1] = closure_5 - top;
            obj.opacity = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
            return obj;
          }
        }
        tmp27[0] = tmp.closeIconAfterBanner;
        tmp27[1] = animatedStyle1;
        obj20.style = tmp27;
        items9[1] = closure_9(closure_11, obj20);
        obj18.children = items9;
        obj16.children = closure_10(tmp4(tmp3[23]).PressableOpacity, obj18);
        items6[1] = closure_9(closure_4, obj16);
        obj10.children = items6;
        let tmp28 = closure_10(tmp2(tmp3[19]), obj10);
        const tmp2Result = tmp2(tmp3[19]);
      }
      return tmp28;
    }
  }
  const obj8 = guildId(top[14]);
  tmp28 = closure_9(closure_4, { style: tmp.flexLoading, children: closure_9(guildId(top[18]).ActivityIndicator, {}) });
};
