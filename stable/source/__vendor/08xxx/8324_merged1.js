// Module ID: 8324
// Function ID: 8325
// Name: merged1
// Dependencies: [8315, 4389]

// Module 8324 (merged1)
import colorPropType from "colorPropType" /* 8315 */;
import emptyFunction from "module_4389" /* 4389 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
