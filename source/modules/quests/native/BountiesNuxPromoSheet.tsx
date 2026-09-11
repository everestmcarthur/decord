// Module ID: 15126
// Function ID: 15127
// Name: BountiesNuxPromoSheet
// Dependencies: [19, 17, 21, 4606, 576, 4573, 15125, 10319, 1114, 5878, 5026, 2]
// Exports: default

// Module 15126 (BountiesNuxPromoSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import components_Button_Button from "components/Button/Button" /* 5026 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 5878 */;
import PromoSheet from "PromoSheet" /* 10319 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 15125 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
const obj2 = { illustrationContainer: { paddingTop: nativeDefault.space.PX_12 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
  }, []);
  const obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.DDpHZG);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.xs7q1I);
  const tmp = closure_6();
  obj.illustration = <View style={closure_6().illustrationContainer}>{jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  const obj3 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.cpT0Cq);
  obj3.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { gradientColor: "purple", title: null, description: null, illustration: null, actions: null });
};
