// Module ID: 8444
// Function ID: 8445
// Name: merged1
// Dependencies: [8435, 4469]

// Module 8444 (merged1)
import colorPropType from "colorPropType" /* 8435 */;
import emptyFunction from "module_4469" /* 4469 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
