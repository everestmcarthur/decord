// Module ID: 8690
// Function ID: 8691
// Name: InAppReportsWidgetPreviewElement
// Dependencies: [19, 17, 21, 4574, 576, 8267, 7644, 8691, 7637, 8707, 4570, 1114, 2]
// Exports: default

// Module 8690 (InAppReportsWidgetPreviewElement)
import nativeDefault from "native" /* 576 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7644 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8267 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8691 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  const tmp4 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj = { userId, widget, disableInteraction: true, cardStyle: null };
    const items = [tmp4.card, tmp.card];
    obj.cardStyle = items;
    let tmp6 = React4(UserProfilePersonalWidgetCardDefault, obj);
  } else {
    tmp6 = null;
    if (tmp5Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        const obj2 = { userId, widget, disableInteraction: true, cardStyle: null };
        const items1 = [tmp4.card, tmp.card];
        obj2.cardStyle = items1;
        tmp6 = React4(tmp5(8707).WidgetSection, obj2);
      }
    }
    tmp5Result = tmp5(7637);
  }
  let tmp9 = null;
  if (null !== tmp6) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    const intl = tmp5(1114).intl;
    obj4.children = intl.string(tmp5(1114).t.SpsnDY).toUpperCase();
    const items2 = [React4(tmp5(4570).Text, obj4), tmp6];
    obj3.children = items2;
    tmp9 = hasOwnProperty(View, obj3);
    const str = intl.string(tmp5(1114).t.SpsnDY);
  }
  return tmp9;
};
