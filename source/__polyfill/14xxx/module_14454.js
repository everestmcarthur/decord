// Module ID: 14454
// Function ID: 14455
// Dependencies: [14429]

// Module 14454
import _mod14429 from "module_14429" /* 14429 */;

if (_mod14429) {
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
