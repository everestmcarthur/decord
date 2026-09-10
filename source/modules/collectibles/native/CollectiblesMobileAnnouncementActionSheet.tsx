// Module ID: 16984
// Function ID: 16985
// Name: CollectiblesMobileAnnouncementActionSheet
// Dependencies: [19, 17, 1076, 7165, 1954, 21, 4574, 576, 1477, 6641, 1611, 4310, 16985, 4570, 1114, 16986, 7555, 7196, 7164, 16987, 5706, 4989, 2]
// Exports: default

// Module 16984 (CollectiblesMobileAnnouncementActionSheet)
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import Text_Text from "Text/Text" /* 4570 */;
import BottomSheetModal from "BottomSheetModal" /* 6641 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7196 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7555 */;
import _modDef16985 from "module_16985" /* 16985 */;
import _modDef16987 from "module_16987" /* 16987 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function CatEarsBackdrop() {
  const tmp = closure_11();
  const width = useWindowDimensionsDefault().width;
  const animatedPosition = BottomSheetModal.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  const fn = function t() {
    const obj = { transform: null };
    const items = [{ translateY: animatedPosition.get() + top - 60 }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  let items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj3.style = items;
  const obj4 = { style: null, children: null };
  const items1 = [tmp.mascotLayer, ];
  const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
  items1[1] = rect;
  obj4.style = items1;
  const obj5 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj5.source = { uri: _modDef16985 };
  obj5.style = tmp.mascotImage;
  obj4.children = React7(React4, obj5);
  obj3.children = React7(hasOwnProperty, obj4);
  return React7(ReanimatedRexportDefault.View, obj3);
}
function FeatureRow(arg0) {
  ({ icon, text } = arg0);
  const tmp = closure_11();
  const obj = { style: tmp.featureRow, children: null };
  const items = [icon, React7(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text })];
  obj.children = items;
  return closure_1_10(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = fn(7165).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { mascotContainer: null, mascotLayer: null, mascotImage: null, framePreviewImage: null, container: null, headerText: null, featureRow: null, featureText: null, featureRows: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.pointerEvents = "none";
obj2.mascotContainer = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.mascotLayer = {};
obj2.mascotImage = { width: "100%", aspectRatio: 1.8324022346368716 };
obj2.framePreviewImage = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
obj2.container = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.headerText = { textAlign: "center" };
let obj4 = {};
let obj5 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.featureRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureText = { flex: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureRows = { gap: nativeDefault.space.PX_32 };
let closure_11 = createStyles.createStyles(obj2);
const __initData = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = closure_11();
  const intl = markAsDismissed(1114).intl;
  const string = intl.string;
  const t = markAsDismissed(1114).t;
  if (obj.useProfileFramesMarketing("CollectiblesMobileAnnouncementActionSheet").showGiftingMarketing) {
    let stringResult = string(t["/4bQuG"]);
  } else {
    stringResult = string(t["+9vaAT"]);
  }
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = noop.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants2.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = CollectiblesActionCreators;
    const result = obj.openCollectiblesShopMobile({ screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET });
  }, items1);
  const callback1 = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const memo = noop.useMemo(() => closure_1_9(CatEarsBackdrop, {}), []);
  const obj2 = { onDismiss: callback1, backdropChildren: memo, children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj = markAsDismissed(16986);
  obj4.source = { uri: _modDef16987 };
  obj4.style = tmp.framePreviewImage;
  const items3 = [closure_9(closure_4, obj4), , , ];
  const obj6 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: null };
  const intl2 = tmp2(1114).intl;
  obj6.children = intl2.string(markAsDismissed(1114).t.vRCvqo);
  items3[1] = closure_9(markAsDismissed(4570).Text, obj6);
  const obj7 = { style: tmp.featureRows, children: null };
  const obj8 = { icon: closure_9(markAsDismissed(5706).PaintIllocon, { size: 32 }), text: null };
  const intl3 = tmp2(1114).intl;
  obj8.text = intl3.string(markAsDismissed(1114).t["6ZWB0C"]);
  const items4 = [closure_9(FeatureRow, obj8), , ];
  const obj9 = { icon: closure_9(markAsDismissed(5706).HeartIllocon, { size: 32 }), text: null };
  const intl4 = tmp2(1114).intl;
  obj9.text = intl4.string(markAsDismissed(1114).t.MkVbBY);
  items4[1] = closure_9(FeatureRow, obj9);
  const obj5 = { uri: _modDef16987 };
  items4[2] = closure_9(FeatureRow, { icon: closure_9(markAsDismissed(5706).ShopIllocon, { size: 32 }), text: stringResult });
  obj7.children = items4;
  items3[2] = closure_10(closure_5, obj7);
  const obj11 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1114).intl;
  obj11.text = intl5.string(markAsDismissed(1114).t.S9hXPI);
  obj11.onPress = callback;
  items3[3] = closure_9(markAsDismissed(4989).Button, obj11);
  obj3.children = items3;
  obj2.children = closure_10(closure_5, obj3);
  return closure_9(markAsDismissed(7164).BottomSheet, obj2);
};
