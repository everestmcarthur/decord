// Module ID: 6717
// Function ID: 6718
// Name: ErrorText
// Dependencies: [19, 21, 4341, 4489, 5058, 6718, 4634, 2]
// Exports: ErrorText

// Module 6717 (ErrorText)
import shared from "shared" /* 4489 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let nodeText;
  nodeText = nodeText(4341).getNodeText(children);
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
  const items1 = [closure_3(nodeText(6718).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), closure_3(nodeText(4634).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })];
  obj2.children = items1;
  return closure_4(nodeText(5058).Stack, obj2);
};
