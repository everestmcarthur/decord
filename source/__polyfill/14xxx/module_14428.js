// Module ID: 14428
// Function ID: 14429
// Dependencies: [14403]

// Module 14428
import _mod14403 from "module_14403" /* 14403 */;

if (_mod14403) {
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
