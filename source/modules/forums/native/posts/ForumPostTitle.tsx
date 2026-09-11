// Module ID: 12109
// Function ID: 12110
// Name: ForumPostTitle
// Dependencies: [19, 21, 4606, 1116, 4602, 2]
// Exports: default

// Module 12109 (ForumPostTitle)
import Text_Text from "Text/Text" /* 4602 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
const PlatformUtils = fn(1116);
let obj3 = null;
if (PlatformUtils.isIOS()) {
  obj3 = { lineHeight: 22 };
}
const obj4 = { title: null };
const merged = Object.assign(obj3);
obj4.title = { marginBottom: 6 };
let closure_3 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const tmp = closure_3();
  return jsx(Text_Text.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: closure_3().title, onTextLayout, children: title });
};
