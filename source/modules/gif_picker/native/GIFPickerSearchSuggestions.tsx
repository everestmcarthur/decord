// Module ID: 10464
// Function ID: 10465
// Name: GIFPickerSearchSuggestions
// Dependencies: [19, 17, 10456, 21, 4607, 576, 504, 4603, 1114, 5027, 2]

// Module 10464 (GIFPickerSearchSuggestions)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10456 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4607);
const obj = { suggestionsContainer: { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 }, footerSuggestionsContainer: null, footerSuggestionsTitle: null };
let obj3 = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj.footerSuggestionsContainer = { justifyContent: "flex-start", paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { justifyContent: "flex-start", paddingVertical: nativeDefault.space.PX_16 };
obj.footerSuggestionsTitle = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const obj5 = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default noop.memo(function GIFPickerSearchSuggestions(onClickSuggestion) {
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = closure_7();
  const items = [GIFPickerViewStore];
  const stateFromStoresArray = onClickSuggestion(504).useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.footerSuggestionsContainer, children: null };
    const obj3 = { style: tmp.footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: null };
    const intl = tmp2(1114).intl;
    obj3.children = intl.string(tmp2(1114).t["3JGJo2"]);
    const items1 = [closure_5(tmp2(4603).Text, obj3), ];
    const obj4 = {
      style: tmp.suggestionsContainer,
      children: stateFromStoresArray.map((text) => {
          closure_0 = text;
          return closure_1_5(onClickSuggestion(5027).Button, {
            size: "sm",
            variant: "secondary",
            hitSlop: nativeDefault.space.PX_8,
            text,
            onPress() {
              return onClickSuggestion(closure_0);
            }
          }, text);
        })
    };
    items1[1] = closure_5(View, obj4);
    obj2.children = items1;
    tmp4 = closure_6(View, obj2);
  }
  return tmp4;
});
