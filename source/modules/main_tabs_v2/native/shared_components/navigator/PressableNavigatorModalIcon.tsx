// Module ID: 7943
// Function ID: 7944
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 7939, 7936, 7940, 7944, 1114, 2]
// Exports: default

// Module 7943 (PressableNavigatorModalIcon)
import jsxProd from "jsxProd" /* 21 */;
import HeaderShared from "HeaderShared" /* 7936 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7939 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  const obj = { source: importDefault("back" === str ? 7940 : 7944), onPress: goBack, accessibilityLabel: null };
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj.accessibilityLabel = stringResult;
  return <tmp4 isModal>{jsx(HeaderShared.HeaderIconButton, { source: importDefault("back" === str ? 7940 : 7944), onPress: goBack, accessibilityLabel: null })}</tmp4>;
};
