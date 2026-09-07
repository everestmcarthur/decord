// Module ID: 14298
// Function ID: 14299
// Dependencies: [14299, 14364]

// Module 14298
import assign from "assign" /* 14364 */;
import module_14299 from "module_14299" /* 14299 */;

let obj = { target: "Object", stat: true, arity: 2, forced: null };
obj[3] = Object.assign !== assign;
obj = { assign };
module_14299(obj, obj);
