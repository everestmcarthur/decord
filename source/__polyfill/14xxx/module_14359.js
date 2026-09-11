// Module ID: 14359
// Function ID: 14360
// Dependencies: [14360]

// Module 14359
import module_14360_mod from "module_14360" /* 14360 */;

const call = prototype.call;
let module_14360 = module_14360_mod;
if (module_14360) {
  const bind = prototype.bind;
  module_14360 = bind.bind(call, call);
}
if (!module_14360) {
  module_14360 = (arg0) => {
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

export default module_14360;
