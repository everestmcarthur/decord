// Module ID: 13304
// Function ID: 13305
// Name: PaymentFlowWarningMessage
// Dependencies: [19, 17, 21, 4560, 576, 5441, 1178, 4556, 2]
// Exports: default

// Module 13304 (PaymentFlowWarningMessage)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
const obj2 = { container: { padding: 10, marginVertical: 5, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: fn(5441).DARK_PRIMARY_630_LIGHT_PRIMARY_230 }, icon: { marginRight: 10 }, text: { flexShrink: 1 } };
let closure_6 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default function PaymentFlowWarningMessage(children) {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const size = { style: tmp.icon, color: nativeDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const items = [React4(native.WarningCircle, size), React4(Text_Text.Text, { variant: "text-sm/medium", style: tmp.text, children: children.message })];
  obj.children = items;
  return hasOwnProperty(View, obj);
};
