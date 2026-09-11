// Module ID: 14101
// Function ID: 14102
// Dependencies: [14098]

// Module 14101
import _mod14098 from "module_14098" /* 14098 */;


export default (arg0, arg1) => {
  const tmp = new _mod14098(arg0, arg1);
  return new _mod14098(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
