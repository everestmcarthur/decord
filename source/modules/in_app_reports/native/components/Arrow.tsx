// Module ID: 8731
// Function ID: 8732
// Name: Arrow
// Dependencies: [19, 21, 4607, 576, 1178, 8732, 2]
// Exports: default

// Module 8731 (Arrow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import _modDef8732 from "module_8732" /* 8732 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = closure_4();
  return jsx(native.Icon, { source: _modDef8732, size: native.Icon.Sizes.MEDIUM, style: closure_4().tintColor });
};
