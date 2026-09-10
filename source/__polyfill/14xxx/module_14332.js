// Module ID: 14332
// Function ID: 14333
// Dependencies: [14333]

// Module 14332
import module_14333_mod from "module_14333" /* 14333 */;

const call = prototype.call;
let module_14333 = module_14333_mod;
if (module_14333) {
  const bind = prototype.bind;
  module_14333 = bind.bind(call, call);
}
if (!module_14333) {
  module_14333 = (arg0) => {
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

export default module_14333;
