// Module ID: 8671
// Function ID: 8672
// Name: Arrow
// Dependencies: [19, 21, 4574, 576, 1178, 8672, 2]
// Exports: default

// Module 8671 (Arrow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import _modDef8672 from "module_8672" /* 8672 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
const obj2 = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = closure_4();
  return jsx(native.Icon, { source: _modDef8672, size: native.Icon.Sizes.MEDIUM, style: closure_4().tintColor });
};
