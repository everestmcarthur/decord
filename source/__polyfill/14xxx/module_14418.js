// Module ID: 14418
// Function ID: 14419
// Dependencies: [14393]

// Module 14418
import _mod14393 from "module_14393" /* 14393 */;

if (_mod14393) {
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
