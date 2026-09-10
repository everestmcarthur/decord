// Module ID: 8388
// Function ID: 8389
// Name: merged1
// Dependencies: [8379, 4434]

// Module 8388 (merged1)
import colorPropType from "colorPropType" /* 8379 */;
import emptyFunction from "module_4434" /* 4434 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
