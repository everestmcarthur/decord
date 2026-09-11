// Module ID: 8407
// Function ID: 8408
// Dependencies: [8408, 8409, 8410, 4436, 8400]

// Module 8407
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
