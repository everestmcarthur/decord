// Module ID: 15480
// Function ID: 15481
// Dependencies: [19, 7975, 21, 11473, 14692, 2]

// Module 15480
import _modDef14692 from "module_14692" /* 14692 */;
import importAllResult from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7975 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function SettingsWebBrowserScreen() {
  const node = importAllResult.useMemo(() => {
    const items = [constants.SELECT_WEB_BROWSER];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14692, { node });
});
const result = require("set").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
