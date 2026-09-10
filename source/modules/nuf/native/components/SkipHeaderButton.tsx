// Module ID: 12726
// Function ID: 12727
// Name: SkipHeaderButton
// Dependencies: [19, 21, 4574, 576, 1114, 7877, 2]
// Exports: default

// Module 12726 (SkipHeaderButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HeaderShared from "HeaderShared" /* 7877 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
const obj2 = { button: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, insideNavigatorButton: { paddingRight: 16 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
  const tmp = closure_3();
  label = label.label;
  if (label == null) {
    const intl = util.intl;
    label = intl.string(util.t["5Wxrcd"]);
  }
  const obj = {};
  const merged = Object.assign(label);
  const items = [tmp.button, ];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  obj.labelStyle = items;
  obj.label = label;
  obj.accessibilityLabel = label;
  return jsx(HeaderShared.HeaderTextButton, {});
};
