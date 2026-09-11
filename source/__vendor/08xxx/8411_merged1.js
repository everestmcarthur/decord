// Module ID: 8411
// Function ID: 8412
// Name: merged1
// Dependencies: [8402, 4436]

// Module 8411 (merged1)
import colorPropType from "colorPropType" /* 8402 */;
import emptyFunction from "module_4436" /* 4436 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
