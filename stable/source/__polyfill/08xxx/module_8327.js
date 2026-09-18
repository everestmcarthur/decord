// Module ID: 8327
// Function ID: 8328
// Dependencies: [8323, 8324, 8325, 4389, 8315]

// Module 8327
import colorPropType from "colorPropType" /* 8315 */;
import _mod8323 from "module_8323" /* 8323 */;
import merged12 from "merged1" /* 8324 */;
import merged22 from "merged2" /* 8325 */;
import emptyFunction_mod from "module_4389" /* 4389 */;

const obj = {};
const size = Object.assign(_mod8323);
const merged1 = Object.assign(merged12);
const merged2 = Object.assign(merged22);
let emptyFunction = emptyFunction_mod;
obj.resizeMode = emptyFunction.oneOf(["center", "contain", "cover", "repeat", "stretch"]);
let emptyFunction = emptyFunction_mod;
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = colorPropType;
obj.borderColor = colorPropType;
obj.borderWidth = emptyFunction.number;
obj.borderRadius = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.overflow = emptyFunction.oneOf(["visible", "hidden"]);
obj.tintColor = colorPropType;
obj.opacity = emptyFunction.number;
obj.overlayColor = emptyFunction.string;
obj.borderTopLeftRadius = emptyFunction.number;
obj.borderTopRightRadius = emptyFunction.number;
obj.borderBottomLeftRadius = emptyFunction.number;
obj.borderBottomRightRadius = emptyFunction.number;

export default obj;
