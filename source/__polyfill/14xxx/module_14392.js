// Module ID: 14392
// Function ID: 14393
// Dependencies: [14393]

// Module 14392
import module_14393_mod from "module_14393" /* 14393 */;

const call = prototype.call;
let module_14393 = module_14393_mod;
if (module_14393) {
  const bind = prototype.bind;
  module_14393 = bind.bind(call, call);
}
if (!module_14393) {
  module_14393 = (arg0) => {
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

export default module_14393;
