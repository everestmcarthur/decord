// Module ID: 12110
// Function ID: 12111
// Name: ForumPostNewTag
// Dependencies: [19, 21, 4607, 576, 1178, 2]
// Exports: default

// Module 12110 (ForumPostNewTag)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { container: { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  const obj = { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" };
  const items = [containerStyle.containerStyle, closure_3().container];
  obj.containerStyle = items;
  return jsx(native.NewTag, { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" });
};
