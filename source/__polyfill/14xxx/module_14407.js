// Module ID: 14407
// Function ID: 14408
// Dependencies: [14382]

// Module 14407
import _mod14382 from "module_14382" /* 14382 */;

if (_mod14382) {
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
