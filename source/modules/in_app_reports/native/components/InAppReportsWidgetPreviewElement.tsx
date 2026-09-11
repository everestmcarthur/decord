// Module ID: 8748
// Function ID: 8749
// Name: InAppReportsWidgetPreviewElement
// Dependencies: [19, 17, 21, 4606, 576, 7052, 8325, 7702, 8749, 7695, 8765, 4602, 1114, 2]
// Exports: default

// Module 8748 (InAppReportsWidgetPreviewElement)
import nativeDefault from "native" /* 576 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7052 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7702 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8325 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8749 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4606);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  let SpsnDY = dependencyMap;
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsWidgetPreview", "text-xs/bold");
  const tmp5 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj2 = { userId, widget, disableInteraction: true, cardStyle: null };
    const items = [tmp5.card, tmp.card];
    obj2.cardStyle = items;
    let tmp6 = React4(UserProfilePersonalWidgetCardDefault, obj2);
  } else {
    tmp6 = null;
    if (tmp2Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        const obj3 = { userId, widget, disableInteraction: true, cardStyle: null };
        const items1 = [tmp5.card, tmp.card];
        obj3.cardStyle = items1;
        tmp6 = React4(tmp2(8765).WidgetSection, obj3);
      }
    }
    tmp2Result = tmp2(7695);
  }
  if (null === tmp6) {
    return null;
  } else {
    const obj4 = { style: tmp.container, children: null };
    let Text = tmp2(4602).Text;
    if (null != typeConsolidationEyebrow.style) {
      const items2 = [tmp.title, typeConsolidationEyebrow.style];
      let title = items2;
    } else {
      title = tmp.title;
    }
    let obj5 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
    if (null != typeConsolidationEyebrow.style) {
      const intl2 = tmp2(1114).intl;
      SpsnDY = tmp2(1114).t.SpsnDY;
      let stringResult = intl2.string(SpsnDY);
    } else {
      const intl = tmp2(1114).intl;
      stringResult = intl.string(tmp2(1114).t.SpsnDY).toUpperCase();
      const str = intl.string(tmp2(1114).t.SpsnDY);
    }
    obj5.children = stringResult;
    Text = React4(Text, obj5);
    obj5 = [Text, tmp6];
    obj4.children = obj5;
    hasOwnProperty(View, obj4);
  }
};
