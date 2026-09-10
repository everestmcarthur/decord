// Module ID: 6659
// Function ID: 6660
// Name: ErrorText
// Dependencies: [19, 21, 4308, 4456, 5023, 6660, 4601, 2]
// Exports: ErrorText

// Module 6659 (ErrorText)
import shared from "shared" /* 4456 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let nodeText;
  nodeText = nodeText(4308).getNodeText(children);
  const items = [nodeText];
  const effect = noop.useEffect(() => {
    let tmp2 = null != nodeText;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
  const obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", style: children.style, children: null };
  const items1 = [closure_3(nodeText(6660).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), closure_3(nodeText(4601).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })];
  obj2.children = items1;
  return closure_4(nodeText(5023).Stack, obj2);
};
