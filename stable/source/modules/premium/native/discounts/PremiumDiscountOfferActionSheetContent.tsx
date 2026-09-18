// Module ID: 16938
// Function ID: 16939
// Name: PremiumDiscountOfferActionSheetContent
// Dependencies: [19, 17, 21, 4560, 576, 11830, 1114, 9427, 5074, 5692, 4556, 15692, 4975, 8668, 2]

// Module 16938 (PremiumDiscountOfferActionSheetContent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import FolderIcon from "FolderIcon" /* 5074 */;
import native from "native" /* 5692 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8668 */;
import ChatSmileIcon from "ChatSmileIcon" /* 9427 */;
import UserIcon from "UserIcon" /* 11830 */;
import PremiumPerksListDefault from "PremiumPerksList" /* 15692 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = { contentContainer: { paddingHorizontal: 36, paddingTop: 18, paddingBottom: 36, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", display: "flex", flexDirection: "column", gap: 0 }, buttonContainer: { marginVertical: 6, width: "100%", height: 48 }, title: { width: "100%", textAlign: "center" }, heroIllustrationContainer: { alignItems: "center", justifyContent: "center", height: 188, width: "100%" } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { paddingHorizontal: 36, paddingTop: 18, paddingBottom: 36, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", display: "flex", flexDirection: "column", gap: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx");

export default noop.memo(function PremiumDiscountOfferActionSheetContent(arg0) {
  ({ discountOffer, onConfirm } = arg0);
  const tmp = closure_6();
  const obj = { IconComponent: UserIcon.UserIcon, label: null, description: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.kpMomJ);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.uVUtPw);
  const items = [obj, , ];
  const obj2 = { IconComponent: ChatSmileIcon.ChatSmileIcon, label: null, description: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t["R2IV/Q"]);
  const intl4 = util.intl;
  obj2.description = intl4.string(util.t["3SUJLd"]);
  items[1] = obj2;
  const obj3 = { IconComponent: FolderIcon.FolderIcon, label: null, description: null };
  const intl5 = util.intl;
  obj3.label = intl5.string(util.t["u/NJKc"]);
  const intl6 = util.intl;
  obj3.description = intl6.string(util.t.i1UuMk);
  items[2] = obj3;
  const amount = discountOffer.discount.amount;
  const obj4 = { style: tmp.contentContainer, children: null };
  const items1 = [React4(View, { style: tmp.heroIllustrationContainer, children: React4(native.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }) }), , , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl7 = util.intl;
  obj6.children = intl7.formatToPlainString(util.t.qowbUk, { percent: amount });
  items1[1] = React4(Text_Text.Text, obj6);
  items1[2] = React4(PremiumPerksListDefault, { perks: items });
  const obj7 = { style: tmp.buttonContainer, children: null };
  const obj8 = { size: "lg", text: null, onPress: null, grow: true, icon: null };
  const intl8 = util.intl;
  obj8.text = intl8.formatToPlainString(util.t.bkQ4bH, { percent: amount });
  obj8.onPress = onConfirm;
  const obj5 = { style: tmp.heroIllustrationContainer, children: React4(native.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }) };
  obj8.icon = React4(NitroWheelIcon.NitroWheelIcon, { size: "md", color: nativeDefault.unsafe_rawColors.WHITE });
  obj7.children = React4(components_Button_Button.Button, obj8);
  items1[3] = React4(View, obj7);
  obj4.children = items1;
  return hasOwnProperty(View, obj4);
});
