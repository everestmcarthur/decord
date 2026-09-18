// Module ID: 14549
// Function ID: 14550
// Dependencies: [14524]

// Module 14549
import _mod14524 from "module_14524" /* 14524 */;

if (_mod14524) {
  let fn = call.bind(call);
} else {
  fn = () => {
    const apply = call.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(tmp);
    } else {
      applyArgumentsResult = apply(tmp, arguments);
    }
    return applyArgumentsResult;
  };
}

export default fn;
