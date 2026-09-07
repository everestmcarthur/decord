// Module ID: 14864
// Function ID: 14865
// Dependencies: [19, 17, 21, 4560, 576, 14865, 2]

// Module 14864
import ThemesDefault from "Themes" /* 576 */;
import _modDef14865 from "module_14865" /* 14865 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;

({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { container: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => <closure_2 style={callback().container}>{jsx(_modDef14865, {})}</closure_2>);
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataScreen.tsx");

export default memoResult;
