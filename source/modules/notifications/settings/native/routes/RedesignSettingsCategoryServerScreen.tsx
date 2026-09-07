// Module ID: 15924
// Function ID: 15925
// Dependencies: [19, 21, 11473, 15921, 14692, 2]

// Module 15924
import _modDef14692 from "module_14692" /* 14692 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const node = importAllResult.useMemo(() => {
    let obj = callback(11473);
    obj = { sections: null };
    const items = [callback(15921).buildCategoryServerSettingsSection()];
    obj[0] = items;
    return obj.createList(obj);
  }, []);
  return jsx(_modDef14692, { node });
});
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx");

export default memoResult;
