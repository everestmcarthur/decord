// Module ID: 10446
// Function ID: 10447
// Name: PremiumUpsellGradientBackground
// Dependencies: [19, 17, 7542, 21, 4638, 5072, 1094, 2]
// Exports: PremiumUpsellGradientBackground

// Module 10446 (PremiumUpsellGradientBackground)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import LinearGradientDefault from "LinearGradient" /* 5072 */;
import noop from "module_19" /* 19 */;

require = fn;
const Gradients = fn(7542).Gradients;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
const obj2 = { gradient: null };
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj2.gradient = { opacity: 0.1 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const obj = { style: closure_5().gradient, start: null, end: null, colors: null };
  const tmp = closure_5();
  const tmp2 = jsx;
  obj.start = ConstantsIOS.HorizontalGradient.START;
  obj.end = ConstantsIOS.HorizontalGradient.END;
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
  return tmp2(LinearGradientDefault, obj);
};
