// Module ID: 14264
// Function ID: 14265
// Dependencies: [14253]

// Module 14264
import _mod14253 from "module_14253" /* 14253 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14253(arg0, arg2);
  return obj.intersects(new _mod14253(arg1, arg2), arg2);
};
