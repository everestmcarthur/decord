// Module ID: 13145
// Function ID: 13146
// Name: FractionalNitroPreview
// Dependencies: [19, 17, 1074, 21, 4560, 576, 1114, 4987, 5587, 13146, 13147, 7133, 4556, 2]
// Exports: FractionalNitroPreview

// Module 13145 (FractionalNitroPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import FastImageDefault from "FastImage" /* 5587 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 7133 */;
import _modDef13146 from "module_13146" /* 13146 */;
import NitroIconDefault from "NitroIcon" /* 13147 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let obj2 = { container: { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 }, gradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, headerImage: { width: 211, height: 157, resizeMode: "cover" }, nitroIconContainer: { alignSelf: "flex-start" }, benefits: null, benefitRow: null };
let obj3 = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 };
obj2.benefits = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
let obj4 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj2.benefitRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = closure_7();
  _require = tmp;
  let items = [require("util").t.E1NP2x, require("util").t.kpMomJ, require("util").t.xT1Vfn, require("util").t.myyAEr, require("util").t.zTk8Ul];
  let obj = { style: tmp.container, children: null };
  const items1 = [closure_5(LinearGradientDefault, { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient }), , , ];
  let obj3 = { source: null, style: null };
  const obj4 = { uri: _modDef13146 };
  obj3.source = obj4;
  obj3.style = tmp.headerImage;
  items1[1] = closure_5(FastImageDefault, obj3);
  const obj2 = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  items1[2] = closure_5(View, { style: tmp.nitroIconContainer, children: closure_5(NitroIconDefault, {}) });
  const obj5 = { style: tmp.nitroIconContainer, children: closure_5(NitroIconDefault, {}) };
  items1[3] = closure_5(View, {
    style: tmp.benefits,
    children: items.map((item, index) => {
      const obj = { style: benefitRow.benefitRow, children: null };
      const items = [hasOwnProperty(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.colors.WHITE }), ];
      const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
      const intl = util.intl;
      obj3.children = intl.string(item);
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(View, obj, index);
    })
  });
  obj.children = items1;
  return closure_6(View, obj);
};
