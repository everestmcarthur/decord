// Module ID: 14383
// Function ID: 14384
// Dependencies: [14358]

// Module 14383
import _mod14358 from "module_14358" /* 14358 */;

if (_mod14358) {
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
