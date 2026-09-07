// Module ID: 15920
// Function ID: 15921
// Dependencies: [19, 15483, 21, 15921, 15484, 11473, 15486, 4992, 14692, 2]

// Module 15920
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4992 */;
import _modDef14692 from "module_14692" /* 14692 */;
import apexExperimentDefault from "apexExperiment" /* 15484 */;
import importAllResult from "noop" /* 19 */;
import { initializeAndroidNotificationSettingsStore as closure_4 } from "_initializeAndroidNotificationSettingsStore" /* 15483 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const tmp = !apexExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = importAllResult.useMemo(() => {
    let obj = callback(closure_1_2[5]);
    obj = { sections: null, ListHeaderComponent: null };
    const items = [callback(closure_1_2[3]).buildOverviewCategoriesSection()];
    obj[0] = items;
    let tmp2;
    if (callback) {
      tmp2 = closure_1_1(closure_1_2[6]);
    }
    obj[1] = tmp2;
    return obj.createList(obj);
  }, items);
  useMountLayoutEffectDefault(() => {
    callback2();
  });
  return jsx(_modDef14692, { node });
});
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;
