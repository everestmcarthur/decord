// Module ID: 14201
// Function ID: 14202
// Name: EmptyState
// Dependencies: [19, 17, 21, 4605, 576, 4456, 4601, 2]
// Exports: default

// Module 14201 (EmptyState)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4456 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { textTransform: "none" };
const createStyles = fn(4605);
let obj2 = { container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, emptyTitle: { marginTop: 20, textTransform: "uppercase" }, emptyBody: { textAlign: "center", marginTop: 8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_7();
  const themeContext = shared.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  if (true === hasItem) {
    const tmp6 = closure_6;
  }
  shared;
  if (null != Illustration.Illustration) {
    const obj2 = { accessible: false, importantForAccessibility: "no", accessibilityRole: "none", resizeMode: "contain", style: null };
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj2.style = items;
    let tmp11Result = React4(Illustration.Illustration, obj2);
  } else {
    tmp11Result = null;
    if (tmp9) {
      const obj3 = { resizeMode: "contain", source: tmp2(4456).isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource, style: null };
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj3.style = items1;
      tmp11Result = React4(React3, obj3);
      const tmp2Result2 = tmp2(4456);
    }
    tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj4 = { style: null, accessible: true, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj4.style = items2;
  const items3 = [tmp11Result, , , ];
  let tmp17 = null;
  ({ children, bodyStyle } = Illustration);
  if (null != title) {
    const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
    const items4 = [tmp.emptyTitle, tmp14, tmp6];
    obj5.style = items4;
    obj5.children = title;
    tmp17 = React4(tmp2(4601).Text, obj5);
  }
  items3[1] = tmp17;
  let tmp19 = null;
  if (null != body) {
    const obj6 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
    const items5 = [tmp.emptyBody, bodyStyle];
    obj6.style = items5;
    obj6.children = body;
    tmp19 = React4(tmp2(4601).Text, obj6);
  }
  items3[2] = tmp19;
  items3[3] = children;
  obj4.children = items3;
  return hasOwnProperty(React2, obj4);
};
