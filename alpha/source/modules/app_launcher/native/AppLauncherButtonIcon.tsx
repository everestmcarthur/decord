// Module ID: 12486
// Function ID: 12487
// Name: AppLauncherButtonIcon
// Dependencies: [19, 17, 21, 4590, 1610, 11202, 5275, 2]
// Exports: AppLauncherButtonIcon

// Module 12486 (AppLauncherButtonIcon)
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = { style: { overflow: "hidden" }, children: null };
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    const items = [style, ];
    const obj3 = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj3.transform = items1;
    items[1] = obj3;
    obj2.style = items;
    let tmp4Result = tmp4(tmp6(11202).PlusLargeIcon, obj2);
  } else {
    const obj4 = { style };
    const merged2 = Object.assign(merged);
    tmp4Result = tmp4(tmp6(5275).AppsIcon, obj4);
  }
  obj.children = tmp4Result;
  return <View style={{ overflow: "hidden" }}>{null}</View>;
};
