// Module ID: 18117
// Function ID: 18118
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 18118, 14104, 1115, 4689, 9664, 1897, 2]
// Exports: default

// Module 18117 (FormTrialActiveUserLimitPicker)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c4 = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  const str = activeTrialUserlimit.activeTrialUserlimit;
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = onChange(18118)();
  if (null == str) {
    let intl = str(1115).intl;
    let stringResult = intl.string(str(1115).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  return jsx(onChange(14104), {
    label: stringResult,
    onPress() {
      const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj2.title = intl.string(util.t["/JD9oe"]);
      obj2.items = items;
      obj2.onItemSelect = function onItemSelect(arg0) {
        closure_1_1(arg0);
        onChange(closure_2[5]).hideActionSheet(closure_2_4);
      };
      obj2.selectedItem = str;
      obj.openLazy(asyncRequireImpl(9664, dependencyMap.paths), c4, obj2);
    },
    disabled: activeTrialUserlimit.disabled
  });
};
