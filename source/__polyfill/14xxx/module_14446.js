// Module ID: 14446
// Function ID: 14447
// Dependencies: [14421]

// Module 14446
import _mod14421 from "module_14421" /* 14421 */;

if (_mod14421) {
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
