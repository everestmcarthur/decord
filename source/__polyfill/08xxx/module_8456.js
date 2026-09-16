// Module ID: 8456
// Function ID: 8457
// Dependencies: [8452, 8453, 8454, 4467, 8444]

// Module 8456
import colorPropType from "colorPropType" /* 8444 */;
import _mod8452 from "module_8452" /* 8452 */;
import merged12 from "merged1" /* 8453 */;
import merged22 from "merged2" /* 8454 */;
import emptyFunction_mod from "module_4467" /* 4467 */;

const obj = {};
const size = Object.assign(_mod8452);
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
