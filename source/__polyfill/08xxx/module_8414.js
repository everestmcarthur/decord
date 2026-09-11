// Module ID: 8414
// Function ID: 8415
// Dependencies: [8410, 8411, 8412, 4436, 8402]

// Module 8414
import colorPropType from "colorPropType" /* 8402 */;
import _mod8410 from "module_8410" /* 8410 */;
import merged12 from "merged1" /* 8411 */;
import merged22 from "merged2" /* 8412 */;
import emptyFunction_mod from "module_4436" /* 4436 */;

const obj = {};
const size = Object.assign(_mod8410);
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
