// Module ID: 15105
// Function ID: 15106
// Name: BountiesScrollRecapPage
// Dependencies: [19, 17, 4598, 21, 576, 4606, 1115, 8900, 15106, 8393, 15107, 7052, 1611, 504, 15108, 4602, 1114, 8927, 15109, 5026, 2]
// Exports: BountiesScrollRecapPage

// Module 15105 (BountiesScrollRecapPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4602 */;
import components_Button_Button from "components/Button/Button" /* 5026 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7052 */;
import common_Video from "common/Video" /* 8393 */;
import OrbsIcon from "OrbsIcon" /* 8927 */;
import _modDef15106 from "module_15106" /* 15106 */;
import _modDef15107 from "module_15107" /* 15107 */;
import _modDef15108 from "module_15108" /* 15108 */;
import QuestProductDisplayNames from "QuestProductDisplayNames" /* 15109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

require = fn;
function BountiesRecapOrbsBackground(arg0) {
  ({ style, reducedMotion } = arg0);
  if (obj.isAndroid()) {
    const obj2 = { style, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none", children: null };
    const obj3 = { url: _modDef15106, style: React3.absoluteFillObject, autoplay: !reducedMotion };
    obj2.children = tmp3(tmp(8900).APNGPlayer, obj3);
    let tmp3Result = tmp3(React4, obj2);
  } else {
    const obj4 = { source: null, style: null, resizeMode: "contain", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    const obj5 = { uri: _modDef15107 };
    obj4.source = obj5;
    obj4.style = style;
    obj4.paused = reducedMotion;
    tmp3Result = tmp3(tmp(8393).VideoComponent, obj4);
  }
  return tmp3Result;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const lg = nativeDefault.radii.lg;
const createStyles = fn(4606);
let closure_9 = createStyles.createStyles(() => {
  const obj = { root: { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: null, centeredCopy: null, orbsBackground: null, headerLabel: null, titleRow: null, actions: null, orbAmount: null };
  const obj2 = { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.centeredCopy = { alignItems: "center", width: "100%" };
  obj.orbsBackground = { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 };
  const obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.headerLabel = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  const obj4 = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  obj.titleRow = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
  const rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
  obj.actions = rect;
  const obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
  let num = 0;
  if (obj7.isIOS()) {
    num = 6;
  }
  obj.orbAmount = { marginTop: num, lineHeight: 46 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = function BountiesScrollRecapPage(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = closure_9();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("BountiesScrollRecapPage", "text-xs/bold");
  const tmp3 = useSafeAreaInsetsDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp.root, style];
  obj3.style = items1;
  const obj4 = { style: React3.absoluteFillObject, pointerEvents: "none", children: null };
  const obj5 = { source: null, style: null, resizeMode: "cover", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  obj5.source = { uri: _modDef15108 };
  obj5.style = React3.absoluteFillObject;
  obj5.paused = stateFromStores;
  const items2 = [timestampProducer(common_Video.VideoComponent, obj5), timestampProducer(BountiesRecapOrbsBackground, { style: tmp.orbsBackground, reducedMotion: stateFromStores })];
  obj4.children = items2;
  const items3 = [React5(React4, obj4), ];
  const obj8 = { style: tmp.content, pointerEvents: "box-none", children: null };
  const obj9 = { style: tmp.centeredCopy, pointerEvents: "none", children: null };
  const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: null, children: null };
  const items4 = [tmp.headerLabel, typeConsolidationEyebrow.style];
  obj10.style = items4;
  const intl = util.intl;
  obj10.children = intl.string(util.t.CzRXoC);
  const items5 = [timestampProducer(Text_Text.Text, obj10), , ];
  const obj11 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: null };
  const obj12 = { style: tmp.titleRow, children: null };
  const items6 = [timestampProducer(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj6 = { uri: _modDef15108 };
  const obj7 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items6[1] = timestampProducer(Text_Text.Text, { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount });
  obj12.children = items6;
  obj11.children = React5(React4, obj12);
  items5[1] = timestampProducer(React4, obj11);
  const obj14 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
  const intl2 = util.intl;
  const obj13 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  obj14.children = intl2.format(util.t["2MEL67"], QuestProductDisplayNames.bountyProductNameIntlParams());
  items5[2] = timestampProducer(Text_Text.Text, obj14);
  obj9.children = items5;
  const items7 = [React5(React4, obj9), ];
  const obj16 = { style: null, children: null };
  const items8 = [tmp.actions, ];
  items8[1] = { bottom: tmp3.bottom + nativeDefault.space.PX_8 };
  obj16.style = items8;
  const obj18 = { grow: true, variant: "primary", text: null, size: "lg", onPress: null };
  const intl3 = util.intl;
  obj18.text = intl3.string(util.t.i4jeWR);
  obj18.onPress = onClose;
  obj16.children = timestampProducer(components_Button_Button.Button, obj18);
  items7[1] = timestampProducer(React4, obj16);
  obj8.children = items7;
  items3[1] = React5(React4, obj8);
  obj3.children = items3;
  return React5(React4, obj3);
};
