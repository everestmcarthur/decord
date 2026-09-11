// Module ID: 8412
// Function ID: 8413
// Dependencies: [8408, 8409, 8410, 4436, 8400]

// Module 8412
import colorPropType from "colorPropType" /* 8400 */;
import _mod8408 from "module_8408" /* 8408 */;
import merged12 from "merged1" /* 8409 */;
import merged22 from "merged2" /* 8410 */;
import emptyFunction_mod from "module_4436" /* 4436 */;

const obj = {};
const size = Object.assign(_mod8408);
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
