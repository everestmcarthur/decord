// Module ID: 8699
// Function ID: 8700
// Name: FormRadioRow
// Dependencies: [19, 21, 5737, 4325, 5739, 7210, 7216, 2]
// Exports: default

// Module 8699 (FormRadioRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4325 */;
import RedesignCompat from "RedesignCompat" /* 5737 */;
import TableRadioRow from "TableRadioRow" /* 5739 */;
import FormRowDefault from "FormRow" /* 7210 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default function FormRadioRow(arg0) {
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 }));
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  if (context) {
    const obj2 = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp8Result = tmp8(TableRadioRow.TableRadioRow, obj2);
  } else {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.style = style;
    obj3.onPress = onPress;
    obj3.accessibilityRole = tmp6;
    obj3.accessibilityState = tmp7;
    let tmp8Result3 = null;
    if ("right" === align) {
      const obj4 = { selected };
      tmp8Result3 = tmp8(tmp9(7216), obj4);
    }
    obj3.trailing = tmp8Result3;
    let tmp8Result4 = leading;
    if ("left" === align) {
      const obj5 = { selected };
      tmp8Result4 = tmp8(tmp9(7216), obj5);
    }
    obj3.leading = tmp8Result4;
    tmp8Result = tmp8(FormRowDefault, obj3);
  }
  return tmp8Result;
};
