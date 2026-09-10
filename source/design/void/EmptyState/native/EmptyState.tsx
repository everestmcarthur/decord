// Module ID: 14152
// Function ID: 14153
// Name: EmptyState
// Dependencies: [19, 17, 21, 4574, 576, 4425, 4570, 2]
// Exports: default

// Module 14152 (EmptyState)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4425 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let obj2 = { container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, emptyTitle: { marginTop: 20, textTransform: "uppercase" }, emptyBody: { textAlign: "center", marginTop: 8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_6();
  shared;
  if (null != Illustration.Illustration) {
    const obj = { accessible: false, importantForAccessibility: "no", accessibilityRole: "none", resizeMode: "contain", style: null };
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj.style = items;
    let tmp8Result = React4(Illustration.Illustration, obj);
  } else {
    tmp8Result = null;
    if (tmp6) {
      const obj2 = { resizeMode: "contain", source: tmp2(4425).isThemeLight(tmp5) ? Illustration.lightSource : Illustration.darkSource, style: null };
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj2.style = items1;
      tmp8Result = React4(React3, obj2);
      const tmp2Result = tmp2(4425);
    }
    tmp6 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj3 = { style: null, accessible: true, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj3.style = items2;
  const items3 = [tmp8Result, , , ];
  let tmp14 = null;
  ({ children, bodyStyle } = Illustration);
  if (null != title) {
    const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
    const items4 = [tmp.emptyTitle, tmp11];
    obj4.style = items4;
    obj4.children = title;
    tmp14 = React4(tmp2(4570).Text, obj4);
  }
  items3[1] = tmp14;
  let tmp16 = null;
  if (null != body) {
    const obj5 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
    const items5 = [tmp.emptyBody, bodyStyle];
    obj5.style = items5;
    obj5.children = body;
    tmp16 = React4(tmp2(4570).Text, obj5);
  }
  items3[2] = tmp16;
  items3[3] = children;
  obj3.children = items3;
  return hasOwnProperty(React2, obj3);
};
