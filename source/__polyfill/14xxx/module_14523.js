// Module ID: 14523
// Function ID: 14524
// Dependencies: [14524]

// Module 14523
import module_14524_mod from "module_14524" /* 14524 */;

const call = prototype.call;
let module_14524 = module_14524_mod;
if (module_14524) {
  const bind = prototype.bind;
  module_14524 = bind.bind(call, call);
}
if (!module_14524) {
  module_14524 = (arg0) => {
    closure_0 = arg0;
    return () => {
      const apply = call.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(tmp2);
      } else {
        applyArgumentsResult = apply(tmp2, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_14524;
