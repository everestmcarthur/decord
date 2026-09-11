// Module ID: 13650
// Function ID: 13651
// Name: GuildBoostingMarketingBoosterRecognitionCards
// Dependencies: [19, 17, 21, 4606, 576, 4602, 1114, 13651, 9466, 13652, 13578, 13653, 9843, 13654, 8865, 2]
// Exports: default

// Module 13650 (GuildBoostingMarketingBoosterRecognitionCards)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4602 */;
import HeartIcon from "HeartIcon" /* 8865 */;
import BoostGemIcon from "BoostGemIcon" /* 9466 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9843 */;
import BoostTier3Icon from "BoostTier3Icon" /* 13578 */;
import _modDef13651 from "module_13651" /* 13651 */;
import _modDef13652 from "module_13652" /* 13652 */;
import _modDef13653 from "module_13653" /* 13653 */;
import _modDef13654 from "module_13654" /* 13654 */;
import noop from "module_19" /* 19 */;

require = fn;
function Card(arg0) {
  const tmp = closure_6();
  const obj = { style: tmp.card, children: null };
  const obj2 = { style: tmp.iconContainer, children: React4(IconComponent, { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK }) };
  ({ IconComponent, children } = arg0);
  const items = [React4(View, obj2), React4(Text_Text.Text, { style: tmp.description, variant: "text-sm/medium", children })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(4606);
let obj2 = { card: { minHeight: 124, width: 172, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", flexDirection: "column", alignItems: "center", margin: 5, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 13, paddingVertical: 16 }, description: { textAlign: "center" }, iconContainer: { height: 30, marginBottom: 10 } };
let closure_6 = createStyles.createStyles(obj2);
createStyles = fn(4606);
let closure_8 = createStyles.createStyles({ container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" }, title: { textAlign: "center", marginHorizontal: 34 }, recognitionCardsContainer: { marginTop: 15, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx");

export default function GuildBoostingMarketingBoosterRecognitionCards() {
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.IzKs3o);
  const items = [React4(Text_Text.Heading, obj2), ];
  const obj3 = { style: tmp.recognitionCardsContainer, children: null };
  const obj4 = { icon: _modDef13651, IconComponent: BoostGemIcon.BoostGemIcon, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.TZigSO);
  const items1 = [React4(Card, obj4), , , ];
  const obj5 = { icon: _modDef13652, IconComponent: BoostTier3Icon.BoostTier3Icon, children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.hjQuV2);
  items1[1] = React4(Card, obj5);
  const obj6 = { icon: _modDef13653, IconComponent: ShieldUserIcon.ShieldUserIcon, children: null };
  const intl4 = util.intl;
  obj6.children = intl4.string(util.t["2RUcaM"]);
  items1[2] = React4(Card, obj6);
  const obj7 = { icon: _modDef13654, IconComponent: HeartIcon.HeartIcon, children: null };
  const intl5 = util.intl;
  obj7.children = intl5.string(util.t.bJoZKV);
  items1[3] = React4(Card, obj7);
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
};
