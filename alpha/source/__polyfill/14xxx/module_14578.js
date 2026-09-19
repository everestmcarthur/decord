// Module ID: 14578
// Function ID: 14579
// Dependencies: [14579]

// Module 14578
import module_14579_mod from "module_14579" /* 14579 */;

const call = prototype.call;
let module_14579 = module_14579_mod;
if (module_14579) {
  const bind = prototype.bind;
  module_14579 = bind.bind(call, call);
}
if (!module_14579) {
  module_14579 = (arg0) => {
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

export default module_14579;
