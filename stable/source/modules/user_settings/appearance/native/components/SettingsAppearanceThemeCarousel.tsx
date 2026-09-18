// Module ID: 15274
// Function ID: 15275
// Name: SettingsAppearanceThemeCarousel
// Dependencies: [19, 17, 15275, 21, 4296, 1178, 4560, 576, 4962, 12, 15276, 4561, 4564, 1231, 9366, 4556, 1608, 10762, 4528, 1114, 15279, 2]
// Exports: default

// Module 15274 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import noop from "module_19" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 15275 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = ReanimatedRexport.createAnimatedComponent(fn(1178).Icon);
const createStyles = fn(4560);
let obj = { container: { gap: nativeDefault.space.PX_24, alignItems: "center" }, textCentered: { textAlign: "center" }, labelGroup: null, titleContainer: null, floatingNuxContainer: null, floatingNux: null, arrowLeft: null, uppercase: null, selectionBorder: null, a11yThemeList: null, a11yThemeListScroll: null };
let obj3 = { gap: nativeDefault.space.PX_24, alignItems: "center" };
obj.labelGroup = { gap: nativeDefault.space.PX_4, alignItems: "center" };
let obj4 = { gap: nativeDefault.space.PX_4, alignItems: "center" };
obj.titleContainer = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj5 = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj.floatingNuxContainer = { position: "absolute", left: nativeDefault.space.PX_24 };
let obj7 = { borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj7.shadowColor = "#000000";
obj.floatingNux = obj7;
let obj8 = { transform: null };
let items = [{ rotate: "90deg" }];
obj8.transform = items;
obj.arrowLeft = obj8;
obj.uppercase = { textTransform: "uppercase" };
let size = { position: "absolute", alignSelf: "center", width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT, borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
obj.selectionBorder = size;
obj.a11yThemeList = { flexDirection: "row" };
obj.a11yThemeListScroll = { flexGrow: 0 };
let closure_11 = createStyles.createStyles(obj);
const __initData = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isMidnightNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isMidnightNuxVisible.get()?1:0,timingStandard),pointerEvents:isMidnightNuxVisible.get()?'auto':'none'};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasMidnightNux: closure_4, onThemeSelected } = themes);
  closure_11 = undefined;
  const tmp = closure_11();
  const isScreenReaderEnabled = themes(isPreview[8]).useIsScreenReaderEnabled();
  deviceWidth.useRef(null);
  const ref = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  closure_8 = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => "midnight" === theme.theme);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj = themes(isPreview[8]);
  const sharedValue = themes(isPreview[4]).useSharedValue(false);
  let obj2 = themes(isPreview[4]);
  const sharedValue1 = themes(isPreview[4]).useSharedValue(false);
  const items1 = [sharedValue, sharedValue1];
  const effect = deviceWidth.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items1);
  const items2 = [onThemeSelected];
  closure_11 = deviceWidth.useMemo(() => _modDef12.debounce(onThemeSelected, 180), items2);
  const items3 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = deviceWidth.useCallback((themePreset) => {
    const index = themePreset.index;
    return ref(currentThemeIndex(isPreview[10]), {
      themePreset: themePreset.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        if (null != ref.current) {
          const current = tmp.current;
          const currentIndex = current.getCurrentIndex();
          if (currentIndex === index) {
            return onThemeSelected(tmp3);
          } else {
            if (currentIndex !== tmp3) {
              if (0 === currentIndex) {
                const obj2 = { count: tmp3 };
                return tmp.current.next(obj2);
              } else {
                const current2 = tmp.current;
                const obj = { index: tmp3, animated: true };
                current2.scrollTo(obj);
              }
            }
            const current3 = tmp.current;
            if (current3 != null) {
              const obj3 = { index: tmp3, animated: true };
              current3.scrollTo(obj3);
            }
          }
        }
      },
      isNew: false
    });
  }, items3);
  let obj3 = themes(isPreview[4]);
  class L {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[11]);
      obj2 = closure_9;
      num = 0;
      if (closure_9.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withTiming(num, tmp(tmp2[12]).timingStandard), pointerEvents: null };
      str = "none";
      if (obj2.get()) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const obj4 = themes(isPreview[4]);
  L.__closure = { withTiming: themes(isPreview[11]).withTiming, isMidnightNuxVisible: sharedValue, timingStandard: themes(isPreview[12]).timingStandard };
  L.__workletHash = 3854555745742;
  L.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(L);
  let tmp13 = null;
  if (themes[currentThemeIndex].type !== themes(isPreview[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj7 = { source: currentThemeIndex(tmp3[14]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[5]).IconSizes.SMALL_20 };
    tmp13 = ref(sharedValue1, obj7);
  }
  const items4 = [tmp13, ];
  const obj8 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: themes[currentThemeIndex].getName() };
  items4[1] = ref(themes(isPreview[15]).Text, obj8);
  { style: tmp.titleContainer, children: null }.children = items4;
  if (!isScreenReaderEnabled) {
    if (!tmp2(tmp3[16]).isThumbstickScrollDevice) {
      const obj10 = { children: null };
      const obj11 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items5 = [tmp17(tmp12, obj11), ];
      const size = { ref, data: themes, renderItem: callback, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
      const obj12 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      size.style = obj12;
      size.width = ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN;
      size.height = ref.THEME_ITEM_HEIGHT;
      size.defaultIndex = defaultIndex;
      size.onSnapToItem = onThemeSelected;
      size.onProgressChange = function onProgressChange(arg0, arg1) {
        const rounded = Math.round(arg1);
        if (rounded !== ref.current) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp2.current = rounded;
          closure_11(rounded);
        }
        if (closure_1_4) {
          const _Math = Math;
          const tmp11 = arg1 < closure_8 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp11) {
            const result1 = sharedValue1.set(true);
          }
          value = sharedValue1.get();
          let tmp17 = !value;
          if (!value) {
            tmp17 = !tmp11;
          }
          const result2 = sharedValue.set(tmp17);
        }
      };
      items5[1] = tmp17(currentThemeIndex(tmp3[17]), size);
      obj10.children = items5;
      let tmp17Result1 = tmp11(sharedValue, obj10);
    }
    const obj13 = { children: tmp17Result1 };
    const obj14 = { animated: true, style: null, variant: "text-sm/medium", children: null };
    const items6 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj14.style = items6;
    if (isPreview) {
      if (themes[currentThemeIndex].type !== tmp2(tmp3[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
        const intl2 = tmp2(tmp3[19]).intl;
        let stringResult = intl2.string(tmp2(tmp3[19]).t.VqGKm0);
      }
      obj14.children = stringResult;
      const obj15 = { children: null };
      const items7 = [tmp17Result, ];
      const obj16 = { style: tmp.labelGroup, children: null };
      const items8 = [tmp18, tmp17(tmp24, obj14)];
      obj16.children = items8;
      items7[1] = tmp11(tmp12, obj16);
      obj15.children = items7;
      const obj17 = { style: tmp.container, children: null };
      const obj18 = { style: tmp.floatingNuxContainer, children: null };
      const obj19 = { style: null, children: null };
      const items9 = [tmp.floatingNux, animatedStyle, , ];
      ({ bgSurfaceOverlay: arr11[2], borderFaint: arr11[3] } = animatedStyles);
      obj19.style = items9;
      const obj20 = { style: null, source: null, size: null };
      const items10 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj20.style = items10;
      obj20.source = currentThemeIndex(tmp3[20]);
      obj20.size = tmp2(tmp3[5]).IconSizes.REFRESH_SMALL_16;
      const items11 = [tmp17(sharedValue1, obj20), ];
      const obj21 = { animated: true, style: null, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
      const items12 = [animatedStyles.textNormal, tmp.uppercase];
      obj21.style = items12;
      const intl3 = tmp2(tmp3[19]).intl;
      obj21.children = intl3.string(tmp2(tmp3[19]).t.y2b7CA);
      items11[1] = tmp17(tmp2(tmp3[15]).Text, obj21);
      obj19.children = items11;
      obj18.children = tmp11(currentThemeIndex(tmp3[4]).View, obj19);
      const items13 = [tmp17(tmp12, obj18), tmp11(sharedValue, obj15)];
      obj17.children = items13;
      return tmp11(tmp12, obj17);
    }
    const intl = tmp2(tmp3[19]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[19]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    tmp17Result = tmp17(tmp12, obj13);
  }
  const obj5 = { withTiming: themes(isPreview[11]).withTiming, isMidnightNuxVisible: sharedValue, timingStandard: themes(isPreview[12]).timingStandard };
  const obj6 = { style: tmp.titleContainer, children: null };
  tmp17Result1 = tmp17(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: ref(currentThemeIndex(isPreview[10]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return ref(closure_1_4, obj, "theme-" + index);
    })
  });
};
