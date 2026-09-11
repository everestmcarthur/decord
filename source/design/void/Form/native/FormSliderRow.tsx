// Module ID: 8701
// Function ID: 8702
// Name: FormSliderRow
// Dependencies: [19, 17, 21, 4606, 5737, 5658, 4602, 8364, 7210, 2]
// Exports: default

// Module 8701 (FormSliderRow)
import RedesignCompat from "RedesignCompat" /* 5737 */;
import FormRowDefault from "FormRow" /* 7210 */;
import _modDef8364 from "module_8364" /* 8364 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4606);
let closure_8 = createStyles.createStyles({ labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, slider: { marginStart: -4, marginTop: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  ({ label, trailing } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, trailing: 0 }));
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  const tmp5 = closure_8();
  if (context) {
    const obj2 = { children: null };
    const obj3 = { style: tmp5.labels, children: null };
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: label };
    const items = [hasOwnProperty(tmp2(4602).Text, obj4), trailing];
    obj3.children = items;
    const items1 = [tmp6(View, obj3), ];
    const obj5 = {};
    const merged1 = Object.assign(merged);
    obj5.style = tmp5.slider;
    items1[1] = hasOwnProperty(_modDef8364, obj5);
    obj2.children = items1;
    let tmp6Result = tmp6(tmp2(5658).Card, obj2);
  } else {
    const obj = { children: null };
    const obj6 = { label, trailing };
    const items2 = [hasOwnProperty(FormRowDefault, obj6), ];
    const obj7 = {};
    const merged2 = Object.assign(merged);
    items2[1] = hasOwnProperty(_modDef8364, obj7);
    obj.children = items2;
    tmp6Result = tmp6(React5, obj);
  }
  return tmp6Result;
};
