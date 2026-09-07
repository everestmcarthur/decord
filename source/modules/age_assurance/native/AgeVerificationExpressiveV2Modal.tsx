// Module ID: 8442
// Function ID: 8443
// Name: MethodsScreen
// Dependencies: [5, 32, 19, 17, 8412, 1074, 21, 1379, 8443, 8445, 8447, 1115, 8449, 4560, 576, 8451, 8452, 8438, 4773, 8413, 8424, 8425, 8454, 8421, 8422, 4973, 5692, 4556, 8411, 2024, 1178, 4975, 1114, 2946, 5687, 5605, 8455, 8568, 7209, 4763, 5624, 8569, 8570, 1256, 7000, 2]
// Exports: default

// Module 8442 (MethodsScreen)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { TRUSTED_PROVIDERS_URL } from "set" /* 8412 */;
import { HelpdeskArticles } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function MethodsScreen(onClose) {
  ({ entryPoint, navigation } = onClose);
  let _require = navigation;
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let callback;
  let initiateAgeVerificationV2;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_10 = undefined;
  let isAgeVerificationCustomTabOpen;
  let memo;
  let callback1;
  let isAgeVerificationAuthSessionOpen;
  closure_15 = undefined;
  closure_16 = undefined;
  const tmp = isAgeVerificationCustomTabOpen();
  let obj = _require(onComplete[15]);
  const shouldShowExpressiveModalSubtitleAlt = obj.useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  obj1 = _require(onComplete[16]);
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch, error } = ageVerificationMethodsV2);
  let obj2 = _require(onComplete[17]);
  const availableMethodsV2 = obj2.useAvailableMethodsV2(methods);
  let items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  let obj3 = _require(onComplete[18]);
  initiateAgeVerificationV2 = obj3.useInitiateAgeVerificationV2({ onComplete: callback, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_7 = callback.useRef(false);
  [c8, c9] = methods(callback.useState(null), 2);
  _require = undefined;
  _require = modalSessionId((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              if (!closure_1_7.current) {
                obj1 = navigation(onComplete[19]);
                const result = obj1.trackAgeVerificationModalClicked(c3, navigation(onComplete[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(onComplete[19]).AgeVerificationModalCta.METHOD_SELECT, tmp49.method);
                if (tmp49.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  if (tmp49.method !== tmp22(tmp23[7]).AgeAssuranceMethod.OS_SIGNAL) {
                    let tmp22Result = tmp22(tmp23[20]);
                    const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                    tmp22Result = tmp22(tmp23[21]);
                    const result2 = tmp22Result.closeAgeVerificationAuthSession();
                    closure_1_7.current = true;
                    closure_1_9(tmp50);
                    c5 = 1;
                    c3 = 2;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = v0(tmp49);
                    return obj1;
                  } else {
                    navigation.navigate(memo.APP_STORE_VERIFICATION);
                  }
                } else {
                  navigation.navigate(memo.GOOGLE_WALLET_VERIFICATION);
                }
              }
              v0 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_1_7.current = false;
            closure_1_9(null);
            throw closure_4;
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c5 = 0;
            closure_1_7.current = false;
            closure_1_9(null);
          }
          c5 = 0;
          closure_1_7.current = false;
          closure_1_9(null);
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp40) {
          closure_4 = tmp40;
          if (tmp4 === c5) {
            v0 = tmp2;
            throw tmp40;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerificationV2, modalSessionId];
  closure_10 = callback.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  let obj4 = _require(onComplete[20]);
  isAgeVerificationCustomTabOpen = obj4.useIsAgeVerificationCustomTabOpen();
  let obj5 = _require(onComplete[20]);
  const items2 = [methods];
  const ageVerificationCustomTabCopy = obj5.useAgeVerificationCustomTabCopy();
  memo = callback.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items2);
  const effect = callback.useEffect(() => {
    const result = callback(onComplete[20]).resumeAgeVerificationCustomTab();
  }, []);
  const items3 = [memo];
  const effect1 = callback.useEffect(() => {
    if (null != memo) {
      const result = callback(onComplete[20]).setAgeVerificationCustomTabCopy(tmp);
      const obj = callback(onComplete[20]);
    }
  }, items3);
  const items4 = [callback];
  callback1 = callback.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = tmp(tmp2[20]);
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = tmp(tmp2[20]);
        if (!tmpResult.getIsAgeVerificationCustomTabOpen()) {
          const result = tmp(tmp2[20]).releaseAgeVerificationCustomTab();
          callback();
          const tmpResult1 = tmp(tmp2[20]);
        }
      }
      let isAgeVerificationAuthSessionAwaitingResult = tmp(tmp2[21]).getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        isAgeVerificationAuthSessionAwaitingResult = !tmp(tmp2[21]).getIsAgeVerificationAuthSessionOpen();
        const tmpResult3 = tmp(tmp2[21]);
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const result1 = tmp(tmp2[21]).closeAgeVerificationAuthSession();
        callback();
        const tmpResult4 = tmp(tmp2[21]);
      }
      const tmpResult2 = tmp(tmp2[21]);
    }
  }, items4);
  let obj6 = _require(onComplete[18]);
  const watchAgeVerificationStatusChange = obj6.useWatchAgeVerificationStatusChange(callback1);
  let obj7 = _require(onComplete[21]);
  isAgeVerificationAuthSessionOpen = obj7.useIsAgeVerificationAuthSessionOpen();
  closure_15 = callback.useRef(isAgeVerificationCustomTabOpen);
  closure_16 = callback.useRef(isAgeVerificationAuthSessionOpen);
  const items5 = [isAgeVerificationCustomTabOpen, callback1];
  const effect2 = callback.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !isAgeVerificationCustomTabOpen;
    }
    if (current) {
      callback1();
    }
    ref.current = isAgeVerificationCustomTabOpen;
  }, items5);
  const items6 = [isAgeVerificationAuthSessionOpen, callback1];
  const effect3 = callback.useEffect(() => {
    let current = ref2.current;
    if (current) {
      current = !isAgeVerificationAuthSessionOpen;
    }
    if (current) {
      callback1();
    }
    ref2.current = isAgeVerificationAuthSessionOpen;
  }, items6);
  if (isAgeVerificationCustomTabOpen) {
    obj = { copy: null };
    obj[0] = ageVerificationCustomTabCopy;
    let tmp19Result = tmp19(onClose(tmp3[22]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: null, children: null };
    obj[2] = tmp.container;
    const items7 = [tmp19(tmp2(tmp3[26]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    obj1 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    let tmp2Result = tmp2(tmp3[18]);
    obj1[3] = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items8 = [tmp19(tmp2(tmp3[27]).Text, obj1), ];
    obj2 = { variant: "text-md/medium", color: "text-subtle", style: null, children: null };
    obj2[2] = tmp.header;
    tmp2Result = tmp2(tmp3[18]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        onClose(onComplete[28]).openUrl(closure_7);
        const obj = onClose(onComplete[28]);
        const result = callback(onComplete[19]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[19]).AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    obj3 = { align: "center", justify: "center", spacing: 16, children: null };
    obj4 = { align: "center", justify: "center", spacing: 8, children: null };
    obj2[3] = tmp2Result.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = onClose(onComplete[28]);
      obj.openUrl(onClose(onComplete[29]).getArticleURL(_undefined.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = onClose(onComplete[29]);
      const result = callback(onComplete[19]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[19]).AgeVerificationModalCta.LEARN_MORE);
    }, undefined, fn, true);
    items8[1] = tmp19(tmp2(tmp3[27]).Text, obj2);
    obj4[3] = items8;
    items7[1] = closure_10(tmp2(tmp3[25]).Stack, obj4);
    obj3[3] = items7;
    const items9 = [closure_10(tmp2(tmp3[25]).Stack, obj3), , , ];
    tmp19Result = loading;
    if (loading) {
      obj5 = { align: "center", justify: "center", style: null, children: null };
      obj5[2] = tmp.loadingContainer;
      obj5[3] = tmp19(initiateAgeVerificationV2, { size: "large" });
      tmp19Result = tmp19(tmp2(tmp3[25]).Stack, obj5);
    }
    items9[1] = tmp19Result;
    let tmp20Result = !loading;
    if (!loading) {
      let tmp19Result1 = null != outageBannerMessage;
      if (tmp19Result1) {
        obj6 = { messageType: null, children: null };
        obj6[0] = tmp2(tmp3[30]).HelpMessageTypes.WARNING;
        obj6[1] = outageBannerMessage;
        tmp19Result1 = tmp19(tmp2(tmp3[30]).HelpMessage, obj6);
      }
      const items10 = [tmp19Result1, , ];
      if (tmp6) {
        items10[1] = !tmp6;
        let tmp19Result2 = tmp6;
        if (tmp6) {
          obj7 = { hasIcons: true, children: null };
          obj7[1] = availableMethodsV2.map((children) => {
            callback = children;
            const method = children.method;
            if (callback(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
              let GoogleNeutralIcon = tmp(tmp2[8]).VideoSelfieIcon;
            } else if (tmp(tmp2[7]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
              GoogleNeutralIcon = tmp(tmp2[9]).IdCardIcon;
            } else if (tmp(tmp2[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
              GoogleNeutralIcon = tmp(tmp2[10]).GoogleNeutralIcon;
            } else if (tmp(tmp2[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
              if (tmpResult.isIOS()) {
                let GoogleNeutralIcon2 = tmp(tmp2[12]).AppleNeutralIcon;
              } else {
                GoogleNeutralIcon2 = tmp(tmp2[10]).GoogleNeutralIcon;
              }
              GoogleNeutralIcon = GoogleNeutralIcon2;
              tmpResult = tmp(tmp2[11]);
            }
            if (null != GoogleNeutralIcon) {
              let obj = { IconComponent: null, variant: "secondary" };
              obj[0] = GoogleNeutralIcon;
              let tmp4 = _undefined2(tmp(tmp2[35]).TableRow.Icon, obj);
              let tmp5 = _undefined2;
            } else if (null != children.icon) {
              obj = { icon: null };
              obj[0] = children.icon;
              tmp4 = _undefined2(onClose(tmp2[36]), obj);
              tmp5 = _undefined2;
            } else {
              obj1 = { IconComponent: null, variant: "secondary" };
              obj1[0] = tmp(tmp2[37]).UnknownGameIcon;
              tmp4 = _undefined2(tmp(tmp2[35]).TableRow.Icon, obj1);
              tmp5 = _undefined2;
            }
            const combined = "" + children.method + "-" + children.vendor;
            if (c8 === combined) {
              let tmp5Result = tmp5(initiateAgeVerificationV2, {});
            } else {
              const obj2 = { size: "md", color: null };
              obj2[1] = onClose(tmp2[14]).colors.INTERACTIVE_ICON_DEFAULT;
              tmp5Result = tmp5(tmp(tmp2[38]).ChevronSmallRightIcon, obj2);
            }
            const obj3 = { trailing: tmp5Result, disabled: null != c8, icon: tmp4, label: children.title, subLabel: null, onPress: null };
            const items = [tmp5(callback(onComplete[27]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
            tmp5Result = null != children.providedBy;
            if (tmp5Result) {
              const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
              obj5[2] = children.providedBy;
              tmp5Result = tmp5(tmp(tmp2[27]).Text, obj5);
            }
            items[1] = tmp5Result;
            obj3[4] = closure_10(callback(onComplete[25]).Stack, { direction: "vertical", spacing: 4, children: items });
            obj3[5] = function onPress() {
              return closure_1_10(closure_0, combined);
            };
            return tmp5(callback(onComplete[35]).TableRow, obj3, combined);
          });
          tmp19Result2 = tmp19(tmp2(tmp3[34]).TableRowGroup, obj7);
        }
        const obj8 = { direction: "vertical", spacing: 12, children: null };
        items10[2] = tmp19Result2;
        obj8[2] = items10;
        tmp20Result = tmp20(tmp2(tmp3[25]).Stack, obj8);
      } else {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.emptyContainer;
        let obj10 = { messageType: null, button: null, children: null };
        obj10[0] = tmp2(tmp3[30]).HelpMessageTypes.ERROR;
        const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[32]).intl;
        obj11[2] = intl.string(onClose(tmp3[33]).hDvmYP);
        obj11[3] = refetch;
        obj10[1] = tmp19(tmp2(tmp3[31]).Button, obj11);
        const intl2 = tmp2(tmp3[32]).intl;
        const tmp29 = onClose(tmp3[33]);
        obj10[2] = intl2.string(error ? tmp29.Bkmk4Y : tmp29.cR6336);
        obj10 = tmp19(tmp2(tmp3[30]).HelpMessage, obj10);
        obj9[1] = obj10;
        tmp19(tmp2(tmp3[25]).Stack, obj9);
      }
    }
    items9[2] = tmp20Result;
    let tmp19Result4 = !loading;
    if (!loading) {
      tmp19Result4 = tmp6;
    }
    if (tmp19Result4) {
      tmp19Result4 = null != footerMessage;
    }
    if (tmp19Result4) {
      const obj12 = { variant: "text-sm/normal", color: "text-subtle", style: null, children: null };
      obj12[2] = tmp.footer;
      obj12[3] = footerMessage;
      tmp19Result4 = tmp19(tmp2(tmp3[27]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    items9[3] = tmp19Result4;
    obj[3] = items9;
    obj14[0] = closure_10(tmp2(tmp3[25]).Stack, obj);
    obj13[0] = tmp19(tmp2(tmp3[24]).ModalContent, obj14);
    tmp19Result = tmp19(tmp2(tmp3[23]).ModalScreen, obj13);
  }
  return tmp19Result;
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { headerStyle: null, container: null, header: null, loadingContainer: null, emptyContainer: null, footer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24 };
let obj1 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[5] = { textAlign: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", APP_STORE_VERIFICATION: "APP_STORE_VERIFICATION" };
let obj2 = { marginTop: ThemesDefault.space.PX_24 };
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const onComplete = entryPoint.onComplete;
  closure_3 = undefined;
  let memo;
  const tmp = callback2();
  closure_3 = tmp;
  memo = React.useMemo(() => entryPoint(onComplete[43]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    closure_0 = closeModal;
    closure_1 = closure_0;
    closure_2 = closure_1;
    closure_3 = closure_2;
    closeModal = function closeModal() {
      let arr = callback(4763);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(onComplete[40]).getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return closure_1_9(closure_1_13, { entryPoint: closure_1, navigation, onClose: closeModal, onComplete: closure_3, modalSessionId: closure_0 });
      }
    };
    obj[closure_1_12.METHODS] = obj;
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj3 = entryPoint(onComplete[40]);
    obj[2] = entryPoint(onComplete[40]).getHeaderBackButton();
    obj[3] = function render() {
      return closure_1_9(callback(8569), { onClose: closeModal, onComplete: closure_3, modalSessionId: closure_0 });
    };
    obj[closure_1_12.GOOGLE_WALLET_VERIFICATION] = obj;
    obj1 = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj5 = entryPoint(onComplete[40]);
    obj1[2] = entryPoint(onComplete[40]).getHeaderBackButton();
    obj1[3] = function render() {
      return closure_1_9(callback(8570), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[closure_1_12.APP_STORE_VERIFICATION] = obj1;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(onComplete[19]).trackAgeVerificationModalViewed(memo, entryPoint(onComplete[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(onComplete[32]).intl;
  obj[2] = intl.string(entryPoint(onComplete[32]).t["13/7kX"]);
  return callback(entryPoint(onComplete[44]).Navigator, obj);
};
