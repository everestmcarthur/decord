// Module ID: 7049
// Function ID: 7050
// Name: FreeFormErrorLabel
// Dependencies: [19, 21, 4341, 4489, 4634, 2]
// Exports: default

// Module 7049 (FreeFormErrorLabel)
import shared from "shared" /* 4489 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default function Label(style) {
  const children = style.children;
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
  return jsx(nodeText(4634).Text, { style: style.style, variant: "text-xs/medium", color: "text-feedback-critical", children });
};
