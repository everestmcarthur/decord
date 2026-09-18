// Module ID: 14333
// Function ID: 14334
// Dependencies: [14308]

// Module 14333
import _mod14308 from "module_14308" /* 14308 */;

if (_mod14308) {
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
