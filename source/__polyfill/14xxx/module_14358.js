// Module ID: 14358
// Function ID: 14359
// Dependencies: [14333]

// Module 14358
import _mod14333 from "module_14333" /* 14333 */;

if (_mod14333) {
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
