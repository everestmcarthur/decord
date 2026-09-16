// Module ID: 14420
// Function ID: 14421
// Dependencies: [14421]

// Module 14420
import module_14421_mod from "module_14421" /* 14421 */;

const call = prototype.call;
let module_14421 = module_14421_mod;
if (module_14421) {
  const bind = prototype.bind;
  module_14421 = bind.bind(call, call);
}
if (!module_14421) {
  module_14421 = (arg0) => {
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

export default module_14421;
