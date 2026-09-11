// Module ID: 8409
// Function ID: 8410
// Dependencies: [8410, 8411, 8412, 4436, 8402]

// Module 8409
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
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = colorPropType;
obj.borderColor = colorPropType;
obj.borderTopColor = colorPropType;
obj.borderRightColor = colorPropType;
obj.borderBottomColor = colorPropType;
obj.borderLeftColor = colorPropType;
obj.borderStartColor = colorPropType;
obj.borderEndColor = colorPropType;
obj.borderRadius = emptyFunction.number;
obj.borderTopLeftRadius = emptyFunction.number;
obj.borderTopRightRadius = emptyFunction.number;
obj.borderTopStartRadius = emptyFunction.number;
obj.borderTopEndRadius = emptyFunction.number;
obj.borderBottomLeftRadius = emptyFunction.number;
obj.borderBottomRightRadius = emptyFunction.number;
obj.borderBottomStartRadius = emptyFunction.number;
obj.borderBottomEndRadius = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.borderStyle = emptyFunction.oneOf(["solid", "dotted", "dashed"]);
obj.borderWidth = emptyFunction.number;
obj.borderTopWidth = emptyFunction.number;
obj.borderRightWidth = emptyFunction.number;
obj.borderBottomWidth = emptyFunction.number;
obj.borderLeftWidth = emptyFunction.number;
obj.opacity = emptyFunction.number;
obj.elevation = emptyFunction.number;

export default obj;
