// Module ID: 14604
// Function ID: 14605
// Dependencies: [14579]

// Module 14604
import _mod14579 from "module_14579" /* 14579 */;

if (_mod14579) {
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
