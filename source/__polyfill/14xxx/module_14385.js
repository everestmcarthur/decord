// Module ID: 14385
// Function ID: 14386
// Dependencies: [14360]

// Module 14385
import _mod14360 from "module_14360" /* 14360 */;

if (_mod14360) {
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
