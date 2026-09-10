// Module ID: 8354
// Function ID: 8355
// Dependencies: [8350, 8351, 8352, 4403, 8342]

// Module 8354
import colorPropType from "colorPropType" /* 8342 */;
import _mod8350 from "module_8350" /* 8350 */;
import merged12 from "merged1" /* 8351 */;
import merged22 from "merged2" /* 8352 */;
import emptyFunction_mod from "module_4403" /* 4403 */;

const obj = {};
const size = Object.assign(_mod8350);
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
