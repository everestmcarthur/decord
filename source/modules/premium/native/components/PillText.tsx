// Module ID: 13471
// Function ID: 13472
// Name: PillText
// Dependencies: [1074, 21, 4607, 576, 13472, 5039, 4603, 2]
// Exports: default

// Module 13471 (PillText)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4603 */;
import LinearGradientDefault from "LinearGradient" /* 5039 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 13472 */;
import createStyles from "createStyles" /* 4607 */;
import size from "module_2" /* 2 */;

const HorizontalGradient = Constants.HorizontalGradient;
const jsx = jsxProd.jsx;
let obj = { pillTextContainer: { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" }, pillText: { textTransform: "uppercase" } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  ({ pillText, style } = arg0);
  const tmp = closure_5();
  const obj = { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColorsDefault(), children: null };
  const items = [tmp.pillTextContainer, style];
  obj.style = items;
  const tmp2 = usePremiumPrimaryGradientColorsDefault();
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(LinearGradientDefault, { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColorsDefault(), children: null });
};
