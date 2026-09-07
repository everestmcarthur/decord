// Module ID: 17751
// Function ID: 17752
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 17752, 13899, 1114, 4527, 9431, 1896, 2]
// Exports: default

// Module 17751 (FormTrialActiveUserLimitPicker)
import noopAll from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let c4 = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  const str = activeTrialUserlimit.activeTrialUserlimit;
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = undefined;
  dependencyMap = onChange(17752)();
  if (null == str) {
    let intl = str(1114).intl;
    let stringResult = intl.string(str(1114).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  return jsx(onChange(13899), {
    label: stringResult,
    onPress() {
      let obj = onChange(paths[5]);
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = str(paths[4]).intl;
      obj[0] = intl.string(str(paths[4]).t["/JD9oe"]);
      obj[1] = paths;
      obj[2] = function onItemSelect(arg0) {
        callback(arg0);
        closure_1_1(closure_1_2[5]).hideActionSheet(closure_1_4);
      };
      obj[3] = str;
      obj.openLazy(str(paths[7])(paths[6], paths.paths), closure_1_4, obj);
    },
    disabled: activeTrialUserlimit.disabled
  });
};
