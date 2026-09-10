// Module ID: 8391
// Function ID: 8392
// Dependencies: [8387, 8388, 8389, 4434, 8379]

// Module 8391
import colorPropType from "colorPropType" /* 8379 */;
import _mod8387 from "module_8387" /* 8387 */;
import merged12 from "merged1" /* 8388 */;
import merged22 from "merged2" /* 8389 */;
import emptyFunction_mod from "module_4434" /* 4434 */;

const obj = {};
const size = Object.assign(_mod8387);
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
