// Module ID: 14307
// Function ID: 14308
// Dependencies: [14308]

// Module 14307
import module_14308_mod from "module_14308" /* 14308 */;

const call = prototype.call;
let module_14308 = module_14308_mod;
if (module_14308) {
  const bind = prototype.bind;
  module_14308 = bind.bind(call, call);
}
if (!module_14308) {
  module_14308 = (arg0) => {
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

export default module_14308;
