// Module ID: 8472
// Function ID: 8473
// Name: merged1
// Dependencies: [8463, 4469]

// Module 8472 (merged1)
import colorPropType from "colorPropType" /* 8463 */;
import emptyFunction from "module_4469" /* 4469 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
